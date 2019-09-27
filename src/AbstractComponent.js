export default class AbstractComponent {
  constructor(application) {
    this.application = application;
  }

  render($el) {
    throw new Error('Method start should be implement');
  }
}
