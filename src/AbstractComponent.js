/* eslint class-methods-use-this: "off", no-unused-vars: "off" */

export default class AbstractComponent {

  /**
   * @param {Application} application
   */
  constructor(application) {
    this.application = application;
  }

  /**
   * @param {Element} el
   */
  render(el) {
    throw new Error('Method start should be implement');
  }
}
