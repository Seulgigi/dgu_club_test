// 아티스트 : 0
// 에너자이저 : 1
// 연구자: 2
// 재능공유자: 3
// 4가지 결과

const qnaList = [
  {
    q:
      '새학기, <br/>처음 동기들과 만나는 자리!<br/>나의 속마음은..!?',
    a: [
      {
        answer: 'a. 나는.. 아무.. 생각이.. 없다.. (멍)',
        type: [2],
      },
      { answer: 'b. 저 친구.. 나랑 잘 맞을지도..?', type: [0, 1] },
      { answer: 'c. 이곳은 내가 접수한다!!!! 인스타그램 아이디 바로 공유하기', type: [3] },
    ],
  },
  {
    q:
      '"안녕 ~ 나는 OO이야!!"<br/>나를 표현할 수 있는 캐릭터는?',
    a: [
      { answer: 'a. 말많은 수다쟁이', type: [0, 3] },
      { answer: 'b. 말없는 맑눈광', type: [2] },
      { answer: 'c. 분위기 메이커', type: [1] },
    ],
  },
  {
    q: '동기들이랑 팔정도를 지나가다<br/>코끼리 동상을 보았다!<br/>나의 행동은?',
    a: [
      {
        answer: 'a. 어? 올라타봐야겠다',
        type: [0, 1],
      },
      {
        answer: 'b. 우와 ~ 사진찍자 ~',
        type: [3],
      },
      {
        answer: 'c. "왜 코끼리동상이 있을까..?" 생각해본다',
        type: [2],
      },
    ],
  },
  {
    q: '나의 등굣길은?',
    a: [
      {
        answer: 'a. 강의 시간, 강의실 위치 확인 완료! 최적 경로를 세워보자',
        type: [2],
      },
      {
        answer: 'b. 대충 생각은 해보지만 도착한 뒤 내가 알아서 하겠지?',
        type: [0],
      },
      { answer: 'c. "오늘 등교 같이할래?" 친구에게 함께 가자고 당장 연락한다.', type: [1, 3] },
    ],
  },
  {
    q: '흥! 이런 친구는 별로야!<br/>나랑 안맞는 싶은 친구는?',
    a: [
      { answer: 'a. "이러쿵.. 저러쿵.. 나 너무 힘들어"를 하루종일 말하는 친구', type: [2, 3] },
      {
        answer: 'b. 필요할 때만 연락하고 내가 필요할 땐 잠수타는 친구',
        type: [1],
      },
      {
        answer: 'c. "쟤는.. 무슨 생각을 하는걸까..?" 리액션이 없는 친구',
        type: [0],
      },
    ],
  },
  {
    q: '캠퍼스에서 길을 묻는 아코가 나랑 같은 곳으로 향할 때 나는?',
    a: [
      { answer: 'a. 선배미 뿜뿜!! 꿀팁을 전수하며 이야기를 나눈다.', type: [0, 1] },
      { answer: 'b. 길만 알려주고 빠른 걸음으로 먼저 간다.', type: [2] },
      { answer: 'c. 뒤에서 잘 찾아가나 힐끔힐끔 본다.', type: [3] },
    ],
  },
  {
    q:
      '이번 수강신청 1순위는 이거다!<br/>찾게되는 수업 유형은?',
    a: [
      { answer: 'a. 음.. 그 강의 꽤 괜찮아!  일단 결과적으로 학점은 잘 주심!', type: [0, 1] },
      { answer: 'b. 교수님께 인간적으로도 학문적으로도 배울 점 엄청 많아! 학점은 조금 아쉽긴 했는데 과정이 좋았어!', type: [3] },
      { answer: 'c. 너무 궁금하던 강의야! ', type: [2] },
    ],
  },
  {
    q:
      '과제가 너무 어렵잖아!!',
    a: [
      { answer: 'a. 선배들한테 물어보자!', type: [3] },
      { answer: 'b. 모르겠다.. 일단 되는데까지 해보고 안되면 말자.', type: [0, 1] },
      { answer: 'c. 훗 난 내가 해결하겠어', type: [2] },
    ],
  },
  
]

