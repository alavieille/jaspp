export default class Application {
  /**
   * @param {Object} components
   * @param {Object} options
   */
  constructor(components, options = {}) {
    const defaultOptions = {
      dataAttribute: 'data-view-component',
    };

    this.options = { ...defaultOptions, ...options };
    this.components = components;
    this.eventTopics = {};
  }

  /**
   * Start all components
   */
  start() {
    this.dispatch('before:start', this);
    this.renderViewComponents(document);
    this.addEventListener('dom.update', (el) => {
      this.renderViewComponents(el);
    });
    this.dispatch('after:start', this);
  }

  /**
   * @param {String} event
   * @param {Function} listener
   */
  addEventListener(event, listener) {
    if (!this.eventTopics[event] || this.eventTopics[event].length < 1) {
      this.eventTopics[event] = [];
    }
    this.eventTopics[event].push(listener);
  }

  /**
   * @param {String} event
   * @param {Object} params
   */
  dispatch(event, params = {}) {
    if (!this.eventTopics[event] || this.eventTopics[event].length < 1) {
      return;
    }
    this.eventTopics[event].forEach((listener) => {
      listener(params);
    });
  }

  /**
   * @param {Element} container
   */
  renderViewComponents(container) {
    if (container instanceof HTMLElement && container.hasAttribute(this.options.dataAttribute)) {
      this.renderViewComponent(container);
    }

    const componentsContainer = Array.prototype.slice.call(container.querySelectorAll(`[${this.options.dataAttribute}]`), 0);
    componentsContainer.forEach((el) => {
      this.renderViewComponent(el);
    });
  }

  /**
   * @param {Element} el
   */
  renderViewComponent(el) {
    const componentName = el.getAttribute(this.options.dataAttribute);
    if (this.components[componentName]) {
      try {
        const componentClass = this.components[componentName];
        // eslint-disable-next-line new-cap
        const component = new componentClass(this);
        component.render(el);
      } catch (exception) {
        this.dispatch('error', exception);
      }
    }
  }
}
