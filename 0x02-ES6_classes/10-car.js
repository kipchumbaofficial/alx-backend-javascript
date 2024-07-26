export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const Clone = this.constructor;
    const clone = new Clone();

    for (const key in this) {
      if (Object.prototype.hasOwnProperty.call(this, key)) {
        clone[key] = undefined;
      }
    }
    return clone;
  }
}
