const template = document.querySelector("template").content;
const parent = document.querySelector("main");
const urlParms = new URLSearchParams(window.location.search);
const baseLink = "http://angelezrameyer.com/huset/wp-json/wp/v2/";

function loadAll() {
    fetch(baseLink + "events?_embed").then(e => e.json()).then(show);
}

function show(items) {
    items.forEach(item => {
        console.log(item)
        const clone = template.cloneNode(true);
        clone.querySelector(".bname").textContent = item.titleof;
                clone.querySelector(".datetime").textContent = item.dateof + " at " + item.venue;
                clone.querySelector(".imgs").src = item.image.guid;
                clone.querySelector(".detail-btn").href = "details.html?id="+item.id;
                parent.appendChild(clone);
            })
        }

        loadAll(baseLink);