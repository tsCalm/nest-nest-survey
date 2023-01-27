# new-nest-survey

old-nest-survey의 개선 버전

## 개발환경

- os: mac M1 Pro
- node version: v18.13.0
- npm version: 8.19.3
- mysql version: mysql Ver 8.0.31 for macos12.6 on arm64 (Homebrew)
- nest-cli version: 9.1.8

## 단위 테스트 계획 (개발자 [향로](https://jojoldu.tistory.com/category/%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%BD%94%EB%93%9C)님 블로그를 참고해서 계획)

- 규칙

  1. service의 private 함수처럼 해당 service에서만 사용되는 함수는 검증하지 않는다.

  - 부가적인 함수까지 모두 검증하는 경우는 내부 구현 방식이 조금만 변경되어도 테스트가 실패할 확률이 높다.
  - 비즈니스 기능단위로 테스트를 진행한다.

  2. 도메인 로직 변경을 의식하고 테스트는 하드코딩으로 진행한다.
  3. 예상 결과를 미리 테스트 코드로 구현후 구현부를 만들고 리팩토링 하는 과정으로 진행한다.

- 초기 테스팅 순서
  1. 파라메터, 예상 결과를 정의한 테스트를 만든다.
  2. findAll, findOne, update, delete 순으로 테스트 케이스를 만든다.
