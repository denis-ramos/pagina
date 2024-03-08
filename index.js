
const createCardNode = ()=>{
    const imagen = document.createElement("img")
    // debugger
    imagen.src=`https://i.pinimg.com/564x/83/cc/03/83cc03dcf55c7b249024debf7c129c12.jpg ` 
    const imageContainer = document.createElement("div")
    imageContainer.className = "image-container"
    const parrafo = document.createElement("h1")
    parrafo.className = "description"
    const text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perferendis ex, repudiandae dolorum illo illum itaque autem eveniet corporis et obcaecati est provident assumenda fuga aut debitis ab vel voluptas.')
    parrafo.appendChild(text)
    const card = document.createElement("div")
    card.className="card"

    imageContainer.appendChild(imagen)
    card.appendChild(imageContainer)
    card.appendChild(parrafo)

    return card
}

const mountNode = document.querySelector("#cart")
const addCardButton = document.querySelector(".boton_cart") 

const addCard=()=>{
    mountNode.appendChild(createCardNode())
}

addCardButton.addEventListener('click', addCard)

