import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  set floor(newFloors) {
    if (typeof newFloor === 'number') {
      this._floors = newFloors;
    } else {
      throw new TypeError('Floor must be a number');
    }
  }

  get floor() {
    return this._floors;
  }

  set sqft(newSqft) {
    if (typeof newSqft === 'number') {
      this._sqft = newSqft;
    } else {
      throw new TypeError('Sqft must be an answer');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
