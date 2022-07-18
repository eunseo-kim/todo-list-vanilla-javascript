import Component from './core/Component';
import InputField from './components/InputField';

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
  }

  template() {
    const { items } = this.state;

    return `  
      <div id="input-field">Input Field</div>
      <ul id="todo-items">
      ${items.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }

  addItem(content) {
    const { items } = this.state;

    const newState = {
      items: [...items, content],
    };

    this.setState(newState);
  }
}
