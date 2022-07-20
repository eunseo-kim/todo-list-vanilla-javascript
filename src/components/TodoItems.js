import Component from '../core/Component';

export default class TodoItems extends Component {
  template() {
    const { items } = this.props;

    return `
      ${items.map((item) => `
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
      if (target.classList.contains('delete-button')) {
        deleteItem(Number(target.id));
      }

      if (target.classList.contains('done-button')) {
        completeItem(Number(target.id));
      }
    });
  }
}
