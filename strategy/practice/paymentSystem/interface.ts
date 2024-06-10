export interface IPaymentMethod {
  getFee(price: number): number;
}
