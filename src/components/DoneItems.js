import Component from '../core/Component';

export default class DoneItems extends Component {
  template() {
    const { doneItems } = this.props;

    return `
        ${doneItems.map((item, index) => `
            <li key=${index}>
                ${item.content}
            </li>
        `).join('')}
    `;
  }
}
