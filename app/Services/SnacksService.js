import { appState } from '../AppState.js';

class SnacksService {
  buyItem(name) {
    console.log(name, 'buyItem() service');
    let snack = appState.snacks.find((p) => p.name == name);
    console.log(snack);
    snack.buyItem();
  }
}

// NOTE export services as consts so they are now un-changeable
// Here kept the const as lowercase on the first word
export const snacksService = new SnacksService();
