import { appState } from '../AppState.js';
// import { Snack } from '../Models/Snack.js';
import { snacksService } from '../Services/SnacksService.js';

function _drawSnacks() {
  let snacks = appState.snacks;
  let template = '';
  snacks.forEach((s) => (template += s.Template));
  document.getElementById('snacks').innerHTML = template;
}

function _drawCart() {
  let cartSnacks = appState.snacks;
  let template = '';
  cartSnacks.forEach((p) => {
    if (p.amount > 0) {
      template += p.cartTemplate
    }
  });
  // cartSnacks.forEach(s => template += s.cartTemplate)
  document.getElementById('cart').innerHTML = template;
}

function _drawTotal(){
  let total = 0
 let totalDOM= document.getElementById('total')
  let snacks = appState.snacks
snacks.forEach(snack =>{
  total += snack.price*snack.amount
})
totalDOM.innerText=total.toFixed(2)
}

function _raisePrice(){
  let snacks = appState.snacks
snacks.forEach(s=>{
  s.price++
})
}
export class SnackController {
  constructor() {
    // new plat ('Mick,0)
    // console.log({ name: 'Sushi Platter', price: 32 });
    // new Snack('Poke Bowl', 3.25).buyItem();
    _drawSnacks();
  }

  buyItem(name) {
    console.log(name, 'buying Item');
    snacksService.buyItem(name);
    _drawSnacks();
    _drawCart();
    _drawTotal()  
  }
  raisePrice(){
    snacksService.raisePrice()
   _drawSnacks()
    _raisePrice()
  }
}
