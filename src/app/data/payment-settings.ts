export interface IPaymentSettings {
  item: string;
  quantity: number;
  price: number;
  couponCode?: string;
  serviceTax?: number;
  firstName: string;
  lastName: string;
  email: string;
  creditCardNumber: number;
  creditCardExpiryMonth: number;
  creditCardExpiryYear: number;
  cvvCode: number;
  isCardAddressSameAsBillingAddress: boolean;
  isTermsAndConditionsAgreed: boolean
}
