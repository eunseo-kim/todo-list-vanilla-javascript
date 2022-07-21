import { subscribable } from './observer';

/*
<createStore>
⑴ dispatch : 상태를 변경하기 위해서는 dispatch에 액션 함수를 전달해야 합니다.
전달받은 액션 함수는 reducer 함수에게 전달됩니다.
*reducer 함수는 전달받은 action을 바탕으로 상태를 변경합니다.
⑵ getState : 현재 store의 상태값을 가져올 수 있습니다.
*/

const createStore = (reducer) => {
  const state = subscribable(reducer());

  // dispatch를 통해서만 상태를 변경할 수 있습니다.
  const dispatch = (action) => {
    const newState = reducer(state, action);

    Object.entries(newState).forEach(([key, value]) => {
      // newState의 value가 기존 state와 다르면 상태를 변경시킵니다.
      if (state[key] !== value) {
        state[key] = value;
      }
    });
  };

  // getState로 값을 '가져오기만' 할 수 있습니다.
  const frozenState = {};
  Object.keys(state).forEach((key) => {
    Object.defineProperty(frozenState, key, {
      // getState로 가져온 state로는 상태를 변경할 수 '없으므로' setter은 생략합니다.
      get: () => state[key],
    });
  });

  const getState = () => frozenState;

  return {
    dispatch, getState,
  };
};

export default createStore;
