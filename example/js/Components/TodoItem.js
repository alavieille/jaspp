import { AbstractComponent } from '../../../dist/index.js';

export default class TodoApp extends AbstractComponent {
  render(el) {
    const deleteButton = el.querySelector('.destroy');
    deleteButton.addEventListener('click', event => {
      event.preventDefault();
      this._delete(el)
    });
  }

  _delete(el) {
    el.parentNode.removeChild(el);
  }
}
