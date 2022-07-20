import Component from '../core/Component';

export default class TodoItems extends Component {
  template() {
    const { items } = this.props;

    return `
        ${items.map((item, index) => `
            <li key=${index}>
              ${item}
              <button 
                type='button'
                id=${index}
                class='delete-button'
              >
              삭제
              </button>
            </li>
          `).join('')}
    `;
  }

  setEvent() {
    const { deleteItem } = this.props;

    this.target.addEventListener('click', ({ target }) => {
      if (target.classList.contains('delete-button')) {
        deleteItem(Number(target.id));
      }
    });
  }
}
