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
  snacks = [
    new Snack(
      'Sushi Platter',
      32,
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fg9nif7zjcwa51.jpg%3Fauto%3Dwebp%26s%3D0915fcfc6d547a9c767ae1f04738580ac457c582&f=1&nofb=1'
    ),
    new Snack('Poke Bowl', 10, 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.atproperties.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F10%2FSunda-_-Poke-Bowl_-Horiz-1.jpg&f=1&nofb=1'),
    new Snack(
      'Boba Tea',
      3.25,
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dixiecrystals.com%2Fsites%2Fdefault%2Ffiles%2Frecipe%2FBoba-Tea-imperial.jpg&f=1&nofb=1'
    ),
    new Snack(
      'Jalapeno Bomb',
      3.2,
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sake2mecerritos.com%2Fwp-content%2Fuploads%2F2016%2F06%2F12-JALAPENO-BOMB.jpg&f=1&nofb=1'
    ),
    new Snack(
      'Fresh Mochi',
      2.25,
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-i3ctKMb2F_Y%2FTj-KDG4RitI%2FAAAAAAAAAmA%2FULciGNSXg0A%2Fs1600%2FP8070214.JPG&f=1&nofb=1'
    ),
    new Snack('Veggie Tempura',3.25, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.washingtonpost.com%2Frf%2Fimage_1484w%2F2010-2019%2FWashingtonPost%2F2020%2F04%2F22%2FFood%2FImages%2Fv-virtualpantry_047_leadweb.JPG%3Ft%3D20170517&f=1&nofb=1')
  ];
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
