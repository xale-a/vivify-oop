import { borba } from './borba';
import Pauk from './classes/cudovista/Pauk';
import Zmaj from './classes/cudovista/Zmaj';
import Carobnjak from './classes/heroji/Carobnjak';
import Macevalac from './classes/heroji/Macevalac';
import Carolija from './classes/oruzja/Carolija';
import Koplje from './classes/oruzja/Koplje';
import Mac from './classes/oruzja/Mac';

const macevalac = new Macevalac();
const macevalac2 = new Macevalac();
const carobnjak = new Carobnjak();

try {
  carobnjak.uzmiOruzje(new Mac);
  carobnjak.uzmiOruzje(new Koplje);
  macevalac.uzmiOruzje(new Carolija);
  macevalac.napadni();
} catch (error: any) {
  console.log(error.message);
}

macevalac.uzmiOruzje(new Mac);
const bacenoOruzje = macevalac.baciOruzje();
macevalac2.uzmiOruzje(bacenoOruzje!);

macevalac.uzmiOruzje(new Mac);
macevalac.staviURanac(1);
macevalac.uzmiOruzje(new Koplje);

carobnjak.uzmiOruzje(new Carolija);

// Borba 1
const pauk = new Pauk();
borba(macevalac, pauk);

// Borba 2
const zmaj = new Zmaj();
borba(carobnjak, zmaj);