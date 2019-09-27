export default class ComponentsLoader {
  static import(require) {
    const modules = {};
    require.keys().forEach(key =>  {
      const module = require(key);
      if (module.default) {
        const name = ComponentsLoader._getModuleName(key);
        modules[name] = module.default;
      }
    });

    return modules;
  }

  static _getModuleName(modulePath) {
    return modulePath.replace('.js', '')
      .replace('./', '');
  }
}
