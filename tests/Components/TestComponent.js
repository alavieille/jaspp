import { AbstractComponent } from '../../src/index.js';

export default class TestComponent extends AbstractComponent {
  render(el) {
    el.innerHTML = 'test';
  }
}
