class IHomeBuilder {
  addDoor() {}
  addFloor() {}
  addWindow() {}
  getHome() {}
}
class Home {
  door?: string;
  window?: string;
  floor?: string;
}

class Director {
  private homeBuilder: IHomeBuilder;
  constructor(homeBuilder: IHomeBuilder) {
    this.homeBuilder = homeBuilder;
  }
  public buildHomeWithoutDoor() {
    this.homeBuilder.addFloor();
    this.homeBuilder.addWindow();
  }
  public buildHomeWithoutWindow() {
    this.homeBuilder.addFloor();
    this.homeBuilder.addDoor();
  }
}

class SimpleHomeBuilder implements IHomeBuilder {
  private home: Home = {};
  getHome(): Home {
    return this.home;
  }
  addDoor() {
    this.home.door = 'Simple door';
  }
  addFloor(): void {
    this.home.floor = 'Simple floor';
  }
  addWindow(): void {
    this.home.window = 'Simple window';
  }
}
class RichHomeBuilder implements IHomeBuilder {
  private home: Home = {};
  addDoor(): void {
    this.home.door = 'Rich Door';
  }
  addFloor(): void {
    this.home.floor = 'Rich Floor';
  }
  addWindow(): void {
    this.home.window = 'Rich Window';
  }
  getHome(): Home {
    return this.home;
  }
}

const builderSimpleHome = new SimpleHomeBuilder();
const director = new Director(builderSimpleHome);
director.buildHomeWithoutDoor();
