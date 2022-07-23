/** @jsx virtualDom */
import virtualDom from '../core/virtualDom';
import createElement from '../core/createElement';

import Component from '../core/Component';

export default class TodoItems extends Component {
  template() {
    const { todoItems } = this.props;

    const element = createElement(<div></div>);

    todoItems.forEach(({ id, content }) => {
      element.innerHTML += createElement(
        <li key={id}>
          {content}
          <button
            type='button'
            id={id}
            class='done-button'
          >
          완료
          </button>
          <button
            type='button'
            id={id}
            class='delete-button'
          >
          삭제
          </button>
        </li>,
      ).outerHTML;
    });

    return element.innerHTML;
  }

  setEvent() {
    const { deleteItem, completeItem } = this.props;

    this.target.addEventListener('click', ({ target }) => {
      this.addEvent({ target, className: 'delete-button', event: deleteItem });
      this.addEvent({ target, className: 'done-button', event: completeItem });
    });
  }
}
