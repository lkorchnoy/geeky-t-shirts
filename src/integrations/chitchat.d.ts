export interface Shipment {
    data?: {
      error?: {
        message?: string;
      };
    };
    id: string;
    status: string;
    batch_id?: null;
    to_name: string;
    to_address_1: string;
    to_address_2?: null;
    to_city: string;
    to_province_code: string;
    to_postal_code: string;
    to_country_code: string;
    to_phone?: null;