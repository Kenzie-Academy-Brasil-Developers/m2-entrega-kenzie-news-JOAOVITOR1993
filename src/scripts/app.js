import { requisicao, objetoNews } from "./requests.js";

const ulBanner = document.querySelector(".banner")
const ul = document.querySelector(".lista")

function listarNoticias(array){
    array.forEach(element => {
        element.forEach(news =>{
            let noticias = criarCards(news)
            ul.append(noticias)
        })
    });
}
listarNoticias(objetoNews)

function noticiaCapa(){
    const news1 = document.querySelectorAll("li")[0]
    ulBanner.appendChild(news1)
}
noticiaCapa()


function criarCards(news){
    let li = document.createElement("li")
    let img = document.createElement("img")
    let div = document.createElement("div")
    let span = document.createElement("span")
    let h1 = document.createElement("h1")
    let p = document.createElement("p")
    let spanFonte = document.createElement("span")

    img.src = news.imagem
    div.className = "container__inf__card"
    span.className = "categoria"
    span.innerText = news.categoria
    h1.innerText = news.titulo
    p.innerText = news.resumo
    spanFonte.className = "fonte"
    spanFonte.innerText= `Fonte: ${news.fonte}`

    div.append(span, h1, p, spanFonte)
    li.append(img,div)
    return li
}