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
      this.renderViewComponents(document);
      this.addEventListener('dom.update', (el) => {
        this.renderViewComponents(el);
      });
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
      for (let el of componentsContainer) {
        const componentName = el.getAttribute(this.options.dataAttribute);
        try {
          this._renderViewComponent(componentName, el);
        } catch (exception) {
          this.dispatch('error', exception);
        }
      }
    }

    _renderViewComponent(componentName, el) {
      console.log(componentName);
      if (this.components[componentName]) {
        const componentClass = this.components[componentName];
        const component = new componentClass(this);
        component.render(el);
      }
    }
}
