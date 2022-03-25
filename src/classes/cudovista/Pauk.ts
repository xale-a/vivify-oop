import { Napad } from '../../types';
import Udara from '../napadi/Udara';
import Cudoviste from './Cudoviste';

class Pauk extends Cudoviste {
  protected _ime = 'Pauk';
  health = 35;
  napadi: Napad[] = [new Udara(), new Udara()];
}

export default Pauk;