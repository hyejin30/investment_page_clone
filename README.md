## 프로젝트 소개

- 투자 포트폴리오 사이트의 '자산 배분' 페이지를 클론한 프로젝트
- 원본 사이트 : https://quantus.kr/alloc
- 개발 인원 : 1인 (김혜진)
- 개발 기간 : 22.1.19 ~ 1.25 (1주)

<br />

[구현한 화면]

<br />

<img width="740" alt="image" src="https://user-images.githubusercontent.com/98295004/214611708-3e5702c8-1c30-402b-b486-6b2d1cb250de.png">


## 선정 이유
- Select, Dropdown 등 컴포넌트 재사용 연습
- 10만 개 이상의 대용량 데이터 렌더링 연습

<br />

## 프로젝트 설치 및 실행 방법

```typescript
// 클론 
git clone https://github.com/hyejin30/investment_site_project
cd investment_site_project

// 패키지 설치
yarn install
yarn add global json-server

// 프로젝트 및 json-server 실행
yarn start
json-server ./db.json --port 4000
```

<br />

## 프로젝트 관리

Jira를 이용해 할 일을 관리했습니다.

<img width="885" alt="image" src="https://user-images.githubusercontent.com/98295004/214602865-0f450351-d0ea-43dd-99de-b66fd35a4d37.png">

<br />

## 사용한 기술 스택
- 클라이언트 상태는 recoil, 서버 상태는 react-query로 관리했습니다.
- 주식 목록 10만개를 받아와 렌더링하기 위해 json-server,  react-virtualized를 사용헀습니다.
```
- react, typescript
- 상태 관리 : recoil, react-query
- 스타일 : styled-components
- 기타 라이브러리 : json-server, react-virtualized, react-day-picker 등
```
<br />

## 자산군 추가 기능 테스트 방법
- 자산군 추가를 위해서는 10만 개의 주식 목록을 받아야 합니다.
- `json-server 라이브러리 설치` + `서버 실행` 을 하면 로컬에서 주식 목록을 확인할 수 있습니다.
- json-server로 주식 목록을 받아오고 있어,  아래 코드를 꼭 실행 부탁드립니다

```
yarn install
yarn add global json-server
json-server ./db.json --port 4000
```
<br />

## 컴포넌트를 만들 때 고려한 내용
공통 컴포넌트를 만들 때 `아토믹 디자인 패턴`과 `합성 컴포넌트 패턴`을 활용했습니다.

- 아토믹 디자인 패턴 [(참고글)](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)

<img width="518" alt="image" src="https://user-images.githubusercontent.com/98295004/214600685-48d2ab23-2b7b-4215-9a6d-a7ab6d0067fe.png">

- 합성 컴포넌트 패턴
  - 서브 컴포넌트로 분해한 후, 필요한 것만 조합해서 사용

```typescript
// Modal
const Modal = Object.assign(Layout, {
  Trigger,
  Dimmed,
  Title,
  Contents,
  Description,
  Buttons,
  Button: ModalButton,
});

// Usage
<Modal>
  <Modal.Trigger>
    {!isLoading && !isSuccess && (
      <BackTestBtn onClick={createBackTest}>
        <Text.Medium color={theme.BLACK} weight={700}>
          백테스트
        </Text.Medium>
      </BackTestBtn>
    )}
    <Modal.Dimmed isOpen={isError} onClose={toggleErrorModal} />
  </Modal.Trigger>
  <Modal.Contents isOpen={isError} onClose={toggleErrorModal}>
    <Modal.Title>필수 항목 미설정</Modal.Title>
    <Description>
      <Text.Regular weight={300}>[필수] &quot;모든 항목을 설정&quot; 해주셔야</Text.Regular>
      <Text.Regular weight={300}>백테스트 이(가) 실행됩니다.</Text.Regular>
    </Description>
    <Modal.Button onClick={toggleErrorModal}>확인</Modal.Button>
  </Modal.Contents>
</Modal>
```

<br />

---
## 구현 사항

## 1. Layout 
- 반복되는 `헤더, 바디, 푸터` 템플릿 화
- 위치 : components/organism/Layout

<br />

## 2. 전략 이름 입력 (AllocStrategyName)
- 공통 컴포넌트 StrategyName
전략 이름을 입력하는 인풋이 다른 페이지에서도 사용되고 있어 organism에 추가

