/** @jsx virtualDom */
import virtualDom from './core/virtualDom';
import createElement from './core/createElement';

import Component from './core/Component';
import InputField from './components/InputField';
import TodoItems from './components/TodoItems';
import DoneItems from './components/DoneItems';

import {
  setId,
  setItems,
} from './actions';

import store from './store';

export default class App extends Component {
  mounted() {
    const inputField = this.target.querySelector('.input-field');
    const todo = this.target.querySelector('.todo');
    const done = this.target.querySelector('.done');

    const todoItems = store.getState().items.filter((item) => item.done === false);
    const doneItems = store.getState().items.filter((item) => item.done === true);

    new InputField(inputField, {
      addItem: this.addItem.bind(this),
    });

    new TodoItems(todo, {
      todoItems,
      deleteItem: this.deleteItem.bind(this),
      completeItem: this.completeItem.bind(this),
    });

    new DoneItems(done, {
      doneItems,
      cancelItem: this.cancelItem.bind(this),
    });
  }

  template() {
    const element = createElement(
      <div>
        <div class="input-field">Input Field</div>
        <ul class="todo"></ul>
        <h3>Done Items</h3>
        <ul class="done"></ul>
      </div>,
    );

    return element.innerHTML; // innerHTML → 바깥을 감싸고 있는 의미없는 <div></div>를 제외합니다.
  }

  addItem(content) {
    const { items, id } = store.getState();

    const newItems = [...items, { content, done: false, id }];

    store.dispatch(setItems(newItems));
    store.dispatch(setId(id + 1));
  }

  deleteItem(id) {
    const { items } = store.getState();

    const filteredItems = items.filter((item) => item.id !== id);

    store.dispatch(setItems(filteredItems));
  }

  completeItem(id) {
    const { items } = store.getState();

    const filteredItems = items.map((item) => {
      if (item.id === id) {
        Object.assign(item, { done: true });
      }
      return item;
    });

    store.dispatch(setItems(filteredItems));
  }

  cancelItem(id) {
    const { items } = store.getState();

    const filteredItems = items.map((item) => {
      if (item.id === id) {
        Object.assign(item, { done: false });
      }
      return item;
    });

    store.dispatch(setItems(filteredItems));
  }
}
