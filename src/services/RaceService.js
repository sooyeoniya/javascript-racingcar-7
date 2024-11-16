import Cars from '../domains/Cars.js';
import { Random } from '@woowacourse/mission-utils';

class RaceService {
  /** @type {Cars} */ #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  /**
   * 각 자동차를 모두 순회하며 한 번의 경주를 진행한다.
   * 각 자동차 별 0부터 9사이의 무작위 값을 생성해, 무작위 값이 4이상인 경우 점수를 +1 한다.
   */
  race() {
    this.#cars.getCarsInfo().forEach((_, carName) => {
      const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) this.#cars.addCarScore(carName);
    });
  }

  getWinner() {
    
  }
}

export default RaceService;