const infoList = [
  {
    nameIntro: '마음만은 예술가!<br/>예술의 혼을 불태우고싶은',
    name: '<아티스트>',
    descTitle1: 'ℎ𝑜𝑥𝑦 제2의 BTS..!?🎤',
    desc1:
      '여러분의 꿈의 무대는 어디인가요?<br/>동국대학교에서 펼쳐봐요💃🕺',
    descTitle2:
      '당신의 예술을 펼쳐라✨',
    desc2:
      'AJAX(힙합) , OPUS(오케스트라), 음샘(밴드), 아리랑(밴드), HOLA(파티문화기획), 극예술연구회(연극), 피어리스던(락밴드), ODC(스트릿댄스), LOTUS(마술타로), 뭉게구름(창작음악)<br/>그리고그림(미술), 동국문학회(문학합평), 동국서도회(서예), 디딤돌(영화영상촬영), 만화얼(만화애니매이션), 애드러쉬(광고), 동그라미(사진)<br/>두둠칫(커버댄스), 목멱성(음악컨텐츠), JAMJAM(뮤지컬)',
  },
  {
    nameIntro: '새로운곳을 탐험하고<br/>에너지를 발산하고싶은',
    name: '<에너자이저>',
    descTitle1: 'ℎ𝑜𝑥𝑦 동국대 대표선수..!?🏃',
    desc1:
      '넘치는 에너지!<br/>열기를 전해주세요🔥',
    descTitle2: '당신의 에너지를 뽐내라✨',
    desc2:
      'COURTIST(농구), L.A.E(야구), 명궁(국궁), DUTC(테니스), 검도부(검도), 선무부(태권도), FC TOTO(축구), 기우회(바둑), 터스커스(미식축구), DUST(스키), 무법(극진공수도), 산악부(트레킹클라이밍), 동굴탐험연구회(동굴탐험), 바람소리(페러글라이딩), 수중탐험연구회(스킨스쿠버)<br/>FC엘레펜테(여자축구)',
  },
  {
    nameIntro: '학술적인 내용을 사람들과 함께<br/>탐구하고 프로젝트를 하고싶은',
    name: '<연구자>',
    descTitle1: 'ℎ𝑜𝑥𝑦 대학원 진학 예정자..!?🥺',
    desc1:
      '찾았다.<br/>미래 노벨상 수상 후보🏆',
    descTitle2:
      '당신의 연구를 함께하라✨',
    desc2:
      'CAFE-IN(요리), KCC(경영경제), 맑스철학연구회(맑스철학여성학), DNA(IT관련), MECS(영어회화), DUSSA(통계조사), NSA(천문학천체관측)<br/>경영학연구회BARC(Business), 국제통상연구회(국제무역), 정치학연구회(정치학), 경제학연구회(경제학)<br/>CAPS(IT관련), 멋쟁이사자처럼(IT창업), QUD(성소수자), 인엑터스(비즈니스사회문제해결)',
  
  },
  {
    nameIntro: '내가 가진것을 나누고 알리고 싶은',
    name: '<재능공유자>',
    descTitle1: 'ℎ𝑜𝑥𝑦 팔방미인..!?🥺',
    desc1:
      '못 하는게 뭐야?<br/>그런거.. 없는데?😎',
    descTitle2:
      '당신의 재능을 공유해라✨',
    desc2:
      'KUSA(유네스코봉사), RICH(금융투자), UNSA(LIN산하학생기구), 프론티어(창업), 동불(불교)<br/>E.L.F(교육봉사), 손짓사랑회(수화봉사), RCY(대한적십자사봉사), 젊은새이웃(교육봉사), 푸름누리(농촌봉사), 길(봉사), 페인터즈(벽화봉사), 한글학교하람(한글교육문화교류)',
  
  },
]
