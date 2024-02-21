const gallery = [
    {
        id: 1,
        img: "gallery/1.jpg"
    },
    {
        id: 2,
        img: "gallery/2.jpg"
    },
    {
        id: 3,
        img: "gallery/3.jpg"
    },
    {
        id: 4,
        img: "gallery/4.jpg"
    },
      {
        id: 5,
        img: "gallery/5.jpg"
    },
    {
        id: 6,
        img: "gallery/6.jpg"
    },
    {
        id: 7,
        img: "gallery/7.jpg"
    },
    {
        id: 8,
        img: "gallery/8.jpg"
    }

];

//console.log(gallery[3]);

const img = document.getElementById("images");
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

//console.log(leftBtn);

let currentItem = 0;
window.addEventListener('DOMContentLoaded', function(){
    showPicture(currentItem);

});

function showPicture (person) {
    const item = gallery[person];  // można dac const item = review[currentItem]
    img.src = item.img;

};

rightBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > gallery.length -1) {
        currentItem = 0;
    }
    showPicture(currentItem);
});

leftBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = gallery.length - 1;
    }
    showPicture(currentItem);
});
