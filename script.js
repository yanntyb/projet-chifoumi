let globale = document.getElementById("global");
let choix = globale.querySelector("#choix");
let listeChoix = choix.getElementsByClassName("button");
let choixPlayer1 = document.getElementById("choixPlayer1");
let choixPlayer2 = document.getElementById("choixPlayer2");
let divPartie = document.getElementById("partie")


function recupImage(){
    let tab = [];
    let tabDroite = ["image/droite/ciseaux.webp","image/droite/feuille.webp","image/droite/pierre.webp"]
    let tabGauche = ["image/gauche/ciseaux.webp","image/gauche/feuille.webp","image/gauche/pierre.webp"]
    tab.push(tabDroite);
    tab.push(tabGauche);
    return tab;
}

function clickChoix(liste,tabImage){
    for(let i of liste){
        i.addEventListener("mousedown",function (){
            i.style.backgroundColor = "red";
            afficherChoix(i.id,tabImage,choixPlayer1);
            let random = Math.ceil(Math.random() * 3);
            afficherChoix(random.toString(),tabImage,choixPlayer2);
            let win = checkWin([i.id,random.toString()]);
            if(win === 0){
                let point = document.getElementById("point1");
                point.innerHTML = 1 + parseInt(point.innerHTML);
            }else if (win === 1){
                let point = document.getElementById("point2");
                point.innerHTML = 1 + parseInt(point.innerHTML);
            }
        });
        i.addEventListener("mouseup", function (){
            i.style.backgroundColor = "black";
        });
    }
}

function afficherChoix(number,tabImage,div){
    for(let node of div.children){
        div.removeChild(node);
    }
    let image = document.createElement("img");
    switch (number){
        case "1":
            image.src = tabImage[0][2];
            div.appendChild(image);
            break;
        case "2":
            image.src = tabImage[0][1];
            div.appendChild(image);
            break;
        case "3":
            image.src = tabImage[0][0];
            div.appendChild(image);
            break;
    }
}

function checkWin(choix){
    let choixLeft = "";
    let choixRight = "";
    if(choix[0] === "1"){
        choixLeft = "pierre";
    }
    else if (choix[0] === "2"){
        choixLeft = "feuille";
    }
    else if (choix[0] === "3"){
        choixLeft = "ciseaux";
    }
    if(choix[1] === "1"){
        choixRight = "pierre";
    }
    else if (choix[1] === "2"){
        choixRight = "feuille";
    }
    else if (choix[1] === "3"){
        choixRight = "ciseaux";
    }
    divPartie.innerHTML += choixLeft + "   " + choixRight + "<br>"
    if(choix[0] === "1" && choix[1] === "3"){
        return 0;
    }
    else if(choix[0] === "3" && choix[1] === "1"){
        return 1
    }
    else if(choix[0] === "2" && choix[1] === "1"){
        return 0
    }
    else if(choix[0] === "1" && choix[1] === "2"){
        return 1
    }
    else if(choix[0] === "3" && choix[1] === "2"){
        return 0
    }else if(choix[0] === "2" && choix[1] === "3"){
        return 1
    }
}


let image = recupImage();

clickChoix(listeChoix,image);
