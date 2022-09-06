// getting information from one js file to another
// export means another js can import and use it.
// description of what an object suppose to look like
// better not to hard code values
export class Snack {
  // name = 'Sushi Platter';
  // price = 32.99;
  // -----------------------
  // builds the object snack is blueprint, constructor turns it into an actual object
  // lets values be created on snack creation
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  buyItem() {
    this.price++;
    console.log('price Increased', this.price);
  }

  // function that returns a value that doesn't have to be ran
  // now that it's in the snack the "p" no longer works and must use ".this" now.
  get Template() {
    return `<div class="col-md-6 text-center p-2 bg-light elevation-3">
    <h3>${this.name}</h3>
    <h3>${this.price}</h3>
    <button class="btn btn-primary" onclick="app.SnackController.buyItem('${this.name}')">+</button>
   </div>`;
  }
}
