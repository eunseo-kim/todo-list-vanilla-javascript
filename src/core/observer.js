/* currentObserver: 현재 관찰 대상을 가리킵니다. */
let currentObserver = null;

/* observe: function(fn)을 관찰 대상에 포함시킵니다. */
const observe = (fn) => {
  currentObserver = fn;
  fn();
  currentObserver = null;
};

/* observable: 관찰 대상 state를 지정합니다. */
const observable = (state) => {
  const stateKeys = Object.keys(state);

  stateKeys.forEach((key) => {
    let value = state[key];
    const observers = new Set();

    Object.defineProperty(state, key, {
      // state getter → observers에 currentObserver을 등록
      get() {
        if (currentObserver) {
          observers.add(currentObserver);
        }
        return value;
      },
      // state setter → 모든 observers에 상태 변경을 알려줌
      set(newValue) {
        value = newValue;
        observers.forEach((observer) => observer());
      },
    });
  });
};

export {
  observe, observable,
};
