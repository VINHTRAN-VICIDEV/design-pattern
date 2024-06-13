import { IStrategyDiscount } from './interface';
import { HalfDiscount, NoDiscount, FullDiscount } from './strategyDiscounts';
class Ticket {
  private _name: string;
  private _price: number;
  private _description: string;
  private _iStrategyDiscount!: IStrategyDiscount;
  setStrategyDiscount(strategyDiscount: IStrategyDiscount): void {
    this._iStrategyDiscount = strategyDiscount;
  }
  constructor(name: string, price: number, description: string) {
    this._name = name;
    this._price = price;
    this._description = description;
  }

  getName(): string {
    return this._name;
  }
  getPrice(): number {
    return this._price;
  }
  getDescription(): string {
    return this._description;
  }
  getDiscount(): number {
    return this._iStrategyDiscount.doDiscount();
  }

  getPromotedPrice(): number {
    return this._price - this._price * this.getDiscount();
  }
  getDiscountStrategyName(): string {
    return this._iStrategyDiscount.getStrategyName();
  }
}

// We offer discount strategies for our application such ac no discount, half discount, full discount
// To generate multiple tickets that align with our business model, I use a for loop and random function

// utils
const ticketAmount = 5;
const defaultPrice = 100000;
function getStrategyDiscountByIndex(index: number): IStrategyDiscount {
  switch (index) {
    case 0: {
      return new NoDiscount();
    }
    case 1: {
      return new HalfDiscount();
    }
    default: {
      return new FullDiscount();
    }
  }
}
function generateStrategyIndex(length: number): number {
  return Math.floor(Math.random() * length);
}

// Generate randomly multiple tickets
function generateTicket() {
  for (let i = 0; i < ticketAmount; i++) {
    const ticket = new Ticket(
      i.toString(),
      defaultPrice * (i + 1),
      'This is a testing ticket'
    );
    ticket.setStrategyDiscount(
      getStrategyDiscountByIndex(generateStrategyIndex(ticketAmount))
    );

    console.log(
      `Ticket: ${ticket.getName()}, orginally priced at ${ticket.getPrice()}, was on a ${ticket.getDiscountStrategyName()} and is now priced at ${ticket.getPromotedPrice()} `
    );
  }
}
generateTicket();

// Generate randomly multiple tickets and it'll set second time to produce that the ticket can be set many time

function generateTicketAndSetSecondTime() {
  for (let i = 0; i < ticketAmount; i++) {
    const ticket = new Ticket(
      i.toString(),
      defaultPrice * (i + 1),
      'This is a testing ticket'
    );
    ticket.setStrategyDiscount(
      getStrategyDiscountByIndex(generateStrategyIndex(ticketAmount))
    );
    console.log(
      `FirstTime// Ticket: ${ticket.getName()}, orginally priced at ${ticket.getPrice()}, was on a ${ticket.getDiscountStrategyName()} and is now priced at ${ticket.getPromotedPrice()} `
    );
    ticket.setStrategyDiscount(
      getStrategyDiscountByIndex(generateStrategyIndex(ticketAmount))
    );

    console.log(
      `SecondTime// Ticket: ${ticket.getName()}, orginally priced at ${ticket.getPrice()}, was on a ${ticket.getDiscountStrategyName()} and is now priced at ${ticket.getPromotedPrice()} `
    );
  }
}

generateTicketAndSetSecondTime();
