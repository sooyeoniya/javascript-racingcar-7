export const MAX_TRY_COUNT = 100;
export const ERROR_PREFIX = '[ERROR]';
export const RACE_PREFIX = '실행 결과\n';
export const WINNER_PREFIX = '최종 우승자 : ';

export const INPUT_PROMPT_MESSAGES = Object.freeze({
  CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
});

export const ERROR_MESSAGES = Object.freeze({
  IS_EMPTY: '자동차 이름이 비어있습니다. 다시 입력해주세요.',
  DUPLICATE_NAME: '자동차 이름이 중복됩니다. 다시 입력해주세요.',
  NAME_LENGTH: '자동차 이름은 5자 이하로 입력해주세요.',
  NAME_FORM: '자동차 이름 형식이 올바르지 않습니다. 다시 입력해주세요.',

  IS_NUMBER: '시도 횟수가 숫자가 아닙니다. 다시 입력해주세요.',
  IS_INTEGER: '시도 횟수가 정수가 아닙니다. 다시 입력해주세요.',
  NUMBER_RANGE: '시도 횟수 범위가 유효하지 않습니다. 다시 입력해주세요.',
});
