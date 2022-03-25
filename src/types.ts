import BljujeVatru from './classes/napadi/BljujeVatru';
import Udara from './classes/napadi/Udara';
import Ujeda from './classes/napadi/Ujeda';
import Carolija from './classes/oruzja/Carolija';
import Koplje from './classes/oruzja/Koplje';
import Mac from './classes/oruzja/Mac';

export type Oruzje = Mac | Koplje | Carolija;
export type BrojOruzja = 1 | 2;

export type Napad = Udara | Ujeda | BljujeVatru;