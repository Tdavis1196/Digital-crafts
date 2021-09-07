let fButton = document.querySelector(".findButton");
let seccon = document.querySelector(".secondContainer");
function erase() {
    var searches = document.getElementsByClassName('searches')
    while(searches[0]) {
        searches[0].parentNode.removeChild(searches[0]);
    }
}


async function getNews(){
    let apiKey = "d97b15ae35224aa2b0fa44fd2933cd61";
    let keyword = document.querySelector("input").value;
    let url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;
    const fetchnews = await fetch(url);
    const jsonNews = await fetchnews.json();
    console.log(jsonNews.articles);
    erase()

    for (const source of jsonNews.articles) {
        const newsDiv = document.createElement("div");
        newsDiv.className = "searches";
        const newsimg = document.createElement("img");
        newsimg.className = "newimage";
        const newstitle = document.createElement("h3");
        const newsinfo = document.createElement("p");
        console.log(source);
        newsimg.src = source.urlToImage;
        newstitle.innerHTML = source.title;
        newsinfo.innerText = source.url;   
        newsDiv.append(newsimg,newstitle,newsinfo);
        seccon.append(newsDiv);
        
    }
}

fButton.addEventListener("click", () => getNews())
