//REMIND JS 에는 없는 타입이다.
// 비슷한 타입끼리 묶어줬다고 생각하면된다.

export { Os };

// enum Os {
//   WINDOW,
//   Ios,
//   Android,
// }

//REMIND 컴파일된 파일을 보면 양방향 매핑이 되어 있다. window 와 0, Ios  와 1 이.

// console.log(Os[1]);
// console.log(Os.Android);

// 숫자가 아니라 문자도 가능 문자로 하면 단방향으로 매핑됨.
enum Os {
  WINDOW = 'win',
  Ios = 'ios',
  Android = 'and',
}

let myOs: Os;
myOs = Os.WINDOW;
console.log(myOs);

//REMIND 특정 값만 사용하고 싶을 때, 그 특정 값들이 어떤 공통점을 가졌을 때, 그냥 이넘쓸 상황에.
