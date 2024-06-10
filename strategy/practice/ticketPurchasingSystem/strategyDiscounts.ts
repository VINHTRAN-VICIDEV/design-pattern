import { IStrategyDiscount } from './interface';

export class NoDiscount implements IStrategyDiscount {
  doDiscount(): number {
    return 0;
  }
  getStrategyName(): string {
    return 'No Discount';
  }
}

export class HalfDiscount implements IStrategyDiscount {
  doDiscount(): number {
    return 0.5;
  }
  getStrategyName(): string {
    return 'Half discount';
  }
}

export class FullDiscount implements IStrategyDiscount {
  doDiscount(): number {
    return 1;
  }
  getStrategyName(): string {
    return 'Full discount';
  }
}
