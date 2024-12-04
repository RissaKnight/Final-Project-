"use strict"


    $("#lightSlider").lightSlider({
        item: 3,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
 
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', 
        easing: 'linear', 
 
        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,
 
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
 
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,
 
        thumbItem:10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [],
 
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    })
// $(document).ready( () => {

    let shop = document.getElementById("shop");

    let shopItemsData = [
      {
          id: 1,
          name: "Handcrafted Necklace",
          description: "A unique necklace crafted from reclaimed bullet shells.",
          price: 25.00,
          image: "images/product1.jpg"
      },
      {
          id: 2,
          name: "Handcrafted Cufflinks",
          description: "Unique cufflinks crafted from reclaimed bullet shells.",
          price: 25.00,
          image: "images/product2.jpg"
      },
      {
          id: 3,
          name: "Handcrafted Ring",
          description: "A unique ring crafted from reclaimed bullet shells.",
          price: 25.00,
          image: "images/product3.jpg"
      },
      { 
          id: 4, 
          name: "Handcrafted Cuff", 
          description: "A unique arm cuff crafted from reclaimed bullet shells.", 
          price: 25.00, 
          image: "images/product4.jpg" 
      },
      { 
          id: 5, name: "Handcrafted Necklace Holder", 
          description: "A necklace holder crafted from reclaimed bullet shells.", 
          price: 25.00, 
          image: "images/product5.jpg" 
      },
      { 
          id: 6, name: "Handcrafted Bottle Opener", 
          description: "A bottle opener crafted from reclaimed bullet shells.", 
          price: 25.00, 
          image: "images/product6.png" 
      },
      { 
          id: 7, 
          name: "Handcrafted Keychain", 
          description: "A keychain crafted from reclaimed bullet shells.", 
          price: 25.00, 
          image: "images/product7.jpg" 
      },
      { 
          id: 8, 
          name: "Handcrafted Solid Ring", 
          description: "A solid ring crafted from reclaimed bullet shells.", 
          price: 25.00, 
          image: "images/product8.jpg" 
      },
      { 
          id: 9, 
          name: "Handcrafted Capsule Pendant", 
          description: "A capsule pendant crafted from reclaimed bullet shells.", 
          price: 25.00, 
          image: "images/product9.jpg" 
      },
      { 
          id: 10, 
          name: "Handcrafted Earrings", 
          description: "A pair of earrings crafted from reclaimed bullet shells.", 
          price: 25.00, 
          image: "images/product10.jpg" 
      }
];

    // let basket = JSON.parse(localStorage.getItem("data")) || [];
    
    let generateShop = () => {
      return (shop.innerHTML = shopItemsData
        .map((x) => {
          let { id, name, description, price, image } = x;
          // let search = basket.find((x) => x.id === id) || [];
          return `
        <div id=product-id-${id} class="item">
            <img width="220" src=${image} alt="">
            <div class="details">
              <h3>${name}</h3>
              <p>${description}</p>
              <div class="price-quantity">
                <h2>$ ${price} </h2>
                <div class="buttons">
                 
                <i onclick="decrement()" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">0</div>
                <i onclick="increment()" class="bi bi-plus-lg"></i>
                
                  </div>
              </div>
            </div>
          </div>
        `;
        })
        .join(""));
    };
    
    generateShop();
    
    let increment = (id) => {
      let selectedItem = id;
      let search = basket.find((x) => x.id === selectedItem.id);
    
      if (search === undefined) {
        basket.push({
          id: selectedItem.id,
          item: 1,
        });
      } else {
        search.item += 1;
      }
    
      console.log("increment");
      update()
    }
      // update(selectedItem.id);
    //   localStorage.setItem("data", JSON.stringify(basket));
    // };
    let decrement = () => {
      // let selectedItem = id;
      // let search = basket.find((x) => x.id === selectedItem.id);
    
      // if (search.item === 0) return
      // else {
      //   search.item -= 1;
      // }
      
      console.log("decrement")
      // update()
    };
    
//     let update = (id) => {

//       let search = basket.find((x) => x.id === id);
//       console.log("search.item");
  
//       document.getElementById(id).innerHTML = search.item;
//       calculation();
//     };
    
//     let calculation = () => {
//       console.log("calc func running")
//       // let cartIcon = document.getElementById("cartAmount");
//       // cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
//     };
    
//     // calculation();
// //  });