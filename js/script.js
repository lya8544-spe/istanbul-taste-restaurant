
// Sayfa yüklendiğinde mesaj
console.log("Istanbul Taste sitesi hazır!");

// Basit scroll efekti
window.addEventListener("scroll", function(){

let header = document.querySelector("header");

if(window.scrollY > 50){
header.style.background = "#5a0000";
}else{
header.style.background = "#8B0000";
}

});

// Menü kartına tıklayınca detay sayfasına gitme
function openDish(){

window.location.href = "dish.html";

}



const dishes = {

Dumanlı:{
name:"🍔 Dumanlı Dev Burger Menü",
price:"520₺",
image:"https://images.unsplash.com/photo-1624855600799-ac8e8bddd1da?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhbWJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
desc:"Izgara lezzeti ve dumanlı sosun buluştuğu büyük boy burger. Orta boy çıtır patates kızartması ve serinletici kutu içecek ile tamamlanan doyurucu menü."
},

Nuggets:{
name:"10'lu Nuggets",
price:"300₺",
image:"https://images.unsplash.com/photo-1562967914-608f82629710?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyaWVkJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
desc:"10'lu Nuggets 10 Adet."
},

Nuggetss:{
name:"20'li Nuggets",
price:"400₺",
image:"https://images.unsplash.com/photo-1562967914-608f82629710?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyaWVkJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
desc:"20'li Nuggets 20 Adet."
},

GoldenBut2Adet:{
name:"Golden But 2 Adet",
price:"220₺",
image:"https://media.istockphoto.com/id/2187868522/photo/delicious-and-crispy-fried-chicken-legs-on-vintage-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=wSGXgMFadZSK_i0qg8BkTsIbtGy15DFjJhIc8tmuPPU=",
desc:"Golden But  2 Adet."
},

Kanat:{
name:"6’lı Buffalo Soslu Kanat",
price:"450₺",
image:"https://media.istockphoto.com/id/1299807022/photo/top-view-korean-spicy-fried-chicken-with-side-dishes.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yyb7NpU8syqvp9jWLyerHVVU6Uqr1PyPpxlNtyWN2Bc=",
desc:"6’lı Buffalo Soslu Kanat  6 Adet."
},



ParçaBut1:{
name:"1 Parça But",
price:"120₺",
image:"https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fHww",
desc:"1 Parça But  1 Adet."
},

ParçaButkanat4:{
name:"4 Parça Acılı Kanat",
price:"430₺",
image:"https://media.istockphoto.com/id/2247163548/photo/oven-grilled-chicken-wings-turkish-name-tavuk-kanat.webp?a=1&b=1&s=612x612&w=0&k=20&c=a3cQnUdA8DF6XvxzjtLjQXJuH-R3Uk4pYstst2q7KL0=",
desc:"4 Parça Acılı Kanat  4 kanat."
},

Popchickeniki:{
name:"🍗 Popchicken İkili Menü",
price:"420₺",
image:"https://plus.unsplash.com/premium_photo-1683655058728-415f4f2674bf?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
desc:"🍗 Popchicken İkili Menü  2 Adet."
},



NuggetsSalata:{
name:"Nuggets Salata",
price:"455₺",
image:"https://www.tiklagelsin.com/_next/image?url=https%3A%2F%2Fcdn.tiklagelsin.com%2Ftg-b2b-cdn-public%2Fproduct%2Fe4987f98-e362-481f-a437-7e328770ebd3%2Fimage%2F8255ed1f-7be5-4fcb-ba06-75b4f98e43fb.jpg&w=828&q=75",
desc:"Nuggets Salata Nuggets Salata + Kutu İçecek."
}
};


const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if(dishes[id]){

document.getElementById("dish-name").innerText = dishes[id].name;
document.getElementById("dish-price").innerText = dishes[id].price;
document.getElementById("dish-img").src = dishes[id].image;
document.getElementById("dish-desc").innerText = dishes[id].desc;

}