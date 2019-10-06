import {Application, ComponentsLoader} from 'jaspp';

const components = ComponentsLoader.import(require.context('./Components/', true, /\.js$/));
const app = new Application(components);

app.addEventListener('before:start', () => {
  console.log('Application before start event');
});

app.addEventListener('after:start', () => {
  console.log('Application after start event');
});

app.addEventListener('error', (exception) => {
  console.log(exception);
});

app.start();
