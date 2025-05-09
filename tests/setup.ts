import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue'
import { createPinia } from 'pinia'

const app = createApp({})
app.use(IonicVue)
app.use(createPinia())

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(() => null),
  setItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn(),
  key: jest.fn(),
  length: 0,
} as unknown as Storage;

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock document methods used by Ionic/Vue
const classListMock = {
  add: jest.fn(),
  remove: jest.fn(),
  contains: jest.fn(),
  toggle: jest.fn(),
  item: jest.fn(),
  length: 0,
  value: '',
  replace: jest.fn(),
  supports: jest.fn(),
  entries: jest.fn(),
  forEach: jest.fn(),
  keys: jest.fn(),
  values: jest.fn(),
  toString: jest.fn(),
} as unknown as DOMTokenList;

const styleMock = {
  setProperty: jest.fn(),
  getPropertyValue: jest.fn(),
  removeProperty: jest.fn(),
  length: 0,
  parentRule: null,
  cssText: '',
  cssFloat: '',
} as unknown as CSSStyleDeclaration;

Object.defineProperty(document, 'documentElement', {
  value: {
    classList: classListMock,
    setAttribute: jest.fn(),
    getAttribute: jest.fn().mockReturnValue(null),
    style: styleMock,
  },
  writable: true,
});

Object.defineProperty(document, 'body', {
  value: {
    classList: classListMock,
    style: styleMock,
  },
  writable: true,
});

// Mock window.IntersectionObserver
const MockIntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn()
}))

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
})

// Mock ResizeObserver
const MockResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn()
}))

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: MockResizeObserver,
})

// Mock Ionic components
jest.mock('@ionic/vue', () => {
  const actual = jest.requireActual('@ionic/vue');
  return {
    ...actual,
    IonPage: { template: '<div><slot></slot></div>' },
    IonContent: { template: '<div><slot></slot></div>' },
    IonButton: { template: '<button type="button"><slot></slot></button>' },
    IonBackButton: { template: '<button type="button"><slot></slot></button>' },
    IonToolbar: { template: '<div><slot></slot></div>' },
    IonHeader: { template: '<div><slot></slot></div>' },
    IonButtons: { template: '<div><slot></slot></div>' },
    IonTitle: { template: '<div><slot></slot></div>' },
    IonIcon: { template: '<div><slot></slot></div>' },
    IonItem: { template: '<div><slot></slot></div>' },
    IonLabel: { template: '<div><slot></slot></div>' },
    IonRadio: { template: '<input type="radio"><slot></slot></input>' },
    IonText: { template: '<div><slot></slot></div>' },
    IonInput: { template: '<input type="text"><slot></slot></input>' },
    IonCard: { template: '<div><slot></slot></div>' },
    IonCardContent: { template: '<div><slot></slot></div>' },
    IonList: { template: '<div><slot></slot></div>' },
    IonRadioGroup: { template: '<div><slot></slot></div>' },
    IonGrid: { template: '<div><slot></slot></div>' },
    IonRow: { template: '<div><slot></slot></div>' },
    IonCol: { template: '<div><slot></slot></div>' },
    IonModal: { template: '<div><slot></slot></div>' },
    IonCheckbox: { template: '<input type="checkbox"><slot></slot></input>' },
  };
});

// Mock Ionic core
jest.mock('@ionic/core', () => ({
  initialize: jest.fn(),
})); 