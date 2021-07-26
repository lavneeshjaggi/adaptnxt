// import shiprocket from './shiprocket';
import { Router } from 'express';
import ShiprocketController from '../controllers/shiprocket';
// import awb from '../controllers/awb';

const rootRouter = Router();

rootRouter.post('/addproduct', ShiprocketController.addProduct);
rootRouter.post('/createorder', ShiprocketController.createAdhocOrder);
// rootRouter.post('/assigneawb', awb.assignawb);

export default rootRouter;