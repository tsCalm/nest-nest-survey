jest 기록

- toBe(value): 데이터의 타입과 값이 같은지 검사
- toStrictEqual(value): 오브젝트의 구조와 타입이 같은지 검사

survey: crud
question:
survey_id를 기준으로 question 및 option을 가져옴 - find
create, update, delete

quetion: create, update, delete만 있으면 됀다.

1. in, out port의 outputDto 타입을 먼저 수정하고 relation을 건다.
2. rds를 하나 생성한 후 seed data를 넣는다.
3. survey : search, findone(설문지 상세)를 기준으로 sql 성능을 체크한다.
4. ec2에 배포한 후 3번 성능을 체크한 후 비교한다.
5. index 작업을 한 후 3번 작업
6. 배포한 후 4번 작업 후 블로그 글 작성
7. nGrinder 활용한 서버 부하 테스트를 진행 후 블로그 작성
8. 성능 테스트 진행 후 ec2 -> eb로 변경하고 로드밸런싱, 오토 스케일링, 모니터링 사용하여 블로그 글 작성
9. swagger 문서 작성
10. 마무리
