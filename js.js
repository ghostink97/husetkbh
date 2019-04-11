const template = document.querySelector("#template").content;
const section = document.querySelector("#eventItems");

for(let i = 0; i<10; i++){
    let clone = template.cloneNode(true);
    clone.querySelector("#eventPic").src="images/placeholder.jpg";
    clone.querySelector("#title").textContent="Title of event";
    clone.querySelector("#timePlace").textContent="Time and venue of event";
    clone.querySelector("#socialMedia").textContent="Social media links";
    clone.querySelector("#price").textContent="Price of event";
    section.appendChild(clone);
}

/*
template.querySelector("#moreinf").addEventListener("click", displayModal);

function displayModal(){
    template.classList.add("inactive");
    modal.classList.remove("inactive");
}
*/
const button=template.querySelector("#moreinf");
button.addEventListener("click", detailsShow);

function detailsShow(){ 
    clone.querySelector("#eventPic2").src="images/placeholder.jpg";
    clone.querySelector("#title2").textContent="Title of event";
    clone.querySelector("#timePlace2").textContent="Time and venue of event";
    clone.querySelector("#price2").textContent="Price of event";
    clone.querySelector("#longDesc").textContent="Long description of event";
    clone.querySelector("#socialMedia2").textContent="Social media links";
    clone.querySelector("#tickets").textContent="Link to tickets lmao";
    modal.classList.remove("inactive");
    template.classList.add("inactive");
}

const modal = document.querySelector(".modal");
modal.querySelector("#lessinf").addEventListener("click", removeModal);

function removeModal(){
    template.classList.remove("inactive");
    modal.classList.add("inactive");
}