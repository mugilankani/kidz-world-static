let  bookHTML = ""
let gameHTML = ""
let craftHTML = ""

const books =[
  {
    image :  "http://i1.faceprep.in/prograd-junior/book2.png" ,
    name :"The famous five"    ,
    info : 'Guid Blyton' ,
    price : 4.59
  },
  {
    image : "./assets/book3.png" ,
    name :'Matlida' ,
    info :"Roald Dahl",
    price : 6.80
  },
  {
    image :'http://i1.faceprep.in/prograd-junior/book4.png',
    name : "Harry Potter" ,
    info : "JK Rowling",
    price : 10
  },
  {
    image :"./assets/book5.png" ,
    name : "For Young Readers" ,
    info : "Ruskin Bond" ,
    price : 7.29
  },
  {
    image :"./assets/book6.png" ,
    name :"Wimpy Kid - DIY" ,
    info :"Jeff Kinney",
    price : 4.99
  },
  {
    image : "./assets/book1.png" ,
    name : "This was our pact" ,
    info :"Ryan Andrews",
    price :  7.49
  }
];

const games =[
  {
    image : "./assets/dart-board.png" ,
    name : "Dart Board" ,
    info :"Wooden board, 16 inches",
    price :  17.49
},{
  image : "./assets/connect-four.png" ,
    name : "Connect 4" ,
    info :"Board game, multiplayer",
    price : 19.99
},
{
  image : "./assets/jenga.png" ,
    name : "Jenga" ,
    info :"Wooden blocks, 54 pieces",
    price : 20.99
},
{
  image : "./assets/monopoly.png" ,
  name : "Monopoly" ,
  info :"1.61 x 15.75 x 10.51 inches",
  price :  19.49
}
];

const craft =[
  {
    image : "./assets/bookmarks.png" ,
    name : "Bookmarksd" ,
    info :"Handmade with love",
    price :  12.49
},{
  image : "./assets/birthday-card.png" ,
    name : "Birthday card" ,
    info :"Handmade with love",
    price : 19.99
},
{
  image : "./assets/stuffed-toy.png" ,
    name : "Stuffed toys" ,
    info :"Handmade with love",
    price : 15.99
},
{
  image : "./assets/dream-catcher.png" ,
  name : "Dream catcher drawing" ,
  info :"Handmade with love",
  price :  18.49
}
];

books.forEach((book) => {
  bookHTML += `
  <div>
    <div>
      <img class="books" src=" ${book.image} "/>
      <h3>${book.name}</h3>
      <h4>${book.info}</h4>
    </div>
    <div class="buy flex space-between">
      <p>$${book.price}</p>
      <button id="book1" class="js-add-to-cart button flex space-evenly" data-name="${book.name}">
        <h6  >Add</h6>
        <img src="./assets/cart-icon-white.png" alt="" />
      </button>
    </div>
  </div>
  `
}); 

games.forEach((game) => {
  gameHTML += `
  <div>
    <div>
      <img class="games" src="${game.image}" alt="" />
      <h3>${game.name}</h3>
      <h4>${game.info}</h4>
    </div>
    <div class="buy flex space-between">
      <p>$${game.price}</p>
      <button id="game2" data-name="${game.name}" class="js-add-to-cart button flex space-evenly">
        <h6>Add</h6>
        <img  src="./assets/cart-icon-white.png" alt="" />
      </button>
    </div>
  </div>
  `
}); 

craft.forEach((craft) =>{
  craftHTML += `
  <div>
    <div>
      <img class="crafts" src="${craft.image}" />
      <h3>${craft.name}</h3>
      <h4>${craft.info}</h4>
    </div>
    <div class="buy flex space-between">
      <p>$${craft.price}</p>
      <button id="craft1" data-name="${craft.name}"class="js-add-to-cart button flex space-evenly">
        <h6>Add</h6>
        <img  src="./assets/cart-icon-white.png" alt="" />
      </button>
    </div>
  </div>
  `
});

let cart = []

document.querySelector('.js-book-grid').innerHTML = bookHTML;
document.querySelector('.js-game-grid').innerHTML = gameHTML;
document.querySelector('.js-craft-grid').innerHTML = craftHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', ()=>{
    const itemName = button.dataset.name;

    let matchingItem = cart.find(item => item.productName === itemName);

    if(matchingItem){
      matchingItem.quantity += 1;
    }else{
      cart.push({
        productName: itemName,
        quantity: 1
      });
    }

    let cartQuantity = 0;
    cart.forEach((item) =>{
      cartQuantity += item.quantity;
    });

    console.log(cart);
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  });
});
document.querySelector('#cart').addEventListener('click', () => {
  console.log(cart);
});