export interface OrderItem {
    name: string;
    sku: string;
    units: number;
    selling_price: string;
    discount: string;
    tax: string;
    hsn: number;
}

export interface OrderPayload {
    email: string;
    password: string;
    order_id: string;
    order_date: string;
    pickup_location: string;
    channel_id: string;
    comment: string;
    billing_customer_name: string;
    billing_last_name: string;
    billing_address: string;
    billing_address_2: string;
    billing_city: string;
    billing_pincode: string;
    billing_state: string;
    billing_country: string;
    billing_email: string;
    billing_phone: string;
    shipping_is_billing: boolean;
    shipping_customer_name: string;
    shipping_last_name: string;
    shipping_address: string;
    shipping_address_2: string;
    shipping_city: string;
    shipping_pincode: string;
    shipping_country: string;
    shipping_state: string;
    shipping_email: string;
    shipping_phone: string;
    order_items: OrderItem[];
    payment_method: string;
    shipping_charges: number;
    giftwrap_charges: number;
    transaction_charges: number;
    total_discount: number;
    sub_total: number;
    length: number;
    breadth: number;
    height: number;
    weight: number;
}