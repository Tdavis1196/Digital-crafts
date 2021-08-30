let clipCont = document.querySelector(".seccon");
let findButton = document.querySelector(".findButton");
function erase() {
    var searches = document.getElementsByClassName('searches')
    while(searches[0]) {
        searches[0].parentNode.removeChild(searches[0]);
    }
}


async function getClips(){
    let apiKey = "13c00273";
    let movie = document.querySelector(".input").value;
    let apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;
    
    const fetchClips = await fetch(apiUrl + `&s=${movie}`);
    const jsonClips = await fetchClips.json();
    
    console.log(jsonClips.Search);
    erase()
   

    for (const clip of jsonClips.Search) {
        const clipDiv = document.createElement("div");
        clipDiv.className = "searches"
        const clipPost = document.createElement("img");
        clipPost.className = "posters"
        const clipTitle = document.createElement("h3");
        clipTitle.className = "title"
        clipPost.src = clip.Poster;
        clipTitle.innerText = clip.Title;
        clipDiv.append(clipTitle,clipPost);
        clipCont.append(clipDiv);       
    }
}

findButton.addEventListener("click", ()=> getClips());
