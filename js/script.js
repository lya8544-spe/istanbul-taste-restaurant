
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
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839234.jpg",
desc:"Linguine Köfte + Ayran (20 cl.)"
},

KoftePatatesMenu:{
name:"Köfte Patates Menü",
price:"410 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839235.jpg?width=500",
desc:"Köfte + Patates Kızartması + Ayran (20 cl.)"
},

LinguineSchnitzelMenu:{
name:"Linguine Schnitzel Menü",
price:"315 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839236.jpg?width=500",
desc:"Linguine Makarna + Schnitzel + Ayran (20 cl.)"
},

SchnitzelPatatesMenu:{
name:"Schnitzel Patates Menü",
price:"320 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839237.jpg?width=500",
desc:"Schnitzel + Patates Kızartması + Ayran (20 cl.)"
},

BegendiliTavukSote:{
name:"Beğendili Tavuk Sote",
price:"512 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839238.jpg?width=500",
desc:"180 gr tavuk göğüs, mantar, kapya biber, köy biberi, domates sos, beğendi sos. Linguine makarna ile"
},

SoyaSosluTavuk:{
name:"Soya Soslu Tavuk",
price:"390 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839239.jpg?width=500",
desc:"180 gr tavuk göğüs, mantar, kapya biber, köy biberi, soya sos. Linguine makarna ile"
},

BarbekuSosluTavuk:{
name:"Barbekü Soslu Tavuk",
price:"410 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839240.jpg?width=500",
desc:"200 gr tavuk göğüs, mantar, barbekü sos. Linguine makarna ile"
},

MantarSosluTavuk:{
name:"Mantar Soslu Tavuk",
price:"430 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839241.jpg?width=500",
desc:"200 gr tavuk göğüs, mantar, krema. Linguine makarna ile"
},

KoriSosluTavuk:{
name:"Köri Soslu Tavuk",
price:"415 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839242.jpg?width=500",
desc:"180 gr tavuk göğüs, mantar, kapya biber, köy biberi, köri, krema. Linguine makarna ile"
},

MeksikaSosluTavuk:{
name:"Meksika Soslu Tavuk",
price:"420 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839243.jpg?width=500",
desc:"180 gr tavuk göğüs, jalapeno, pul biber, napolitan sos. Linguine makarna ile"
},

BuffaloSosluTavuk:{
name:"Buffalo Soslu Tavuk",
price:"420 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839244.jpg?width=500",
desc:"180 gr tavuk göğüs, özel buffalo sos. Linguine makarna ile"
},

CheddarSosluTavuk:{
name:"Cheddar Soslu Tavuk",
price:"430 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839245.jpg?width=500",
desc:"200 gr tavuk göğüs, cheddar sos. Linguine makarna ile"
},

ChipotleSosluTavuk:{
name:"Chipotle Soslu Tavuk",
price:"410 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839246.jpg?width=500",
desc:"Tek kişilik chipotle soslu tavuk"
},

KekikliTavukKavurma:{
name:"Kekikli Tavuk Kavurma",
price:"512 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839247.jpg?width=500",
desc:"Tek kişilik kekikli tavuk kavurma"
},

AlaturkaTavukKavurma:{
name:"Alaturka Tavuk Kavurma",
price:"512 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839248.jpg?width=500",
desc:"180 gr tavuk but, sebzeler ve baharatlarla. Linguine makarna ile"
},

SweetChiliSosluTavuk:{
name:"Sweet Chili Soslu Tavuk",
price:"470 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839249.jpg?width=500",
desc:"200 gr tavuk göğüs, sweet chili sos. Linguine makarna ile"
},

CafeDeParisSosluTavuk:{
name:"Cafê De Paris Soslu Tavuk",
price:"480 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/32299672.jpg?width=500",
desc:"Tek kişilik Cafê De Paris soslu tavuk"
},

