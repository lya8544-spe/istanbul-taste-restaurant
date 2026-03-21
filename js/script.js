
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
},


  LinguineKofteMenu:{
name:"Linguine Köfte Menü",
price:"400 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839234.jpg?width=500",
desc:"Linguine Köfte + Ayran (20 cl.)"
},

KoftePatatesMenu:{
name:"Köfte Patates Menü",
price:"410 TL",
image:"",
desc:"Köfte + Patates Kızartması + Ayran (20 cl.)"
},

LinguineSchnitzelMenu:{
name:"Linguine Schnitzel Menü",
price:"315 TL",
image:"",
desc:"Linguine Makarna + Schnitzel + Ayran (20 cl.)"
},

SchnitzelPatatesMenu:{
name:"Schnitzel Patates Menü",
price:"320 TL",
image:"",
desc:"Schnitzel + Patates Kızartması + Ayran (20 cl.)"
},

BegendiliTavukSote:{
name:"Beğendili Tavuk Sote",
price:"512 TL",
image:"",
desc:"180 gr tavuk göğüs, mantar, kapya biber, köy biberi, domates sos, beğendi sos. Linguine makarna ile"
},

SoyaSosluTavuk:{
name:"Soya Soslu Tavuk",
price:"390 TL",
image:"",
desc:"180 gr tavuk göğüs, mantar, kapya biber, köy biberi, soya sos. Linguine makarna ile"
},

BarbekuSosluTavuk:{
name:"Barbekü Soslu Tavuk",
price:"410 TL",
image:"",
desc:"200 gr tavuk göğüs, mantar, barbekü sos. Linguine makarna ile"
},

MantarSosluTavuk:{
name:"Mantar Soslu Tavuk",
price:"430 TL",
image:"",
desc:"200 gr tavuk göğüs, mantar, krema. Linguine makarna ile"
},

KoriSosluTavuk:{
name:"Köri Soslu Tavuk",
price:"415 TL",
image:"",
desc:"180 gr tavuk göğüs, mantar, kapya biber, köy biberi, köri, krema. Linguine makarna ile"
},

MeksikaSosluTavuk:{
name:"Meksika Soslu Tavuk",
price:"420 TL",
image:"",
desc:"180 gr tavuk göğüs, jalapeno, pul biber, napolitan sos. Linguine makarna ile"
},

BuffaloSosluTavuk:{
name:"Buffalo Soslu Tavuk",
price:"420 TL",
image:"",
desc:"180 gr tavuk göğüs, özel buffalo sos. Linguine makarna ile"
},

CheddarSosluTavuk:{
name:"Cheddar Soslu Tavuk",
price:"430 TL",
image:"",
desc:"200 gr tavuk göğüs, cheddar sos. Linguine makarna ile"
},

ChipotleSosluTavuk:{
name:"Chipotle Soslu Tavuk",
price:"410 TL",
image:"",
desc:"Tek kişilik chipotle soslu tavuk"
},

KekikliTavukKavurma:{
name:"Kekikli Tavuk Kavurma",
price:"512 TL",
image:"",
desc:"Tek kişilik kekikli tavuk kavurma"
},

AlaturkaTavukKavurma:{
name:"Alaturka Tavuk Kavurma",
price:"512 TL",
image:"",
desc:"180 gr tavuk but, sebzeler ve baharatlarla. Linguine makarna ile"
},

SweetChiliSosluTavuk:{
name:"Sweet Chili Soslu Tavuk",
price:"470 TL",
image:"",
desc:"200 gr tavuk göğüs, sweet chili sos. Linguine makarna ile"
},

CafeDeParisSosluTavuk:{
name:"Cafê De Paris Soslu Tavuk",
price:"480 TL",
image:"",
desc:"Tek kişilik Cafê De Paris soslu tavuk"
},

  MeksikaSosluDana:{
name:"Meksika Soslu Dana",
price:"680 TL",
image:"",
desc:"160 gr dana eti, jalapeno, pul biber, napolitan sos. Linguine makarna ile"
},

MantarSosluDana:{
name:"Mantar Soslu Dana",
price:"690 TL",
image:"",
desc:"170 gr dana eti, mantar ve krema sos. Linguine makarna ile"
},

AlaturkaDanaKavurma:{
name:"Alaturka Dana Kavurma",
price:"680 TL",
image:"",
desc:"160 gr dana eti, sebzeler ve baharatlarla. Linguine makarna ile"
},

BegendiliMixxKofte:{
name:"Beğendili Mixx Köfte",
price:"522 TL",
image:"",
desc:"160 gr köfte, beğendi sos ile. Linguine makarna ile"
},

MixxDanaAntrikot:{
name:"Mixx Dana Antrikot",
price:"660 TL",
image:"",
desc:"210 gr dana antrikot. Linguine makarna ile"
},

MixxTavukBonfile:{
name:"Mixx Tavuk Bonfile",
price:"395 TL",
image:"",
desc:"200 gr tavuk bonfile, özel sos ile"
},

MixxTavukPirzola:{
name:"Mixx Tavuk Pirzola",
price:"470 TL",
image:"",
desc:"200 gr tavuk pirzola, özel sos ile"
},

