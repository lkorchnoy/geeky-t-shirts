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
    return_name: string;
  return_address_1: string;
  return_address_2?: null;
  return_city: string;
  return_province_code: string;
  return_postal_code: string;
  return_country_code: string;
  return_phone: string;
  package_contents: string;
  description: string;
  value: string;
  value_currency: string;
  order_id?: string | null;
  order_store?: null;
  package_type: string;
  size_unit?: string | null;
  size_x: number;
  size_y: number;
  size_z: number;
  weight_unit: string;
  weight: number;
  is_insured: boolean;
  is_insurance_requested: boolean;
  is_media_mail_requested: boolean;
  is_signature_requested: boolean;
  postage_type: string;
  carrier: string;
  carrier_tracking_code?: string | null;
  tracking_url: string;
  ship_date: string;
  purchase_amount: string;
  provincial_tax?: null;
  provincial_tax_label?: null;
  federal_tax?: null;
  federal_tax_label?: null;
  postage_fee: string;
  insurance_fee?: string | null;
  delivery_fee?: string | null;
  created_at: string;
  postage_label_png_url: string;
  postage_label_zpl_url: string;
  rates?: RatesEntity[] | null;
}

export interface RatesEntity {
  postage_type: string;
  postage_carrier_type: string;
  postage_description: string;
  signature_confirmation_description?: null;
  delivery_time_description: string;
  tracking_type_description: string;
  is_insured: boolean;
  purchase_amount: string;
  provincial_tax?: null;
  provincial_tax_label?: null;
  federal_tax?: null;
  federal_tax_label?: null;
  postage_fee: string;
  insurance_fee?: string | null;
  delivery_fee?: string | null;
  payment_amount: string;
}