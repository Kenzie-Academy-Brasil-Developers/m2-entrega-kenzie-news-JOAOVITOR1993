// const news = fetch("https://kenzie-news-api.herokuapp.com/api/news")
// .then(resp => resp.json())
// .then(resp => resp)

// console.log(news)

export { requisicao, objetoNews };

async function requisicao(){
    const arrayNews = []
    const data = await fetch("https://kenzie-news-api.herokuapp.com/api/news", {
        method:"GET",
        headers: {"Content-Type": "application/json"}
    })
    const news = await data.json()
    arrayNews.push(news)
    return arrayNews
}
const objetoNews = await requisicao()

