interface Transport {
  deliver(): void;
}

class Truck implements Transport {
  deliver(): void {
    console.log('This is Truck transport');
  }
}
class Ship implements Transport {
  deliver(): void {
    console.log('This is Ship transport');
  }
}

class TransportFactory {
  createTransport(type: number): Transport | null {
    if (type == 1) {
      return new Truck();
    } else if (type == 2) {
      return new Ship();
    }
    console.log('Not found the transport for the type', 1);
    return null;
  }
}

function main() {
  const random = Math.round(Math.random() + 1);
  console.log('random', random);
  const transportFactory = new TransportFactory();
  const transport = transportFactory.createTransport(random);
  if (transport) {
    transport.deliver();
  }
}

main();
