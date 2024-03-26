const sayHello = (): void => {
  console.log('hello');
};

//return nothing

const showError = (): never => {
  throw new Error(); // 항상 에러를 반환하거나
};

const infLoop = (): never => {
  while (true) {
    //do Something..
  }
};
export {};
