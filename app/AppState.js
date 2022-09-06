import { Snack } from './Models/Snack.js';
import { Value } from './Models/Value.js';
import { EventEmitter } from './Utils/EventEmitter.js';
import { isValidProp } from './Utils/isValidProp.js';
import { loadState } from './Utils/Store.js';

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value);

  // application can now take in snacks
  // NOTE this type line just adds functionarlity to vs code, telling it only Players can exist in that array
  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [new Snack('Sushi Platter', 32), new Snack('Poke Bowl', 10), new Snack('Boba Tea', 3.25), new Snack('Jalapeno Bomb', 3.20), new Snack('Fresh Mochi', 2.25)];
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
