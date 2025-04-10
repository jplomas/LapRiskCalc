// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn(),
  key: jest.fn(),
  length: 0,
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock document methods used by Ionic/Vue
Object.defineProperty(document, 'documentElement', {
  value: {
    classList: {
      add: jest.fn(),
      remove: jest.fn(),
      contains: jest.fn(),
      toggle: jest.fn(),
    },
    setAttribute: jest.fn(),
    getAttribute: jest.fn().mockReturnValue(null),
    style: {
      setProperty: jest.fn(),
    },
  },
  writable: true,
});

Object.defineProperty(document, 'body', {
  value: {
    classList: {
      add: jest.fn(),
      remove: jest.fn(),
      contains: jest.fn(),
      toggle: jest.fn(),
    },
    style: {
      setProperty: jest.fn(),
    },
  },
  writable: true,
});

// Mock Ionic components
jest.mock('@ionic/vue', () => {
  const actual = jest.requireActual('@ionic/vue');
  return {
    ...actual,
    // Add any specific Ionic component mocks here if needed
    IonPage: { template: '<div><slot></slot></div>' },
    IonContent: { template: '<div><slot></slot></div>' },
    IonButton: { template: '<button><slot></slot></button>' },
  };
});

// Mock Ionic core
jest.mock('@ionic/core', () => ({
  initialize: jest.fn(),
})); 