import createStore from './core/createStore';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