MixxKofte:{
name:"Mixx Köfte",
price:"490 TL",
image:"",
desc:"160 gr köfte. Linguine makarna ile"
},

MixxKoftePirzola:{
name:"Mixx Köfte & Pirzola",
price:"520 TL",
image:"",
desc:"100 gr tavuk pirzola, 80 gr köfte. Linguine makarna ile"
},

MixxSpecialIzgara:{
name:"Mixx Special Izgara",
price:"540 TL",
image:"",
desc:"Schnitzel, pirzola ve köfte karışık. Linguine makarna ile"
},

MixxSchnitzelPirzola:{
name:"Mixx Schnitzel & Pirzola",
price:"495 TL",
image:"",
desc:"Tavuk pirzola ve schnitzel. Linguine makarna ile"
},

LinguinePirzola:{
name:"Linguine Pirzola",
price:"400 TL",
image:"",
desc:"Özel sos, tavuk pirzola ile"
},

LinguineSchnitzel:{
name:"Linguine Schnitzel",
price:"395 TL",
image:"",
desc:"Özel sos, schnitzel ile"
},

NapolitanSosluPenne:{
name:"Napolitan Soslu Penne",
price:"300 TL",
image:"",
desc:"Napolitan soslu penne makarna"
},

LinguineMakarna:{
name:"Linguine Makarna",
price:"276 TL",
image:"",
desc:"Özel soslu linguine makarna"
},

PenneSchnitzel:{
name:"Penne Schnitzel",
price:"350 TL",
image:"",
desc:"Kremalı mantarlı sos ve schnitzel ile"
},

KofteliPenne:{
name:"Köfteli Penne",
price:"456 TL",
image:"",
desc:"Kremalı mantarlı sos ve köfte ile"
},

PennePirzola:{
name:"Penne Pirzola",
price:"432 TL",
image:"",
desc:"Kremalı mantarlı sos ve pirzola ile"
},

LinguineKofte:{
name:"Linguine Köfte",
price:"420 TL",
image:"",
desc:"Özel sos ve köfte ile"
},

MixxManti:{
name:"Mixx Mantı",
price:"430 TL",
image:"",
desc:"300 gr ev mantısı, yoğurt ve sos ile"
},

PatatesKizartmasi:{
name:"Patates Kızartması",
price:"204 TL",
image:"",
desc:"Çıtır patates kızartması"
},

SoganHalkasi:{
name:"Soğan Halkası",
price:"210 TL",
image:"",
desc:"8 adet çıtır soğan halkası"
},

CheddarToplari:{
name:"Cheddar Topları",
price:"240 TL",
image:"",
desc:"6 adet cheddar topları"
},

ChefBasket:{
name:"Chef Basket",
price:"300 TL",
image:"",
desc:"Patates, hellim, soğan halkası ve cheddar topları"
},

SpecialSalata:{
name:"Special Salata",
price:"410 TL",
image:"",
desc:"Yeşillikler, cherry domates, hellim peyniri"
},

TonBalikliSalata:{
name:"Ton Balıklı Salata",
price:"450 TL",
image:"",
desc:"Yeşillikler, cherry domates, ton balığı"
},

AlaturkaSalata:{
name:"Alaturka Salata",
price:"570 TL",
image:"",
desc:"Yeşillikler ve cherry domates"
},

AntrikotSalata:{
name:"Antrikot Salata",
price:"580 TL",
image:"",
desc:"Yeşillikler, cherry domates, antrikot"
},

DortMevsimSalata:{
name:"4 Mevsim Salata",
price:"290 TL",
image:"",
desc:"Yeşillikler ve cherry domates"
},

PeynirliSalata:{
name:"Peynirli Salata",
price:"395 TL",
image:"",
desc:"Yeşillikler, cherry domates, beyaz peynir"
},

HellimSalata:{
name:"Hellim Salata",
price:"410 TL",
image:"",
desc:"Yeşillikler, cherry domates, hellim peyniri"
},

PirzolaSalata:{
name:"Pirzola Salata",
price:"400 TL",
image:"",
desc:"Yeşillikler, cherry domates, pirzola"
},

SchnitzelSalata:{
name:"Schnitzel Salata",
price:"410 TL",
image:"",
desc:"Yeşillikler, cherry domates, schnitzel"
},

CocaColaZero:{
name:"Coca-Cola Zero Sugar",
price:"84 TL",
image:"",
desc:"33 cl kutu içecek"
},

Fanta:{
name:"Fanta",
price:"84 TL",
image:"",
desc:"33 cl kutu içecek"
},

Sprite:{
name:"Sprite",
price:"84 TL",
image:"",
desc:"33 cl kutu içecek"
},

FuseTea:{
name:"Fuse Tea",
price:"82 TL",
image:"",
desc:"33 cl kutu içecek"
},

Ayran:{
name:"Ayran",
price:"76 TL",
image:"",
desc:"20 cl ayran"
},

Su:{
name:"Su",
price:"50 TL",
image:"",
desc:"50 cl su"
},

Poset:{
name:"Poşet",
price:"1 TL",
image:"",
desc:"Plastik poşet"
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
