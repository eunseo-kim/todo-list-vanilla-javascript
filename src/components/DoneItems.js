import Component from '../core/Component';

export default class DoneItems extends Component {
  template() {
    const { doneItems } = this.props;

    return `
        ${doneItems.map((item) => `
            <li key=${item.id}>
              ${item.content}
              <button
                type='button'
                class='cancel-button'
                id='${item.id}'
                >
                취소
              </button>
            </li>
        `).join('')}
    `;
  }

  setEvent() {
    const { cancelItem } = this.props;

    this.target.addEventListener('click', ({ target }) => {
      this.addEvent({ target, className: 'cancel-button', event: cancelItem });
    });
  }
}
