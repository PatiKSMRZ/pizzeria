let order = document.getElementById("order");
let orderItemsData = [
    {
        id: "MargaritaId",
        name: "MARGARITA",
        price: 20,
        desc: "(sos, ser, oregano)",
        img: "pizza/pizza-1.jpg"
    },
    {
        id: "FunghiId",
        name: "FUNGHI",
        price: 25,
        desc: "(sos, ser, oregano, pieczarki)",
        img: "pizza/pizza-2.jpg"
    },
    {
        id: "CapriId",
        name: "Capri",
        price: 30,
        desc: "(sos, ser, oregano, szynka)",
        img: "pizza/pizza-3.jpg"
    },
    {
        id: "SalamiId",
        name: "Salami",
        price: 28,
        desc: "(sos, ser, oregano, salami)",
        img: "pizza/pizza-4.jpg"
    },
    {
        id: "SalamiId",
        name: "Salami",
        price: 28,
        desc: "(sos, ser, oregano, salami)",
        img: "pizza/pizza-4.jpg"
    }

];
let basket = [];
let generateOrder =()=>{
    return (order.innerHTML = orderItemsData
        .map((x) => {
            let {id, name, price, desc, img} = x;
            return `
            <div id=product-id-${id} class="item">
            <img width="220" height="150" class="pizza-img-real" src=${img} alt="">
            <div class="detail">
                <h1 class="pizza-name">${name}</h1>
                <p class="pizza-desc">${desc}</p>
                <div class="price-quantity">
                    <h2>zł ${price}</h2>
                    <div class="buttons">
                      <i onclick="decrement(${id})" class="ri-subtract-line"></i>
                      <div id=${id} class="quantity">0</div>
                      <i  onclick="increment(${id})" class="ri-add-line"></i>
                    </div>
                </div>
            </div>
        </div>`;

        }).join(""));

};
generateOrder();
let increment = (id)=> {
    let selectedItem = id;
    let search = basket.find((x)=>x.id === selectedItem.id);
    if (search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1
        });
    }
    else {
        search.item +=1;
    }
    //console.log(basket);
    update(selectedItem.id);
};
let decrement = (id)=> {
    let selectedItem = id;
    let search = basket.find((x)=>x.id === selectedItem.id);
    if (search === 0) return;
 
    else {
        search.item -=1;
    }
    //console.log(basket);
    update(selectedItem.id);
    
};
let update =(id) => {
    let search = basket.find((x)=>x.id=== id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
};