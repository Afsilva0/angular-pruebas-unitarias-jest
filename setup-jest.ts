import 'jest-preset-angular/setup-jest';

/* global mock for jsdom*/
const mock = () => {
  let storage: { [key: string]: string } = {};

  return {
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string, value: string) => (storage[key] = value),
    clean: () => (storage = {}),
  };
};

Object.defineProperties(window, {
  storage: {
    value: mock(),
    enumerable: false,
  },
});

Object.defineProperties(window, {
  sessionStorage: {
    value: mock(),
    writable: false,
  },
});

Object.defineProperties(window, {
  getComputedStyle: {
    value: () => {
      return {
        display: 'none',
        appearance: ['-webkit-appearance'],
      };
    },
    writable: false,
  },
});

Object.defineProperties(document.body.style, {
  transform: {
    value: () => {
      return { enumerable: true, configurable: true };
    },
  },
});

HTMLCanvasElement.prototype.getContext = <
  typeof HTMLCanvasElement.prototype.getContext
>jest.fn();
