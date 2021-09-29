async function getPics(){
    // create a variable
    // await fetch(url)
    // must convert it to json data
    const picContainer = document.querySelector(".images")
    const fetchpics = await fetch("https://random.dog/woof.json");
    const jsonPic = await fetchpics.json();
    // console.log(jsonPic)
    const randPic = document.createElement("img");
    randPic.src = jsonPic.image;
    picContainer.append(randPic);
    return jsonPic;
}

const submitButton = document.querySelector(".clickforpic")
submitButton.addEventListener("click", ()=> {getPics()})