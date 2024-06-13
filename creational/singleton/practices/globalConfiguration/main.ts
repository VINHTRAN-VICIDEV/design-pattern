class Config {
  static #instance: Config;
  private constructor() {}
  static get instance(): Config {
    if (!Config.#instance) {
      Config.#instance = new Config();
    }
    return Config.#instance;
  }
}
const config1 = Config.instance;
const config2 = Config.instance;

console.log(config1 === config2);
