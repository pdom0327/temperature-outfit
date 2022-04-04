### 규칙

- camelCase 사용하기
- 텍스트를 작성할 때는 TypoGraphy 컴포넌트를 사용합니다.
    - 텍스트 사이즈, 폰트 일관화를 위해서
- 항상 page컴포넌트에서는 최상단에 LayoutContainer를 선언해주세요
    - 공통적으로 수정해야하는 컴포넌트가 있을 떄 일일히 수정하는 것을 방지하기 위해서

### 브랜치 설명

- **main**
    - 바로 배포할 수 있는 안정적인 상태의 브랜치
- **develop**
    - main브랜치에 넘어가기 전단계, 모든 브랜치는 develop에서 생성되어야 합니다.
- **backend**
    - 서버개발
- **front**
    - UI 개발

각 프론트/백엔드는 개발하는 기능에 맞게 해당 브랜치(back,front)에서 feat/ 를 붙여서 해당 브랜치를 생성할 것

### ****코드리뷰****

- merge하기전 해당 브랜치에서 pull-request를 develop 브랜치를 대상으로 하고 코드리뷰를 진행합니다.
- PR은 한글로 작성합니다.

### 커밋 컨벤션

- Feat : 새로운 기능 추가
- Update : 코드 수정
- Remove : 코드 삭제
- Fix : 버그 수정
- Docs : 문서 수정
- Style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- Refactor : 코드 리펙토링
- Test : 테스트 코드, 리펙토링 테스트 코드 추가

```jsx
Feat: 상세페이지에 무한스크롤 추가
```

### 폴더구조

- pages
    - next.js는 pages폴더에서 라우팅을 자체적으로 해주기 때문에 page를 담당하는 컴포넌트만 존재해야합니다
    - 여기서 쓰이는 컴포넌트는 소문자로 선언해줍니다
- components
    - 만약 pages컴포넌트에서 해당page만 쓰는 컴포넌트는 [해당페이지폴더명] - 컴포넌트작성 구조로 해주세요
    - common폴더는 별개로 모두가 사용하는 공용컴포넌트가 있는 폴더입니다.
- constants
    - 상수로 고정적으로 쓰이는 값들은 여기서 지정해줍니다 ex) color, font-size
- dummy
    - 서버에 저장할 필요없는 단순 data

### 질문사항

- 개인 연락이 아닌 모두가 공유하고 의견을 나눌 수 있게 슬랙의 `날씨별-옷차림` 채널에서 질문사항을 올려주세요.
