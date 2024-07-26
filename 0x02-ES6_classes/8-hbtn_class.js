export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(newSize) {
    if (typeof newSize === 'number') {
      this._size = newSize;
    } else {
      throw new TypeError('Size must be a number');
    }
  }

  get size() {
    return this._size;
  }

  set location(newLocation) {
    if (typeof newLocation === 'string') {
      this._location = newLocation;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this.location;
  }
}
