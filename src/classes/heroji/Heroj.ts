import { writeLine } from '../../logger';
import { BrojOruzja, Oruzje } from '../../types';

abstract class Heroj {
  protected _ime = 'Heroj';
  protected _oruzje: Oruzje | null = null;
  health = 0;
  ranac: [Oruzje | null, Oruzje | null] = [null, null];

  get ime() {
    return this._ime;
  }

  protected set oruzje(oruzije: Oruzje) {
    if (this._oruzje) {
      throw Error('Heroj vec drzi oruzje');
    }

    this._oruzje = oruzije;
    writeLine(`${this._ime} je pokupio oruzje ${oruzije.ime}`);
  }

  get oruzje() {
    return this._oruzje!;
  }

  napadni() {
    if (!this._oruzje) {
      throw Error('Heroj ne drzi nikakvo oruzje');
    }
    return this._oruzje;
  }

  uzmiOruzje(oruzije: Oruzje) {
    this.oruzje = oruzije;
  };

  baciOruzje() {
    const oruzije = this._oruzje;
    this._oruzje = null;
    return oruzije;
  };

  staviURanac(brojOruzja: BrojOruzja) {
    brojOruzja--;
    if (this.ranac[brojOruzja]) {
      throw Error(`Mesto u rancu sa brojem ${++brojOruzja} je vec zauzeto`);
    }

    if (!this._oruzje) {
      throw Error('Oruzje nije aktivno');
    }

    this.ranac[brojOruzja] = this._oruzje;
    this._oruzje = null;
  };

  uzmiIzRanca(brojOruzja: BrojOruzja) {
    brojOruzja--;
    if (!this.ranac[brojOruzja]) {
      throw Error(`Mesto u rancu sa brojem ${++brojOruzja} je prazno`);
    }

    [this._oruzje, this.ranac[brojOruzja]] = [this.ranac[brojOruzja], this._oruzje];
    return;
  }
}

export default Heroj;