import Component from '../core/Component';

export default class TodoItems extends Component {
  template() {
    const { todoItems } = this.props;

    return `
      ${todoItems.map((item) => `
          <li key=${item.id}>
            ${item.content}
            <button
              type='button'
              id=${item.id}
              class='done-button'
            >
            완료
            </button>
            <button 
              type='button'
              id=${item.id}
              class='delete-button'
            >
            삭제
            </button>
          </li>
        `).join('')}
    `;
  }

  setEvent() {
    const { deleteItem, completeItem } = this.props;

    this.target.addEventListener('click', ({ target }) => {
      this.addEvent({ target, className: 'delete-button', event: deleteItem });
      this.addEvent({ target, className: 'done-button', event: completeItem });
    });
  }
}
