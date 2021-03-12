import { ShippingRatesRequest } from './chitchat.d';

export interface SnipCartOrdersResponse {
  items?: SnipCartOrder[];
  totalItems: number;
  offset: number;
  limit: number;
}

export interface SnipCartOrderResponse {
  items?: SnipCartOrder[];
  status?: null;
  paymentStatus?: null;
  campaignId?: null;
  invoiceNumber?: null;
  isRecurringOrder?: null;
  placedBy?: null;
  productId?: null;
  cascade: boolean;
  from?: null;
  to?: null;
  format?: null;
  totalItems: number;
  offset: number;
  limit: number;
}

export interface SnipCartOrder {
  id: string;
  discounts?: null[] | null;
  items?: SnipCartOrderItem[] | null;
  plans?: null[] | null;
  refunds?: null[] | null;
  taxes?: (TaxesEntity | null)[] | null;
  user: User;
  vnexT_MigrationFailed: boolean;
  token: string;
  isRecurringOrder: boolean;
  parentToken?: null;
  parentInvoiceNumber?: null;
  subscriptionId?: null;
  currency: string;
  creationDate: string;
  modificationDate: string;
  recoveredFromCampaignId?: null;
  status: string;
  paymentStatus: string;
  email: string;
  willBePaidLater: boolean;
  billingAddress: BillingAddressOrShippingAddress;
  shippingAddress: BillingAddressOrShippingAddress;
  shippingAddressSameAsBilling: boolean;
  creditCardLast4Digits: string;
  trackingNumber?: null;
  trackingUrl?: null;
  shippingFees: number;
  shippingProvider?: null;
  shippingMethod: string;
  cardHolderName?: null;
  paymentMethod: string;
  notes?: null;
  customFieldsJson: string;
  customFields: SnipCartCustomField[];
  userId: string;
  completionDate: string;
  cardType: string;
  paymentGatewayUsed: string;
  paymentDetails: PaymentDetails;
  taxProvider: string;
  lang: string;
  refundsAmount: number;
  adjustedAmount: number;
  finalGrandTotal: number;
  billingAddressFirstName?: null;
  billingAddressName: string;
  billingAddressCompanyName?: null;
  billingAddressAddress1: string;
  billingAddressAddress2: string;
  billingAddressCity: string;
  billingAddressCountry: string;
  billingAddressProvince: string;
  billingAddressPostalCode: string;
  billingAddressPhone?: null;
  shippingAddressFirstName?: null;
  shippingAddressName: string;
  shippingAddressCompanyName?: null;
  shippingAddressAddress1: string;
  shippingAddressAddress2: string;
  shippingAddressCity: string;
  shippingAddressCountry: string;
  shippingAddressProvince: string;
  shippingAddressPostalCode: string;
  shippingAddressPhone?: null;
  totalNumberOfItems: number;
  invoiceNumber: string;
  billingAddressComplete: boolean;
  shippingAddressComplete: boolean;
  shippingMethodComplete: boolean;
  savedAmount: number;
  subtotal: number;
  baseTotal: number;
  itemsTotal: number;
  totalPriceWithoutDiscountsAndTaxes: number;
  taxableTotal: number;
  grandTotal: number;
  total: number;
  totalWeight: number;
  totalRebateRate: number;
  customFields?: SnipCartCustomField[];
  shippingEnabled: boolean;
  numberOfItemsInOrder: number;
  paymentTransactionId: string;
  metadata?: MetaData;
  taxesTotal: number;
  itemsCount: number;
  summary: Summary;
  ipAddress: string;
  userAgent: string;
  hasSubscriptions: boolean;
}
export interface SnipCartOrderItem {
  paymentSchedule: PaymentSchedule;
  pausingAction: string;
  cancellationAction: string;
  token: string;
  name: string;
  price: number;
  quantity: number;
  fileGuid?: null;
  url: string;
  id: string;
  initialData: string;
  description: string;
  categories?: null[] | null;
  totalPriceWithoutTaxes: number;
  weight: number;
  image: string;
  originalPrice?: null;
  uniqueId: string;
  stackable: boolean;
  minQuantity?: null;
  maxQuantity: number;
  addedOn: string;
  modificationDate: string;
  shippable: boolean;
  taxable: boolean;
  duplicatable: boolean;
  width: number;
  height: number;
  length: number;
  metadata?: MetaData;
  __VNEXT_OrderId: number;
  totalPrice: number;
  totalWeight: number;
  taxes?: null[] | null;
  alternatePrices: AlternatePricesOrValidationErrors;
  customFields?: SnipCartCustomField[];
  unitPrice: number;
  hasDimensions: boolean;
  hasTaxesIncluded: boolean;
  totalPriceWithoutDiscountsAndTaxes: number;
}

