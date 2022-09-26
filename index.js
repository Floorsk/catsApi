const button = document.querySelector(".button");
const catsImgEl = document.querySelector(".showcase")
const key = "live_KaUpzartb3CMukTmGLp9maw5Ai6wvLnkcVzwvZZkCnobY1z0lSSPnPO2ycY9ubsz"

button.addEventListener("click", fetchPics);

async function fetchPics() {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=${key}`)
    .then(response => response.json())
    .then((data) => {
        let catsImgUrl = data[0].url

        catsImgEl.setAttribute('src', `${catsImgUrl}`)
        
        let catImg = document.querySelector(".catImg")
        catImg.appendChild(catsImgEl)
    })
    .catch(err => console.log(err))
    console.log(response)
}