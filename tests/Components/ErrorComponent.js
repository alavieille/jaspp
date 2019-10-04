import { AbstractComponent } from '../../dist/index.js';

export default class ErrorComponents extends AbstractComponent {
  render(el) {
    throw new Error('Error');
  }
}
