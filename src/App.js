import Component from './core/Component';
import InputField from './components/InputField';
import Items from './components/Items';

export default class App extends Component {
  initialize() {
    this.state = {
      items: [],
    };
  }

  mounted() {
    const inputField = this.target.querySelector('#input-field');

    new InputField(inputField, {
      addItem: this.addItem.bind(this),
    });

    const todoItems = this.target.querySelector('#todo-items');

    new Items(todoItems, {
      items: this.state.items,
      deleteItem: this.deleteItem.bind(this),
    });
  }

  template() {
    return `  
      <div id="input-field">Input Field</div>
      <ul id="todo-items"></ul>
    `;
  }

  addItem(content) {
    const { items } = this.state;

    const newState = {
      items: [...items, content],
    };

    this.setState(newState);
  }

  deleteItem(itemIndex) {
    const { items } = this.state;

    const filteredItems = items.filter((item, index) => index !== itemIndex);

    const newState = {
      items: [...filteredItems],
    };

    this.setState(newState);
  }
}
