import { Application } from '../dist/index.js';
import TestComponent from './Components/TestComponent.js';
import ErrorComponent from './Components/ErrorComponent.js';

const mockRender = jest.fn();
jest.mock('./Components/TestComponent.js', () => {
  return jest.fn().mockImplementation(() => {
    return {render: mockRender};
  });
});

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  TestComponent.mockClear();
  mockRender.mockClear();
});


test('Start application with two components', () => {
  const components = {
    'TestComponent' : TestComponent
  };
  const app = new Application(components);
  document.body.innerHTML =
    '<div>' +
    '  <div id="component1" data-view-component="TestComponent"></div>' +
    '  <div id="component2" data-view-component="TestComponent"></div>' +
    '</div>';

  app.start();
  const el1 = document.querySelector('#component1');
  const el2 = document.querySelector('#component2');

  expect(TestComponent).toHaveBeenCalledTimes(2);
  expect(mockRender).toHaveBeenCalledTimes(2);
  expect(mockRender).toHaveBeenCalledWith(el1);
  expect(mockRender).toHaveBeenCalledWith(el2);
});


test('Test render component with dom.update event', () => {
  const components = {
    'TestComponent' : TestComponent
  };
  const app = new Application(components);
  document.body.innerHTML =
    '<div>' +
    '  <div id="component1" data-view-component="TestComponent"></div>' +
    '  <div class="update">' +
    '     <div id="component2" data-view-component="TestComponent"></div>' +
    '  </div>' +
    '</div>';

  app.start();
  const updateDomElement = document.querySelector('.update');
  app.dispatch('dom.update', updateDomElement);

  expect(TestComponent).toHaveBeenCalledTimes(3);
  expect(mockRender).toHaveBeenCalledTimes(3);
});

test('Test application events: before:start, after:start', () => {
  const app = new Application({});
  const mockCallbackBefore = jest.fn();
  const mockCallbackAfter = jest.fn();

  app.addEventListener('before:start', mockCallbackBefore);
  app.addEventListener('after:start', mockCallbackAfter);
  app.start();

  expect(mockCallbackBefore).toHaveBeenCalledTimes(1);
  expect(mockCallbackAfter).toHaveBeenCalledTimes(1);
});

test('Test error event', () => {
  const components = {
    'ErrorComponent' : ErrorComponent
  };
  const app = new Application(components);
  document.body.innerHTML =
    '<div>' +
    '  <div id="component1" data-view-component="ErrorComponent"></div>' +
    '</div>';
  const mockCallbackError = jest.fn();

  app.addEventListener('error', mockCallbackError);
  app.start();

  expect(mockCallbackError).toHaveBeenCalledTimes(1);
});

