import { AbstractComponent } from '../../dist/index.js';

export default class TestComponent extends AbstractComponent {
  render(el) {
    el.innerHTML = 'test';
  }
}
