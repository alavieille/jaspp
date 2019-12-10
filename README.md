# Jaspp

[![Version](https://img.shields.io/npm/v/jaspp.svg?style=flat-square)](https://www.npmjs.com/package/jaspp)
[![License](https://img.shields.io/npm/l/jaspp.svg?style=flat-square)](https://www.npmjs.com/package/jaspp)
[![Downloads](https://img.shields.io/npm/dt/jaspp.svg?style=flat-square)](https://www.npmjs.com/package/jaspp)
![Filesize](https://img.shields.io/bundlephobia/min/jaspp.svg)
![CircleCI](https://img.shields.io/circleci/build/github/alavieille/jaspp/master?style=flat-square)
[![codecov](https://codecov.io/gh/alavieille/jaspp/branch/master/graph/badge.svg)](https://codecov.io/gh/alavieille/jaspp)

Jaspp is Lightweight JavaScript library for handle javascript in a website.

* Tiny < 3kb
* 0 dependencies
* Component oriented
  
### Example

[Todo List](https://alavieille.github.io/jaspp/example/)

### Getting Started


Install Jaspp with npm or yarn: 

```
npm install jaspp
```

Create a component to handle javascript of a DOM Element

```
//components/YourComponent.js

import {AbstractComponent} from 'jaspp'

export default class YourComponent extends AbstractComponent 
{
    render(el) {
        // handle javascript of el element
    }
}

```

Create Application and register your components

```
//index.js
import {Application} from "jasp";
import YourComponent from "components/YourComponent";

const components = {
    'YourComponent' : YourComponent
};

const app = new Application(components);

app.start();

```

If you use webpack, you can use class ComponentsLoader
to load automatically all components inside a folder

```
import {Application, ComponentsLoader} from "../../dist/index.js";

// load all components inside components folder
const components = ComponentsLoader.import(require.context('./components/', true, /\.js$/));
const app = new Application(components);

// ...

```

Activate a component on specific DOM Element
with data attribute *data-view-component* 
and component's name.

```
<div data-view-component="YourComponent">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</section>
```

###### Events

Different events are available in Application: 

* *before:start* is dispatch before render of components
* *after:start* is dispatch after render of components
* *error* is dispatch when there is an error inside a component, it's can be util to log error.


```
//index.js

// ...

const app = new Application(components);

app.start();

app.addEventListener('before:start', (app) => {
  console.log('Application before start event');
});

app.addEventListener('after:start', (app) => {
  console.log('Application after start event');
});

app.addEventListener('error', (exception) => {
  console.log('Application after start event');
});

```

* *dom.update* This event enables components on dynamically added HTML.
```
import {AbstractComponent} from 'jaspp'

class YourComponent extends AbstractComponent 
{
    render(el) {
       const template = `
          <div id="example" data-view-component="OtherComponent"></div>
       `;
       el.insertAdjacentHTML('beforeend', template);
       this.application.dispatch('dom.update', el.querySelector(#example));
    }
}

```
