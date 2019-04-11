const template = document.querySelector("#template").content;
const section = document.querySelector("#eventItems");
const modal = document.querySelector(".modal");


for(let i = 0; i<10; i++){
    let clone = template.cloneNode(true);
    clone.querySelector("#eventPic").src="images/placeholder.jpg";
    clone.querySelector("#title").textContent="Title of event";
    clone.querySelector("#timePlace").textContent="Time and venue of event";
    clone.querySelector("#socialMedia").textContent="Social media links";
    clone.querySelector("#price").textContent="Price of event";


    clone.querySelector("#moreInf").addEventListener("click", detailsShow);

        function detailsShow(){ 
            modal.classList.remove("inactive");
            modal.querySelector("#eventPic2").src="images/placeholder.jpg";
            modal.querySelector("#title2").textContent="Title of event";
            modal.querySelector("#timePlace2").textContent="Time and venue of event";
            modal.querySelector("#price2").textContent="Price of event";
            modal.querySelector("#longDesc").textContent="Long description of event";
            modal.querySelector("#socialMedia2").textContent="Social media links";
            modal.querySelector("#tickets").textContent="Link to tickets lmao";
            document.querySelector("#template").classList.add("inactive");
        }
        section.appendChild(clone);
}

modal.querySelector("#lessinf").addEventListener("click", removeModal);

function removeModal(){
    document.querySelector("#template").classList.remove("inactive");
    modal.classList.add("inactive");
}

/*
template.querySelector("#moreinf").addEventListener("click", displayModal);

function displayModal(){
    template.classList.add("inactive");
    modal.classList.remove("inactive");
}
*/