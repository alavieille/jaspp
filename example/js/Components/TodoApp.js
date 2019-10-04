import { AbstractComponent } from '../../../dist/index.js';

export default class TodoApp extends AbstractComponent {
  render(el) {
    const inputAdd = el.querySelector('.new-todo');
    inputAdd.addEventListener("keyup", event => {
      event.preventDefault();
      if (event.keyCode === 13) {
        if (inputAdd.value === '') {
          return;
        }
        this._add(inputAdd.value, el);
        inputAdd.value = '';
      }
    });
  }

  _add(value, el) {
    const list = el.querySelector('.todo-list');
    const id = this._generateId();
    const item = `
      <li data-id="${id}" data-view-component="TodoItem">
        <div class="view">
          <input class="toggle" type="checkbox">
          <label>${value}</label>
          <button class="destroy"></button>
        </div>
      </li>
    `;

    list.insertAdjacentHTML('beforeend', item);
    this.application.dispatch('dom.update', el.querySelector('[data-id=' + id + ']'));
  }

  _clearAll(el) {
    const list = el.querySelector('.todo-list');
    list.innerHTML = '';
  }

  _generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
