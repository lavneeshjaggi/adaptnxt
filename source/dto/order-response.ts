export interface OrderResponse {
    order_id: number;
    shipment_id: number;
    status: string;
    status_code: number;
    onboarding_completed_now: number;
    awb_code?: any;
    courier_company_id?: any;
    courier_name?: any;
}