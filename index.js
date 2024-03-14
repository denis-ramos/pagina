const createCardNode = () => {
  const todo = document.createElement("div");
  todo.classNames = "todo_junto";

  const card = document.createElement("div");
  card.className = "contener";
  todo.appendChild(card);

  const imagen = document.createElement("img");
  // debugger
  imagen.src = `https://i.pinimg.com/564x/d0/60/77/d060773b750c0afab32976464963b3fc.jpg`;
  const imageContainer = document.createElement("div");
  imageContainer.className = "imgen";
  card.appendChild(imageContainer);
  imageContainer.appendChild(imagen);

  const parrafo = document.createElement("div");
  parrafo.className = "letras1";
  card.appendChild(parrafo);

  const parrafo1 = document.createElement("h1");
  parrafo.appendChild(parrafo1);

  const parrafo2 = document.createElement("h2");
  parrafo.appendChild(parrafo2);
  const parrafo3 = document.createElement("p");
  parrafo.appendChild(parrafo3);
  const text = document.createTextNode("YUGI MOUTO");
  parrafo1.appendChild(text);
  const text1 = document.createTextNode("duel monster");
  parrafo2.appendChild(text1);
  const text2 = document.createTextNode("mago oscuro");
  parrafo3.appendChild(text2);

  const bote = document.createElement("div");
  bote.className = "botones";
  card.appendChild(bote);

  const bot1 = document.createElement("button");
  bot1.className = "boton1";
  bote.appendChild(bot1);

  const textm = document.createTextNode("NORMAL");
  bot1.appendChild(textm);

  const bot2 = document.createElement("button");
  bot2.className = "boton1";
  bote.appendChild(bot2);

  const textf = document.createTextNode("FUSION");
  bot2.appendChild(textf);

  const bot3 = document.createElement("button");
  bot3.className = "boton1";
  bote.appendChild(bot3);

  const texts = document.createTextNode("SYNCRO");
  bot3.appendChild(texts);

  const bot4 = document.createElement("button");
  bot4.className = "boton1";
  bote.appendChild(bot4);

  const textx = document.createTextNode("XYZ");
  bot4.appendChild(textx);

  const bot5 = document.createElement("button");
  bot5.className = "boton1";
  bote.appendChild(bot5);

  const textp = document.createTextNode("PENDULO");
  bot5.appendChild(textp);

  return card;
};

const mountNode = document.querySelector(".todo_junto");
const addCardButton = document.querySelector(".boton_cart");

const addCard = () => {
  mountNode.appendChild(createCardNode());
};

addCardButton.addEventListener("click", addCard);
