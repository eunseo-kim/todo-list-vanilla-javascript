import Component from './core/Component';
import InputField from './components/InputField';
import TodoItems from './components/TodoItems';
import DoneItems from './components/DoneItems';

export default class App extends Component {
  initialize() {
    this.state = {
      id: 0,
      items: [],
    };
  }

  mounted() {
    const inputField = this.target.querySelector('.input-field');

    new InputField(inputField, {
      addItem: this.addItem.bind(this),
    });

    const items = this.target.querySelector('.todo-items');

    new TodoItems(items, {
      items: this.state.items.filter((item) => item.done === false),
      deleteItem: this.deleteItem.bind(this),
      completeItem: this.completeItem.bind(this),
    });

    const doneItems = this.target.querySelector('.done-items');

    new DoneItems(doneItems, {
      doneItems: this.state.items.filter((item) => item.done === true),
      cancelItem: this.cancelItem.bind(this),
    });
  }

  template() {
    return `  
      <div class="input-field">Input Field</div>
      <ul class="todo-items"></ul>
      <h3>Done Items</h3>
      <ul class="done-items"></ul>
    `;
  }

  addItem(content) {
    const { items, id } = this.state;

    const newState = {
      id: id + 1,
      items: [...items, {
        content,
        done: false,
        id,
      }],
    };

    this.setState(newState);
  }

  deleteItem(id) {
    const { items } = this.state;

    const filteredItems = items.filter((item) => item.id !== id);

    const newState = {
      items: [...filteredItems],
    };

    this.setState(newState);
  }

  completeItem(id) {
    const { items } = this.state;

    const filteredItems = items.map((item) => {
      if (item.id === id) {
        Object.assign(item, { done: true });
      }
      return item;
    });

    const newState = {
      items: [...filteredItems],
    };

    this.setState(newState);
  }

  cancelItem(id) {
    const { items } = this.state;

    const filteredItems = items.map((item) => {
      if (item.id === id) {
        Object.assign(item, { done: false });
      }
      return item;
    });

    const newState = {
      items: [...filteredItems],
    };

    this.setState(newState);
  }
}
