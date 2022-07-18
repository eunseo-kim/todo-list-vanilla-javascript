export default class Component {
  state;

  target;

  props;

  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.initialize();
    this.render();
  }

  initialize() {}

  setEvent() {}

  mounted() {}

  template() {
    return '';
  }

  setState(newState) {
    this.state = {
      ...this.state, ...newState,
    };
    this.render();
  }

  render() {
    this.target.innerHTML = this.template();
    this.mounted();
    this.setEvent();
  }
}