MeksikaSosluDana:{
name:"Meksika Soslu Dana",
price:"680 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839250.jpg?width=500",
desc:"160 gr dana eti, jalapeno, pul biber, napolitan sos. Linguine makarna ile"
},

MantarSosluDana:{
name:"Mantar Soslu Dana",
price:"690 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839251.jpg?width=500",
desc:"170 gr dana eti, mantar ve krema sos. Linguine makarna ile"
},

AlaturkaDanaKavurma:{
name:"Alaturka Dana Kavurma",
price:"680 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839252.jpg?width=500",
desc:"160 gr dana eti, sebzeler ve baharatlarla. Linguine makarna ile"
},

BegendiliMixxKofte:{
name:"Beğendili Mixx Köfte",
price:"522 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839254.jpg?width=500",
desc:"160 gr köfte, beğendi sos ile. Linguine makarna ile"
},

MixxDanaAntrikot:{
name:"Mixx Dana Antrikot",
price:"660 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839255.jpg?width=500",
desc:"210 gr dana antrikot. Linguine makarna ile"
},

MixxTavukBonfile:{
name:"Mixx Tavuk Bonfile",
price:"395 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839256.jpg?width=500",
desc:"200 gr tavuk bonfile, özel sos ile"
},

MixxTavukPirzola:{
name:"Mixx Tavuk Pirzola",
price:"470 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839257.jpg?width=500",
desc:"200 gr tavuk pirzola, özel sos ile"
},

MixxKofte:{
name:"Mixx Köfte",
price:"490 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839259.jpg?width=500",
desc:"160 gr köfte. Linguine makarna ile"
},

MixxKoftePirzola:{
name:"Mixx Köfte & Pirzola",
price:"520 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839260.jpg?width=500",
desc:"100 gr tavuk pirzola, 80 gr köfte. Linguine makarna ile"
},

MixxSpecialIzgara:{
name:"Mixx Special Izgara",
price:"540 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839262.jpg?width=500",
desc:"Schnitzel, pirzola ve köfte karışık. Linguine makarna ile"
},

MixxSchnitzelPirzola:{
name:"Mixx Schnitzel & Pirzola",
price:"495 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839263.jpg?width=500",
desc:"Tavuk pirzola ve schnitzel. Linguine makarna ile"
},

LinguinePirzola:{
name:"Linguine Pirzola",
price:"400 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839264.jpg?width=500",
desc:"Özel sos, tavuk pirzola ile"
},

LinguineSchnitzel:{
name:"Linguine Schnitzel",
price:"395 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839265.jpg?width=500",
desc:"Özel sos, schnitzel ile"
},

NapolitanSosluPenne:{
name:"Napolitan Soslu Penne",
price:"300 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839266.jpg?width=500",
desc:"Napolitan soslu penne makarna"
},

LinguineMakarna:{
name:"Linguine Makarna",
price:"276 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839267.jpg?width=500",
desc:"Özel soslu linguine makarna"
},

PenneSchnitzel:{
name:"Penne Schnitzel",
price:"350 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839268.jpg?width=500",
desc:"Kremalı mantarlı sos ve schnitzel ile"
},

KofteliPenne:{
name:"Köfteli Penne",
price:"456 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839269.jpg?width=500",
desc:"Kremalı mantarlı sos ve köfte ile"
},

PennePirzola:{
name:"Penne Pirzola",
price:"432 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839270.jpg?width=500",
desc:"Kremalı mantarlı sos ve pirzola ile"
},

LinguineKofte:{
name:"Linguine Köfte",
price:"420 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839271.jpg?width=500",
desc:"Özel sos ve köfte ile"
},

MixxManti:{
name:"Mixx Mantı",
price:"430 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839272.jpg?width=500",
desc:"300 gr ev mantısı, yoğurt ve sos ile"
},

PatatesKizartmasi:{
name:"Patates Kızartması",
price:"204 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839282.jpg?width=500",
desc:"Çıtır patates kızartması"
},

