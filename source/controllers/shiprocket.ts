import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { OrderPayload } from '../dto/order-payload';
import { OrderResponse } from '../dto/order-response';
import { ProductPayload } from '../dto/product-payload';
import { ProductInstance } from '../model/product';
import ShiprocketApi from '../services/shiprocket-api';
import shiprocketAuthAPI from '../services/shiprocketAuthAPI';

class ShiprocketController {
    async addProduct(req: Request, res: Response) {
        const { token } = await shiprocketAuthAPI.login({
            "email": req.body.email,
            "password": req.body.password
        });

        const payload = req.body as ProductPayload;

        try {
            if (!token)
                return res.status(401).json({
                    msg: 'Authorization denied'
                });
            else if (!payload)
                return res.status(400).json({
                    msg: 'Bad request'
                });
            else {
                const shiprocketApi = new ShiprocketApi(token as string);
                const response = await shiprocketApi.createProduct(payload);
                console.log("Chal rha hain");
                const id = uuidv4();
                const record = await ProductInstance.create({ ...req.body, id });
                return res.status(201).json({
                    record
                });
            }
        } catch (error) {
            return res.status(500).json({
                msg: 'fail to create product with error:' + error,
                status: 500,
                route: '/addproduct'
            });
        }
    }

    async createAdhocOrder(req: Request, res: Response) {
        const { token } = await shiprocketAuthAPI.login({
            "email": req.body.email,
            "password": req.body.password
        });

        const payload = req.body as OrderPayload;
        try {
            if (!token)
                return res.status(401).json({
                    msg: 'Authorization denied'
                });
            else if (!payload)
                return res.status(400).json({
                    msg: 'Bad request'
                });
            else {
                const shiprocketApi = new ShiprocketApi(token as string);
                const orderResponse: OrderResponse = await shiprocketApi.createOrder(payload);

                return res.status(201).json({
                    orderResponse
                });
            }
        } catch (error) {
            return res.status(500).json({
                msg: 'fail to create order',
                status: 500,
                route: '/createOrder'
            });
        }
    }
}

export default new ShiprocketController()