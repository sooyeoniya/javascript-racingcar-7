
/**
 * 각 자동차에 대한 정보 관리
 */
class Cars {
  /** @type {Map<string, number>} */ #carsInfo = new Map();

  constructor(carNames) {
    carNames.forEach((carName) => this.#initCarsInfo(carName));
  }

  #initCarsInfo(carName) {
    if (!this.#carsInfo.has(carName)) {
      this.#carsInfo.set(carName, 0);
    }
  }
}

export default Cars;
