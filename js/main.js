import flags from './model/flags.js';

const tagMain = document.querySelector("main")

flags.forEach((flag) => {
    const tagDiv = document.createElement("div");
    tagDiv.classList.add("flag", "col-2", "my-2", "text-center");
    const tagImg = document.createElement("img");
    tagImg.src = flag.image;
    tagImg.alt = flag.name;
    const tagP = document.createElement("p");
    const nameCountry = document.createTextNode(flag.name);
    tagP.appendChild(nameCountry);
    tagDiv.appendChild(tagImg);
    tagDiv.appendChild(tagP);
    tagMain.appendChild(tagDiv);   

    

})
