import {createElement} from './../utils/render.js';

export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Нальзя создать экземпляр абстрактного класса`);
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error(`Данный метод должен быть переопределен в классе-потомке`);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
