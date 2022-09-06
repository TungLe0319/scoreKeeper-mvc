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
  constructor(name, price,amount,url) {
    this.name = name;
    this.price = price;
    this.amount = amount
    this.url = url
  }
  buyItem() {
    ;
  this.amount++
 
    // console.log('price Increased', this.price);
  }


 

  // function that returns a value that doesn't have to be ran
  // now that it's in the snack the "p" no longer works and must use ".this" now.
  get Template() {
    return `  <div class="card m-2  elevation-3" style="width: 18rem">
    <img
      src="${this.url}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body bg-dark text-light rounded-bottom">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text">
        Some 
      </p>
      <button class="btn btn-danger " onclick="app.SnackController.buyItem('${this.name}')">Buy</button>
      <span class="text-light fs-3"><p>${this.price}</p>
      <span class="text-light fs-3"><p>${this.amount}</p></span></span>
      
    </div>
  </div>`;
  }


get cartTemplate(){
  return `<div class=" bg-info elevated-2 text-light rounded p-2 my-2 border border-light ">
  <p class="card-title">${this.name}</p>
  
  <span class="text-light d-flex"<p>$${this.price*this.amount}</p><span >x${this.amount}</span></span>
</div>`
}
}
