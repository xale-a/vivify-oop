import { Napad } from '../../types';
import BljujeVatru from '../napadi/BljujeVatru';
import Udara from '../napadi/Udara';
import Cudoviste from './Cudoviste';

class Zmaj extends Cudoviste {
  protected _ime = 'Zmaj';
  health = 200;
  napadi: Napad[] = [new Udara(), new BljujeVatru()];
}

export default Zmaj;