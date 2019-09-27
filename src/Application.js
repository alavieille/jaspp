export default class Application {
    constructor(components, options = {}) {
      const defaultOptions = {
        'dataAttribute' : 'data-view-component',
        'modules': []
      };

      this.options = {...defaultOptions, ...options};
      this.components = components;
    }

    start() {
      this.renderViewComponents($(document));
      $(document).on('app.dom.update', ($event, $el) => {
        this.renderViewComponents($el);
      });
    }

    renderViewComponents($container) {
      const $componentsContainer = $('[' + this.options.dataAttribute + ']', $container);
      $componentsContainer.each((index, el) => {
        const $el = $(el);
        const componentName = $el.attr(this.options.dataAttribute);
        try {
          this._renderViewComponent(componentName, $el);
        } catch (exception) {
          console.error(exception);
        }
      });
    }

    _renderViewComponent(componentName, $el) {
      if (this.components[componentName]) {
        const componentClass = this.components[componentName];
        const component = new componentClass(this);
        component.render($el);
      }
    }
}
