import Component from '../core/Component';

export default class InputField extends Component {
  template() {
    return `
        <input placeholder="Enter Todo" id="input-field"/>
        <button type="button" id="add-button">Add</button>
    `;
  }

  setEvent() {
    const { addItem } = this.props;
    const inputField = this.target.querySelector('#input-field');
    const addButton = this.target.querySelector('#add-button');
    addButton.addEventListener('click', () => addItem(inputField.value));
  }
}