SoganHalkasi:{
name:"Soğan Halkası",
price:"210 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839283.jpg?width=500",
desc:"8 adet çıtır soğan halkası"
},

CheddarToplari:{
name:"Cheddar Topları",
price:"240 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839284.jpg?width=500",
desc:"6 adet cheddar topları"
},

ChefBasket:{
name:"Chef Basket",
price:"300 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839286.jpg?width=500",
desc:"Patates, hellim, soğan halkası ve cheddar topları"
},

SpecialSalata:{
name:"Special Salata",
price:"410 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839273.jpg?width=500",
desc:"Yeşillikler, cherry domates, hellim peyniri"
},

TonBalikliSalata:{
name:"Ton Balıklı Salata",
price:"450 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839274.jpg?width=500",
desc:"Yeşillikler, cherry domates, ton balığı"
},

AlaturkaSalata:{
name:"Alaturka Salata",
price:"570 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839275.jpg?width=500",
desc:"Yeşillikler ve cherry domates"
},

AntrikotSalata:{
name:"Antrikot Salata",
price:"580 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839276.jpg?width=500",
desc:"Yeşillikler, cherry domates, antrikot"
},

DortMevsimSalata:{
name:"4 Mevsim Salata",
price:"290 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839277.jpg?width=500",
desc:"Yeşillikler ve cherry domates"
},

PeynirliSalata:{
name:"Peynirli Salata",
price:"395 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839278.jpg?width=500",
desc:"Yeşillikler, cherry domates, beyaz peynir"
},

HellimSalata:{
name:"Hellim Salata",
price:"410 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839279.jpg?width=500",
desc:"Yeşillikler, cherry domates, hellim peyniri"
},

PirzolaSalata:{
name:"Pirzola Salata",
price:"400 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839280.jpg?width=500",
desc:"Yeşillikler, cherry domates, pirzola"
},

SchnitzelSalata:{
name:"Schnitzel Salata",
price:"410 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/31839281.jpg?width=500",
desc:"Yeşillikler, cherry domates, schnitzel"
},

CocaColaZero:{
name:"Coca-Cola Zero Sugar",
price:"84 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/27396809.jpg?width=500",
desc:"33 cl kutu içecek"
},

Fanta:{
name:"Fanta",
price:"84 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/27396818.jpg?width=500",
desc:"33 cl kutu içecek"
},

Sprite:{
name:"Sprite",
price:"84 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/27396829.jpg?width=500",
desc:"33 cl kutu içecek"
},

FuseTea:{
name:"Fuse Tea",
price:"82 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/27396874.jpg?width=500",
desc:"33 cl kutu içecek"
},

Ayran:{
name:"Ayran",
price:"76 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/27396910.jpg?width=500",
desc:"20 cl ayran"
},

Su:{
name:"Su",
price:"50 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/27396916.jpg?width=500",
desc:"50 cl su"
},

