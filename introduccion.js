/**
 * DOM: Document Object Model = Es una representacion del Objeto Document, que vendria a ser todo el Sitio Web y lo que contiene
 * Este objeto vive en el navegador el cual se puede manipular
 * Se puede acceder a cada aspecto del sitio web, y modificar como sea querido
 * Esta es una introduccion a como se usa y como se ve en la consola del DevOps
 */


console.log(document.body.children)
console.log(document.body.innerHTML)
console.log(document.body.innerText)

const bodyChildren = document.body.children
const route = document.location.href

bodyChildren[0].innerText = "Texto nuevo"
bodyChildren[1].children[0].innerText = route

document.body.style.backgroundColor = "gray"

const animation = () => {
    if (document.body.style.backgroundColor === "gray") {
        document.body.style.backgroundColor = "blue"
    } else {
        document.body.style.backgroundColor = "gray"
    }
}

setInterval(animation, 1500)