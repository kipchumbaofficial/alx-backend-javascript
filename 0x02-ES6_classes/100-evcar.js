import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const clone = new Car();

    for (const key in this) {
      if (Object.prototype.hasOwnProperty.call(this, key) && key in clone) {
        clone[key] = undefined;
      }
    }
    return clone;
  }
}
