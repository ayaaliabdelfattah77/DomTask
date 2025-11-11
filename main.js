const cardss = [
  { name: "Aya", paragraph: " The moment you start believing in yourself, you’ve already won half the battle.", image: "777.png" },
  { name: "Seif", paragraph: "Aim for the impossible and don’t stop until you’ve made it possible.", image: "888.png" },
  { name: "Hana", paragraph: "The more you invest in your dreams, the more rewarding the harvest will be.", image: "999.png" },
];

for (const card of cardss) {
    // الاساسىdiv استدعاء
  let cards = document.getElementById("cards");

  // الثانى div انشاء
  let myDiv = document.createElement("div");
  myDiv.className = "card";

  //انشاء العناصر h2 , p , img
  let myH2 = document.createElement("h2");
  let myP = document.createElement("p");
  let image = document.createElement("img");

  //كتابه المحتوى ف العناصر 
  myH2.textContent = card.name;
  myP.textContent = card.paragraph;
  image.setAttribute("src", card.image);
  image.setAttribute("alt", "picture");


  //  Cards structure
  cards.appendChild(myDiv);

  myDiv.appendChild(myH2);
  myDiv.appendChild(myP);
  myDiv.appendChild(image);


}

// استخدام loop وqueryselectorall لتغيير الخلفيات للكروت مره واحده ولون الخط
let styleee = document.querySelectorAll(".card")
for(const card of styleee){

    card.style.backgroundColor ="#f8ef90ff"
    card.style.color ="#c51aa6ff"

}

console.log(cards);


