import Component from '../core/Component';

export default class InputField extends Component {
  template() {
    return `
        <input placeholder="Enter Todo" class="input-field"/>
        <button type="button" class="add-button">Add</button>
    `;
  }

  setEvent() {
    const { addItem } = this.props;
    const inputField = this.target.querySelector('.input-field');
    const addButton = this.target.querySelector('.add-button');
    addButton.addEventListener('click', () => addItem(inputField.value));
  }
}
