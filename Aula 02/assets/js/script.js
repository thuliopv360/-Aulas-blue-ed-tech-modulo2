const div_id = document.querySelector("#text");
const span = document.querySelector("span");
const img = document.querySelector("img");


div_id.addEventListener("click", () => {
    console.log("Eu fui clicado");
})


const imgList = ["./assets/img/matrix.jpg", "./assets/img/matrix2.jpg"];

function handleChangeImg() {
    if (img.attributes.src.nodeValue == imgList[0]) {
        img.setAttribute("src", `${imgList[1]}`);
    } else {
        img.setAttribute("src", `${imgList[0]}`);
    }
}

// setInterval(handleChangeImg, 2000);