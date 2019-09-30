export default class Application {
    constructor(components, options = {}) {
      const defaultOptions = {
        'dataAttribute' : 'data-view-component',
      };

      this.options = {...defaultOptions, ...options};
      this.components = components;
      this.eventTopics = {};
    }

    start() {
      this.dispatch('before:start', this);
      this.renderViewComponents(document);
      this.addEventListener('dom.update', (el) => {
        this.renderViewComponents(el);
      });
      this.dispatch('after:start', this);
    }

    addEventListener(event, listener) {
      if (!this.eventTopics[event] || this.eventTopics[event].length < 1) {
        this.eventTopics[event] = [];
      }
      this.eventTopics[event].push(listener);
    }

    dispatch(event, params = {}) {
      if (!this.eventTopics[event] || this.eventTopics[event].length < 1) {
        return;
      }
      this.eventTopics[event].forEach(listener => {
        listener(params);
      });
    }

    renderViewComponents(container) {
      const componentsContainer = container.querySelectorAll('[' + this.options.dataAttribute + ']');
      if (container instanceof HTMLElement && container.hasAttribute(this.options.dataAttribute)) {
        this._renderViewComponent(container);
      }

      for (const el of componentsContainer) {
        this._renderViewComponent(el);
      }
    }

    _renderViewComponent(el) {
      const componentName = el.getAttribute(this.options.dataAttribute);
      if (this.components[componentName]) {
        try {
          const componentClass = this.components[componentName];
          const component = new componentClass(this);
          component.render(el);
        } catch (exception) {
          console.log(exception);
          this.dispatch('error', exception);
        }
      }
    }
}