- 전략 저장 버튼 클릭 시 [저장 완료 모달] 렌더링

![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/98295004/214610607-4d3aa08b-e395-4cd4-a1e2-5d752866ba41.gif)

<img width="780" alt="image" src="https://user-images.githubusercontent.com/98295004/214605083-7208140b-2a3f-46d8-9b34-407d1e3fbff5.png">

<br />

## 3. 자산 배분 설정 (AllocSetting)
- Select와 Dropdown을 조합해 UI 구현
- hover, focus 스타일 적용

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/98295004/214609021-762a5b63-5d62-490b-91b8-d01ddbf222bf.gif)

- type=”number” 인풋은 0~100 숫자만 입력되도록 `ensureInRange` 유틸 함수 활용

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/98295004/214609408-eb250297-e875-4fca-9080-79af6f8dc75f.gif)

<br />

## 4. 자산군 추가 (AssetList)
- 추가 / 삭제
  - Array.slice()를 이용해 원본 배열을 변경하지 않고 추가, 삭제 구현

```typescript
const updateAsset = (key: 'name' | 'ratio', title: string, value: string) => {
  const index = parseInt(title.split('-')[1]);

  if (index === 0) return setAssetList((prev) => [{ ...prev[index], [key]: value }, ...prev.slice(index + 1)]);
  setAssetList((prev) => [...prev.slice(0, index), { ...prev[index], [key]: value }, ...prev.slice(index + 1)]);
};
```

- 주식 10만개 렌더링 (> [PR 참고](https://github.com/hyejin30/investment_site_project/pull/33))
  - 10만개를 렌더링할 경우 버벅임이 심했음 
  - 뷰포트 내의 요소만 렌더링하는 react-virtualized 라이브러리를 사용해 렌더링 최적화
  
![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/98295004/214610019-0f2c868e-89e1-486d-bf69-ab65dc2b94d2.gif)


  - json-server를 이용해 10만개를 받아 왔으며, react-query로 데이터를 캐싱해 중복 호출 방지

<img width="683" alt="image" src="https://user-images.githubusercontent.com/98295004/214605403-11d2cd70-c314-4510-a290-0057ac1134d7.png">

<br />

## 5. 캘린더 (AllocDateSelect)
- react-day-picker를 활용해 구현
- `defaultMonth` prop을 이용해 인풋의 year, month가 캘린더 날짜가 되도록 함
- 캘린더에서 날짜를 선택하거나, 인풋에서 날짜를 직접 입력할 수 있음

<img width="566" alt="image" src="https://user-images.githubusercontent.com/98295004/214602163-b9b1dc0e-5cf8-4eb6-9fad-823ae9c2d0db.png">

<br />

## 6. 백테스트 (BackTest)
- 필수 값 에러 핸들링
    - `checkBlank` 유틸 함수를 사용해 필수 값 입력 여부 체크
    - 입력하지 않은 값이 있을 경우 Error 모달 렌더링

![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/98295004/214611085-e65ad9da-4f13-4002-8f76-3d401f85da71.gif)


- 프로그레스 바 (> [PR 참고](https://github.com/hyejin30/investment_site_project/pull/41))
    - isLoading, isSuccess, progress를 활용해 상태를 4단계로 나눔
    - 대기중 > Bar > 생성중 > 백테스트 버튼으로 복귀

![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/98295004/214610303-300d10eb-35ab-4f52-925c-7c26ef3c24cf.gif)

- recoil
    - 전역 상태 2개로 사용자가 입력한 값을 저장
      (*설정 값 초기화 시, 자산군은 초기화 되지 않는 점을 고려해 2개로 분리))
    - assetList : 자산군
    - strategy : 자산군을 제외한 모든 값

```typescript
export const strategyState = atom<IStrategy>({
  key: 'strategy',
  default: {
    algo: '전략배분 (정적자산배분)',
    allocRebalancing: '',
    band: '',
    endDate: dayjs().format('YYYY.MM.DD'),
    level: '중급',
    startDate: dayjs().subtract(20, 'year').format('YYYY.MM.DD'),
    strategyName: '',
  },
});

export const assetListState = atom<IAsset[]>({
  key: 'assetList',
  default: [],
});
```
