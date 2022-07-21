/* currentSubscriber: 현재 구독자를 가리킵니다. */
let currentSubscriber = null;

/* subscribe: function(fn)을 구독자에 포함시킵니다. */
const subscribe = (fn) => {
  currentSubscriber = fn;
  fn();
  currentSubscriber = null;
};

/* subscribable: 구독 대상 state를 지정합니다. */
const subscribable = (state) => {
  const stateKeys = Object.keys(state);

  stateKeys.forEach((key) => {
    let value = state[key];
    const subscribers = new Set();

    Object.defineProperty(state, key, {
      // state getter → currentSubscriber을 새로운 subscriber로 등록합니다.
      get() {
        if (currentSubscriber) {
          subscribers.add(currentSubscriber);
        }
        return value;
      },
      // state setter → 모든 subscribers에 상태 변경을 알려줍니다.
      set(newValue) {
        value = newValue;
        subscribers.forEach((subscriber) => subscriber());
      },
    });
  });
  return state;
};

export {
  subscribe, subscribable,
};