Poset:{
name:"Poşet",
price:"1 TL",
image:"https://images.deliveryhero.io/image/fd-tr/Products/27396929.jpg?width=500",
desc:"Plastik poşet"
},

   // Pidemler
  PatatesliPidem: {
    name: "Patatesli Pidem (45 cm.)",
    price: "400₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/45235388.jpg?width=500",
    desc: "Patates püresi, çarliston biber, kuru soğan, maydanoz, pul biber"
  },
  KıymalıPatateslim: {
    name: "Kıymalı Patateslim (45 cm.)",
    price: "450₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/45235389.jpg?width=500",
    desc: "Dana kıyma, domates, patates, kuru soğan, çarliston biber, maydanoz, pul biber"
  },
  TavukluPidem: {
    name: "Tavuklu Pidem (45 cm.)",
    price: "455₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/45235390.jpg?width=500",
    desc: "Tavuk göğüs, domates, çarliston biber, kaşar peynir, kırmızıbiber, kekik, pul biber, karabiber, kimyon"
  },
  KaşarlıPidem: {
    name: "Kaşarlı Pidem (45 cm.)",
    price: "460₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/45235391.jpg?width=500",
    desc: "Kaşar peynir"
  },
  KıymalıPidem: {
    name: "Kıymalı Pidem (45 cm.)",
    price: "460₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/45235394.jpg?width=500",
    desc: "Dana kıyma, domates, kuru soğan, çarliston biber, maydanoz"
  },
  KarışıkPidem: {
    name: "Karışık Pidem (45 cm.)",
    price: "495₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/45235396.jpg?width=500",
    desc: "Dana kuşbaşı, dana kıyma, domates, çarliston biber, kuru soğan, kaşar peynir, maydanoz"
  },
  KıymalıKaşarlım: {
    name: "Kıymalı Kaşarlım (45 cm.)",
    price: "520₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/45235397.jpg?width=500",
    desc: "Dana kıyma, domates, kuru soğan, çarliston biber, kaşar peynir, maydanoz"
  },
  KuşbaşılıPidem: {
    name: "Kuşbaşılı Pidem (45 cm.)",
    price: "580₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/45235398.jpg?width=500",
    desc: "Dana kuşbaşı, kaşar peynir, domates, çarliston biber, maydanoz"
  },
  TavukluPatateslim: {
    name: "Tavuklu Patateslim (45 cm.)",
    price: "490₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/49166584.jpg?width=500",
    desc: "Tavuk göğüs, domates, çarliston biber, kırmızıbiber, kaşar peynir, tuz, kekik, pul biber, karabiber, kimyon, patates püresi, kuru soğan, maydanoz, toz biber"
  },
  SosisliPidem: {
    name: "Sosisli Pidem (45 cm.)",
    price: "520₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/69858355.jpg?width=500",
    desc: "Sosis"
  },
  KavurmalıPidem: {
    name: "Kavurmalı Pidem (45 cm.)",
    price: "620₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/70005601.jpg?width=500",
    desc: "Dana kavurma, kaşar peynir"
  },

  // Lahmacun
  Lahmacun: {
    name: "Lahmacun (30 cm.)",
    price: "310₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/45235387.jpg?width=500",
    desc: "Dana kıyma, biber salçası, domates, kuru soğan, çarliston biber, kapya biber, maydanoz, karabiber, pul biber, lahmacun garnitürü"
  },


  // Yan Ürünler
  CigKofte: {
    name: "Çiğ Köfte (90 gr.)",
    price: "220₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/66418042.jpg?width=500",
    desc: "Marul, limon"
  },

  // Tatlılar
  Sutlac: {
    name: "Sütlaç",
    price: "280₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/64439874.jpg?width=500",
    desc: "Folyo kâsede sunulur"
  },

  // İçecekler
  CappyVisne: {
    name: "Cappy Vişne (33 cl.)",
    price: "240₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/39502878.jpg?width=500",
    desc: "Kutu içecek"
  },
  CocaCola: {
    name: "Coca-Cola (45 cl.)",
    price: "250₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/39502873.jpg?width=500",
    desc: "Pet şişe"
  },
  
  
  DamlaSoda: {
    name: "Damla Soda (20 cl.)",
    price: "220₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/39502876.jpg?width=500",
    desc: "Cam şişe"
  },
  
  CappyKarisik: {
    name: "Cappy Karışık (33 cl.)",
    price: "260₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/39502879.jpg?width=500",
    desc: "Kutu içecek"
  },
  CappySeftali: {
    name: "Cappy Şeftali (33 cl.)",
    price: "280₺",
    image: "https://images.deliveryhero.io/image/fd-tr/Products/39502880.jpg?width=500",
    desc: "Kutu içecek"
  },
  

  
};


const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if(dishes[id]){

document.getElementById("dish-name").innerText = dishes[id].name;
document.getElementById("dish-price").innerText = dishes[id].price;
document.getElementById("dish-img").src = dishes[id].image;
document.getElementById("dish-desc").innerText = dishes[id].desc;

}
