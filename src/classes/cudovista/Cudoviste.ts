import { Napad } from '../../types';

class Cudoviste {
  protected _ime = 'Cudoviste';
  health = 0;
  napadi: Napad[] = [];

  get ime() {
    return this._ime;
  }

  napadni() {
    const napadIndex = Math.floor(Math.random() * this.napadi.length);
    return this.napadi[napadIndex];
  }
}

export default Cudoviste;