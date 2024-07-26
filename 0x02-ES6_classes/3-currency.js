export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
