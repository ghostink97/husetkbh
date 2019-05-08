const template = document.querySelector("template").content;
const parent = document.querySelector("main");
const urlParms = new URLSearchParams(window.location.search);
const baseLink = "http://angelezrameyer.com/bands/wp-json/wp/v2/";

function loadAll() {
    fetch(baseLink + "car?_embed").then(e => e.json()).then(show);
}

function show(cars) {
    cars.forEach(car => {
        clone.querySelector(".bname").textContent = band.bname;
                clone.querySelector(".start").textContent = band.start;
                clone.querySelector(".rank").textContent = band.rank;
                clone.querySelector(".text").textContent = band.text;
                clone.querySelector(".genre").textContent = band.genres;
                clone.querySelector(".imgs").src = band.image.guid;
                clone.querySelector(".detail-btn").href = "details.html?id="+band.id;
                parent.appendChild(clone);
            })
        }

        loadData(mylink);