export interface SnipCartCustomField {
  name: string;
  displayValue: string;
  value: string;
}
export interface PaymentSchedule {
  interval: number;
  intervalCount: number;
  trialPeriodInDays?: null;
  startsOn: string;
}
export interface AlternatePricesOrValidationErrors {}
export interface TaxesEntity {
  __VNEXT_OrderId: number;
  taxName: string;
  taxRate: number;
  amount: number;
  numberForInvoice: string;
  includedInPrice: boolean;
  appliesOnShipping: boolean;
  discountInducedAmountVariation: number;
}
export interface User {
  id: string;
  email: string;
  mode: string;
  statistics: Statistics;
  creationDate: string;
  billingAddressFirstName?: null;
  billingAddressName: string;
  billingAddressCompanyName?: null;
  billingAddressAddress1: string;
  billingAddressAddress2: string;
  billingAddressCity: string;
  billingAddressCountry: string;
  billingAddressProvince: string;
  billingAddressPostalCode: string;
  billingAddressPhone?: null;
  shippingAddressFirstName?: null;
  shippingAddressName: string;
  shippingAddressCompanyName?: null;
  shippingAddressAddress1: string;
  shippingAddressAddress2: string;
  shippingAddressCity: string;
  shippingAddressCountry: string;
  shippingAddressProvince: string;
  shippingAddressPostalCode: string;
  shippingAddressPhone?: null;
  shippingAddressSameAsBilling: boolean;
  status: string;
  sessionToken?: null;
  gravatarUrl: string;
  billingAddress: BillingAddressOrShippingAddress;
  shippingAddress: BillingAddressOrShippingAddress;
}
export interface Statistics {
  ordersCount: number;
  ordersAmount?: null;
  subscriptionsCount: number;
}
export interface BillingAddressOrShippingAddress {
  fullName: string;
  firstName?: null;
  name: string;
  company?: null;
  address1: string;
  address2: string;
  fullAddress: string;
  city: string;
  country: string;
  postalCode: string;
  province: string;
  phone?: null;
  vatNumber?: null;
  hasMinimalRequiredInfo: boolean;
  validationErrors: AlternatePricesOrValidationErrors;
}
export interface PaymentDetails {
  iconUrl?: null;
  display?: null;
  instructions?: null;
}
export interface Summary {
  subtotal: number;
  taxableTotal: number;
  total: number;
  payableNow: number;
  paymentMethod: string;
  taxes?: (TaxesEntity1 | null)[] | null;
  discountInducedTaxesVariation: number;
  adjustedTotal: number;
  shipping?: null;
}
export interface TaxesEntity1 {
  taxId?: null;
  name: string;
  rate: number;
  amount: number;
  unroundedAmount: number;
  numberForInvoice: string;
  includedInPrice: boolean;
  appliesOnShipping: boolean;
  discountInducedAmountVariation: number;
}

export interface SnipcartShipmentRate {
  cost: number;
  description?: string;
  guaranteedDaysToDelivery?: number;
  additionalInfos?: string;
  shippingProvider?: string;
}

export interface SnipcartRequestParams {
  offset?: number;
  limit?: number;
  status?:
  | 'InProgress'
  | 'Processed'
  | 'Disputed'
  | 'Shipped'
  | 'Delivered'
  | 'Pending'
  | 'Cancelled';
  invoiceNumber?: string;
  productId?: string;
  placedBy?: string;
  from?: string;
  to?: string;
  isRecurringOrder?: boolean;
}

interface MetaData {
  [key: string]: any;
}

export interface SnipCartDimensions {
  weight: number;
  width: number;
  length: number;
  height: number;
}

export interface SnipCartProductDefinition {
  id: string;
  name: string;
  price: number;
  url: string;
  description: string;
  image?: string;
  categories?: any;
  metadata?: MetaData;
  fileGuid?: string;
  quantity?: number;
  minQuantity?: number;
  maxQuantity?: number;
  quantityStep?: number;
  dimensions?: SnipCartDimensions;
  customFields?: MetaData[];
  stackable?: 'always' | 'auto' | 'never';
  shippable?: boolean;
  hasTaxesIncluded?: boolean;
  taxable?: boolean;
}

// Shipping Request Types
export interface SnipCartShippingRequest extends ShippingRatesRequest {
  eventName: string;
  mode: string;
  createdOn: string;
  content: Content;
}
export interface Content {
  shippingRateUserDefinedId: string;
  token: string;
  creationDate: string;
  modificationDate: string;
  status: string;
  currency: string;
  lang: string;
  paymentMethod: string;
  email: string;
  cardHolderName: string;
  billingAddressName: string;
  billingAddressCompanyName: string;
  billingAddressAddress1: string;
  billingAddressAddress2: string;
  billingAddressCity: string;
  billingAddressCountry: string;
  billingAddressProvince: string;
  billingAddressPostalCode: string;
  billingAddressPhone: string;
  shippingAddressName: string;
  shippingAddress: MetaData;
  shippingAddressCompanyName: string;
  shippingAddressAddress1: string;
  shippingAddressAddress2: string;
  shippingAddressCity: string;
  shippingAddressCountry: string;
  shippingAddressProvince: string;
  shippingAddressPostalCode: string;
  shippingAddressPhone: string;
  shippingAddressSameAsBilling: boolean;
  finalGrandTotal: number;
  shippingAddressComplete: boolean;
  creditCardLast4Digits: string;
  shippingFees: number;
  shippingMethod: string;
  items: ItemsEntity[];
  subtotal: number;
  totalWeight: number;
  discounts?: null[] | null;
  willBePaidLater: boolean;
}
export interface ItemsEntity {
  uniqueId: string;
  token: string;
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  quantity: number;
  url: string;
  weight: number;
  description: string;
  image: string;
  customFieldsJson: string;
  customFields: SnipCartCustomField[];
  stackable: boolean;
  maxQuantity?: null;
  totalPrice: number;
  totalWeight: number;
  width: number;
  height: number;
  length: number;
  shippable: boolean;
}