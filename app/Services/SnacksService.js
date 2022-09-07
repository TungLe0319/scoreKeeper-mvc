import { appState } from '../AppState.js';
import { Snack } from "../Models/Snack.js";

//  function _buyItem(name){
// let snack = appState.snacks.find(s => s.name == name)
// console.log(snack);
// snack.buyItem()
// snack.Template()
//  }

class SnacksService {


  buyItem(name) {
    // console.log(name, 'buyItem() service');
    let snack = appState.snacks.find((p) => p.name == name);
    console.log(snack.name);
    snack.buyItem();
  
  }

  raisePrice(){
    appState.snacks.forEach(s =>{
    s.price+=.25
    })
  }


  buyCart(){
    appState.snacks.forEach(snack =>{
      snack.amount= 0
    })
  }



removeItem(name){
 let snack= appState.snacks.find(snack => snack.name == name)
snack.amount--
}

}



// NOTE export services as consts so they are now un-changeable
// Here kept the const as lowercase on the first word
export const snacksService = new SnacksService();
