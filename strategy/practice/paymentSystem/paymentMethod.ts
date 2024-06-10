import { IPaymentMethod } from './interface';

export class MoMo implements IPaymentMethod {
  getFee(price: number): number {
    if (price > 500000) {
      return 50000;
    }
    if (price > 200000) {
      return 20000;
    }
    return 0;
  }
}

export class Banking implements IPaymentMethod {
  getFee(price: number): number {
    return 5000;
  }
}
export class ApplePay implements IPaymentMethod {
  getFee(price: number): number {
    if (price < 100000) {
      return 10000;
    }
    if (price < 500000) {
      return 2000;
    }
    return 15000;
  }
}
