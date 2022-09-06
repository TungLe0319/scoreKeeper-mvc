import { appState } from '../AppState.js';
// import { Snack } from '../Models/Snack.js';
import { snacksService } from '../Services/SnacksService.js';

function _drawPlayers() {
  let snacks = appState.snacks;
  let template = '';
  snacks.forEach((s) => template += s.Template);
  document.getElementById('snacks').innerHTML = template;
}
export class SnackController {
  constructor() {
    // new plat ('Mick,0)
    // console.log({ name: 'Sushi Platter', price: 32 });
    // new Snack('Poke Bowl', 3.25).buyItem();
_drawPlayers()
  }

  buyItem(name) {
    console.log(name, 'buying Item');
    snacksService.buyItem(name);
    _drawPlayers()
  }
  //   drawPlayers(){
  // let snacks = appState.snacks
  // let template = ''
  // snacks.forEach(s=>{
  //   template += `<div class="col-md-6 text-center p-2 bg-light elevation-3">
  //   <h3>${s.name}</h3>
  //   <h3>${s.price}</h3>
  //   <button class="btn btn-primary" onclick="app.SnackController.buyItem(${s.name})">+</button>
  //  </div>`
  // })
  // document.getElementById('snacks').innerHTML = template
  //   }
}
