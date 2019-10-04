export default class ComponentsLoader {
  static import(require) {
    const modules = {};
    require.keys().forEach((key) => {
      // eslint-disable-next-line import/no-dynamic-require
      const module = require(key);
      if (module.default) {
        const name = ComponentsLoader.getModuleName(key);
        modules[name] = module.default;
      }
    });

    return modules;
  }

  static getModuleName(modulePath) {
    return modulePath.replace('.js', '')
      .replace('./', '');
  }
}
