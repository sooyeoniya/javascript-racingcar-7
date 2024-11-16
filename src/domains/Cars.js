/**
 * 각 자동차에 대한 정보 관리
 * Map<string, number>: <자동차 이름, 점수>
 */
class Cars {
  /** @type {Map<string, number>} */ #carsInfo = new Map();

  constructor(carNames) {
    carNames.forEach((carName) => this.#initCarsInfo(carName));
  }

  /**
   * 전체 자동차 정보 반환
   * @returns {Map<string, number>} 
   */
  getCarsInfo() {
    return this.#carsInfo;
  }

  /**
   * 자동차들 중 최고 점수를 반환한다.
   * @returns {number}
   */
  getMaxScore() {
    return Math.max(...this.#carsInfo.values());
  }

  /**
   * 해당하는 자동차의 점수 + 1 갱신
   * @param {string} carName 
   */
  addCarScore(carName) {
    if (this.#carsInfo.has(carName)) {
      this.#carsInfo.set(carName, this.#carsInfo.get(carName) + 1);
    }
  }

  /**
   * 전체 자동차 정보 초기화
   * @param {string} carName 
   */
  #initCarsInfo(carName) {
    if (!this.#carsInfo.has(carName)) {
      this.#carsInfo.set(carName, 0);
    }
  }
}

export default Cars;
