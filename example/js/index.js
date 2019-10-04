import {Application, ComponentsLoader} from "../../dist/index.js";
const components = ComponentsLoader.import(require.context('./Components/', true, /\.js$/));
const app = new Application(components);

app.addEventListener('before:start', (app) => {
  console.log('Application before start event');
});

app.addEventListener('after:start', (app) => {
  console.log('Application after start event');
});

app.start();
