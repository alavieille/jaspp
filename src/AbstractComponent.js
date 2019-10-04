/* eslint class-methods-use-this: "off", no-unused-vars: "off" */

export default class AbstractComponent {
  constructor(application) {
    this.application = application;
  }

  render(el) {
    throw new Error('Method start should be implement');
  }
}
