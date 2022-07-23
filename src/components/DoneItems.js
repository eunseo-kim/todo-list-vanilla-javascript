/** @jsx virtualDom */
import virtualDom from '../core/virtualDom';
import createElement from '../core/createElement';

import Component from '../core/Component';

export default class DoneItems extends Component {
  template() {
    const { doneItems } = this.props;

    const element = createElement(<div></div>);

    doneItems.forEach(({ id, content }) => {
      element.innerHTML += createElement(
        <li key={id}>
          {content}
          <button
            type='button'
            class='cancel-button'
            id={id}
            >
            취소
          </button>
        </li>,
      ).outerHTML;
    });

    return element.innerHTML;
  }

  setEvent() {
    const { cancelItem } = this.props;

    this.target.addEventListener('click', ({ target }) => {
      this.addEvent({ target, className: 'cancel-button', event: cancelItem });
    });
  }
}
