import { AbstractComponent } from '../../dist/index.js';

export default class ErrorComponent extends AbstractComponent {
  render(el) {
    throw new Error('Error');
  }
}
