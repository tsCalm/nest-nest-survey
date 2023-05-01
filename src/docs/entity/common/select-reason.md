TypeOrm -> date, datetime, timestamp의 차이

- date
  - 날짜 정보만 저장할 수 있는 타입입니다.
  - 시간 정보는 저장되지 않습니다.
  - JavaScript에서는 Date 객체로 매핑됩니다.
- datetime
  - 날짜와 시간 정보를 모두 저장할 수 있는 타입입니다.
  - 시간대(timezone) 정보는 고려하지 않습니다.
  - MySQL에서는 'YYYY-MM-DD HH:MM:SS' 형식으로 저장됩니다.
  - JavaScript에서는 Date 객체로 매핑됩니다.
- timestamp
  - 날짜와 시간 정보를 모두 저장할 수 있는 타입입니다.
  - 시간대(timezone) 정보를 고려합니다.
  - MySQL에서는 UTC 기준으로 'YYYY-MM-DD HH:MM:SS' 형식으로 저장됩니다.
  - JavaScript에서는 Date 객체로 매핑됩니다.
  - 따라서, date는 날짜 정보만 필요한 경우에 사용하며, datetime은 시간 정보까지 필요한 경우에 사용합니다. timestamp는 시간대 정보까지 고려해야 하는 경우에 사용합니다.
