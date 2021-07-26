import express from 'express';
import ShiprocketController from '../controllers/shiprocket';

const router = express.Router();

router.post('/createOrder', ShiprocketController.createAdhocOrder);

export = router;