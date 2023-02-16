# new-nest-survey

old-nest-survey의 개선 버전

## 개발환경

- os: mac M1 Pro
- node version: v18.13.0
- npm version: 8.19.3
- mysql version: mysql Ver 8.0.31 for macos12.6 on arm64 (Homebrew)
- nest-cli version: 9.1.8

## 인프라

<img width="550" alt="스크린샷 2023-02-07 오후 5 51 26" src="https://user-images.githubusercontent.com/106916440/217197790-8e129e87-d388-48c8-b49a-6bf5adfe4dc4.png">

## [헥사고날 아키텍처](https://hssm93.tistory.com/entry/Hexagonal-Architecture-%ED%97%A5%EC%82%AC%EA%B3%A0%EB%82%A0-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)

<img width="422" alt="스크린샷 2023-02-16 오후 7 50 05" src="https://user-images.githubusercontent.com/106916440/219344806-3bc29558-15f2-456e-a0e1-14e9de03a8e9.png">
  
  
## ERD

<img width="875" alt="스크린샷 2023-02-12 오후 7 54 55" src="https://user-images.githubusercontent.com/106916440/218306824-7198eb98-9a6c-4eda-9180-829d96616520.png">

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

## TDD

1. 실패하는 테스트 규칙을 먼저 설정한다.
2. 최소한의 구현으로 실패하는 규칙을 통과하도록 구현한다.
3. 리팩토링을 통해 더 정교하게 구현하고 테스트를 통과시킨다.

## TypeOrm 최적화 계획

1. 엔티티를 업데이트할 때 typeorm 의 save 보다는 update 메서드를 사용한다.

## 프로젝트 진행

- nestjs & git actions ci/cd

  1. github workflow 생성 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-1)

  2. aws ec2 인스턴스 생성 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2-AWS-EC2-%EC%83%9D%EC%84%B1)
  3. aws ec2 인스턴스 접속 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2-AWS-EC2-%EC%A0%91%EC%86%8D-%EB%B0%8F-%EB%B0%B0%ED%8F%AC)
  4. aws ec2 인스턴스 배포 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-3-AWS-EC2-%EB%B0%B0%ED%8F%AC)
  5. aws ec2 인스턴스 pm2를 사용하여 백그라운드로 실행하기 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-6-AWS-EC2-%EB%B0%B0%ED%8F%AC)
  6. aws ec2 인스턴스 도메인 연결 & nginx 리버스 프록시 설정 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-4-AWS-EC2-%EB%B0%B0%ED%8F%AC-%EB%8F%84%EB%A9%94%EC%9D%B8)

  7. git actions를 통한 빌드 파일 s3 자동 업로드 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-4-AWS-EC2-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%EB%B0%B0%ED%8F%AC)

  8. aws code-deploy & pm2 & nginx를 사용한 자동배포 [바로가기](https://hssm93.tistory.com/entry/NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-4-AWS-EC2-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%EB%B0%B0%ED%8F%AC-2)

  9. AWS Certificate Manager, Route 53을 사용한 https 적용 [바로가기](https://hssm93.tistory.com/entry/10-NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-AWS-EC2-%EB%B0%B0%ED%8F%AC-https)

- ERD & Entity [바로가기](https://hssm93.tistory.com/entry/11-NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%97%94%ED%8B%B0%ED%8B%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0)

- 각 모듈별 유닛 테스트 케이스 계획

  1. type, interface, service 선언하기 [바로가기](https://hssm93.tistory.com/entry/11-NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-TDD-%EC%B2%AB%EA%B2%BD%ED%97%98)

  2. 실패하는 테스트 케이스 만들기 [바로가기](https://hssm93.tistory.com/entry/12-NestJs-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%8B%A4%ED%8C%A8%ED%95%98%EB%8A%94-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BC%80%EC%9D%B4%EC%8A%A4)

  3. 테스트 케이스 통과할 수 있도록 구현

  4. 테스트 케이스를 통과할 수 있도록 최소한으로 구현

- mock 데이터 10만개 넣어보기

- 성능 테스트, 부하테스트 진행하고 문서화하기

- 배포 테스트 진행하기
- 스웨거 문서 만들기
