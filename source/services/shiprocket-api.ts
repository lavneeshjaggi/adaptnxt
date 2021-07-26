import HttpClient from "./http-client";
import User from '../dto/user';
import { OrderPayload } from "../dto/order-payload";
import { ProductPayload } from "../dto/product-payload";


class ShiprocketApi extends HttpClient {
    public constructor(token?: string) {
        super('https://apiv2.shiprocket.in/v1/external', token);
    }

    public login = (user: User) => this.instance.post<{ 'token': string }>('/auth/login', user);
    public createOrder = (order: OrderPayload) => this.instance.post<any>('/orders/create/adhoc', order);
    public createProduct = (product: ProductPayload) => this.instance.post<any>('/products', product);
}

export default ShiprocketApi;