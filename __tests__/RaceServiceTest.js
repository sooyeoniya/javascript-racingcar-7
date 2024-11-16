import RaceService from '../src/services/RaceService.js';
import Cars from '../src/domains/Cars.js';
import { mockRandoms } from '../src/utils/testUtils.js';

jest.mock('../src/domains/Cars.js');

describe('RaceService 클래스 테스트', () => {
  let cars, raceService;

  beforeEach(() => {
    cars = new Cars([ 'pobi', 'woni', 'sooni' ]);
    raceService = new RaceService(cars);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('race 함수 테스트', () => {
    it('race 함수를 호출하면 각 자동차를 모두 순회하며 한 번의 경주를 진행한다.', () => {
      // given
      jest.spyOn(cars, 'getCarsInfo').mockReturnValue(
        new Map([
          ['pobi', 0],
          ['woni', 0],
          ['sooni', 0],
        ])
      );
      mockRandoms([5, 3, 7]); //  5 -> pobi, 3 -> woni, 7 -> sooni

      // when
      raceService.race();

      // then
      // race 함수에는 반환 값이 없으므로, if 조건문을 활용하여 addCarScore()가 호출되었는지 확인하여 테스트
      expect(cars.addCarScore).toHaveBeenCalledWith('pobi'); // 5 >= 4
      expect(cars.addCarScore).not.toHaveBeenCalledWith('woni'); // 3 < 4
      expect(cars.addCarScore).toHaveBeenCalledWith('sooni'); // 7 >= 4
    });
  });

  describe('getWinner 함수 테스트', () => {
    it('getWinner 함수를 호출하면 자동차들 중 최종 우승자 배열을 반환한다.', () => {
      // given
      jest.spyOn(cars, 'getCarsInfo').mockReturnValue(
        new Map([
          ['pobi', 3],
          ['woni', 2],
          ['sooni', 3],
        ])
      );
      jest.spyOn(cars, 'getMaxScore').mockReturnValue(3);

      // when
      const winners = raceService.getWinner();

      // then
      expect(winners).toEqual(['pobi', 'sooni']);
    });
  });
});
