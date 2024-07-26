export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    this._checker();
  }

  set sqft(newSqft) {
    if (typeof newSqft === 'number') {
      this._sqft = newSqft;
    }
  }

  get sqft() {
    return this._sqft;
  }

  _checker() {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function' || this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  evacuationWarningMessage() {
    return `Evacuate ${this._sqft} squarefeet`;
  }
}
