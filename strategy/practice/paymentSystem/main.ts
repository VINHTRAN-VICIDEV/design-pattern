import { IPaymentMethod } from './interface';
import { ApplePay, Banking, MoMo } from './paymentMethod';

class Product {
  private _name: string;
  private _price: number;
  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }
  getPrice(): number {
    return this._price;
  }
  getName(): string {
    return this._name;
  }
}

class Payment {
  private _products!: Product[];
  private _paymentMethod!: IPaymentMethod;

  constructor(products?: Product[]) {
    if (products) {
      this._products = products;
    } else {
      this._products = [];
    }
  }
  setPaymentMethod(paymentMethod: IPaymentMethod) {
    this._paymentMethod = paymentMethod;
  }
  addProduct(product: Product): void {
    this._products.push(product);
  }
  getProducts(): Product[] {
    return this._products;
  }
  getPrice(): number {
    const amount = this._products.reduce((prev, curr) => {
      return prev + curr.getPrice();
    }, 0);
    return amount;
  }
  getTotalAmount() {
    return this.getPrice() + this._paymentMethod.getFee(this.getPrice());
  }
  logAmountDetail(): void {
    const productString = this.getProducts()
      .map((product) => {
        return `${product.getName()}, priced at ${product.getPrice()}`;
      })
      .join(', \n');

    console.log(
      `${productString} 
Amount is ${this.getPrice()}
The fee is ${this._paymentMethod.getFee(this.getPrice())}
Total: ${this.getTotalAmount()}`
    );
  }
}

// We offer many payment method for our application such ac no MoMo, Banking, ApplePay. Methods also charge the fee based on the total amount but each method have specific logic by itself so.

// Generate many products;
const productAmount = 8;
const methodAmount = 3;
const payment = new Payment();
function generateProducts() {
  for (let i = 0; i < 8; i++) {
    const product = new Product(`Product ${i}`, 100 * Math.random() * 500);
    payment.addProduct(product);
  }
}
function randomPaymentMethod() {
  const paymentMethodIndex = Math.floor(Math.random() * methodAmount);
  switch (paymentMethodIndex) {
    case 0: {
      payment.setPaymentMethod(new MoMo());
    }
    case 1: {
      payment.setPaymentMethod(new Banking());
    }
    default: {
      payment.setPaymentMethod(new ApplePay());
    }
  }
}

generateProducts();
randomPaymentMethod();
payment.logAmountDetail();
