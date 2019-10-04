import { AbstractComponent } from '../../dist/index.js';

export default class TestComponents extends AbstractComponent {
  render(el) {
    el.innerHTML = 'test';
  }
}
