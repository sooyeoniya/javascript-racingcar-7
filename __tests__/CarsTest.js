import Cars from '../src/domains/Cars.js';

describe('Cars 클래스 테스트', () => {
  let cars;

  beforeEach(() => {
    const carNames = [ 'pobi', 'woni', 'sooni' ];
    cars = new Cars(carNames);
  });

  describe('getCarsInfo 함수 테스트', () => {
    it('getCarsInfo 함수를 호출하면 전체 자동차 정보를 반환한다.', () => {
      // given & when
      const carsInfo = cars.getCarsInfo();

      // then
      expect(carsInfo).toEqual(new Map([
        ['pobi', 0],
        ['woni', 0],
        ['sooni', 0],
      ]));
    });
  });

  describe('addCarScore 함수 테스트', () => {
    it('addCarScore 함수를 호출하면 해당 자동차의 점수가 +1 된다.', () => {
      // given & when
      cars.addCarScore('pobi'); // pobi 점수 1
      cars.addCarScore('pobi'); // pobi 점수 2
      cars.addCarScore('woni'); // woni 점수 1

      // then
      expect(cars.getCarsInfo()).toEqual(new Map([
        ['pobi', 2],
        ['woni', 1],
        ['sooni', 0],
      ]));
    });
  });

  describe('getMaxScore 함수 테스트', () => {
    it('getMaxScore 함수를 호출하면 자동차들 중 가장 큰 점수를 반환한다.', () => {
      // given
      cars.addCarScore('pobi'); // pobi 점수 1
      cars.addCarScore('pobi'); // pobi 점수 2
      cars.addCarScore('woni'); // woni 점수 1
      
      // when
      const maxScore = cars.getMaxScore();

      // then
      expect(maxScore).toBe(2); // pobi 점수가 가장 큼
    });
  });
});
