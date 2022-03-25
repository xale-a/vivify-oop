import { Oruzje } from '../../types';
import Heroj from './Heroj';
import Koplje from '../oruzja/Koplje';
import Mac from '../oruzja/Mac';

class Carobnjak extends Heroj {
  protected _ime = 'Carobnjak';
  health = 150;

  uzmiOruzje(oruzje: Oruzje) {
    if (oruzje instanceof Mac || oruzje instanceof Koplje) {
      throw Error(`Carobnjaku nije dozvoljeno da uzme ${oruzje.ime}.`);
    }

    this.oruzje = oruzje;
  };
}

export default Carobnjak;