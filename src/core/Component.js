import { subscribe } from './observer';

export default class Component {
  state = {};

  target;

  props;

  constructor(target, props) {
    this.target = target;
    this.props = props;
    subscribe(() => {
      this.render();
      this.mounted();
      this.setEvent();
    });
  }

  setEvent() {}

  mounted() {}

  template() {
    return '';
  }

  render() {
    this.target.innerHTML = this.template();
  }

  addEvent({ target, className, event }) {
    const { id } = target;
    if (target.classList.contains(className)) {
      event(Number(id));
    }
  }
}
