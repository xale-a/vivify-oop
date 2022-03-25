import Cudoviste from './classes/cudovista/Cudoviste';
import Heroj from './classes/heroji/Heroj';
import { writeLine } from './logger';

export function napad(heroj: Heroj, cudoviste: Cudoviste) {
  const napada = Math.floor(Math.random() * 2) === 0 ? 'heroj' : 'cudoviste';

  if (napada === 'heroj') {
    const napad = heroj.napadni();
    cudoviste.health -= napad.jacina;
    writeLine(`${heroj.ime} je napao ${cudoviste.ime} pomocu ${napad.ime}`);
  } else {
    const napad = cudoviste.napadni();
    heroj.health -= napad.jacina;
    writeLine(`${cudoviste.ime} je napao ${cudoviste.ime} pomocu ${napad.ime}`);
  }
}

export function borba(heroj: Heroj, cudoviste: Cudoviste) {
  while (heroj.health > 0 || cudoviste.health > 0) {
    napad(heroj, cudoviste);
  }

  if (cudoviste.health > 0) {
    writeLine(`${cudoviste.ime} je pobedio u duelu sa ${heroj.ime}`);
  } else {
    writeLine(`${heroj.ime} je pobedio u duelu sa ${cudoviste.ime}`);
  }
}
