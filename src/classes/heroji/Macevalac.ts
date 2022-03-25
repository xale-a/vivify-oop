import { Oruzje } from '../../types';
import Carolija from '../oruzja/Carolija';
import Heroj from './Heroj';

class Macevalac extends Heroj {
  protected _ime = 'Macevalac';
  health = 100;

  uzmiOruzje(oruzje: Oruzje): void {
    if (oruzje instanceof Carolija) {
      throw Error('Macevalac ne moze da nauci caroliju');
    }

    this.oruzje = oruzje;
  }
}

export default Macevalac;