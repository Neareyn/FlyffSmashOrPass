var mid = 0
function display(){   
    mid = Math.floor(Math.random() * monster.length) + 1
    document.getElementById('monstername').innerHTML = monster[mid].name.en 
    document.getElementById('monstericon').style.backgroundImage = 'url("monsters/' + monster[mid].icon + '")'
    document.getElementById('loading').style.display = 'none'
    document.getElementById('website').style.display = 'flex'
    console.log(monster[mid])




}

function smash(){   
    monster[mid].smash = true
    console.log(monster[mid].smash)
    console.log(mid)

    var parentElement = document.getElementById('smashed'); //get parent
    var childElement = document.createElement('div'); //create child
    childElement.id = "monsterstat" + monster[mid].id; //add id
    childElement.classList.add('monsterstat2')
    parentElement.appendChild(childElement); //apply all this and make div visible OWO

    var parentElement = document.getElementById("monsterstat" + monster[mid].id); //get parent
    var childElement = document.createElement('div'); //create child
    childElement.id = "monstername" + monster[mid].id + "parent"; //add id
    childElement.classList.add('name2')
    parentElement.appendChild(childElement); //apply all this and make div visible OWO

    var parentElement = document.getElementById("monstername" + monster[mid].id + "parent"); //get parent
    var childElement = document.createElement('div'); //create child
    childElement.id = "monstername" + monster[mid].id + "spacer1"; //add id
    childElement.classList.add('spacer')
    parentElement.appendChild(childElement); //apply all this and make div visible OWO

    var parentElement = document.getElementById("monstername" + monster[mid].id + "parent"); //get parent
    var childElement = document.createElement('div'); //create child
    childElement.id = "monstername" + monster[mid].id; //add id
    childElement.classList.add('monstername2')
    childElement.innerHTML = monster[mid].name.en 
    parentElement.appendChild(childElement); //apply all this and make div visible OWO

    var parentElement = document.getElementById("monstername" + monster[mid].id + "parent"); //get parent
    var childElement = document.createElement('div'); //create child
    childElement.id = "monstername" + monster[mid].id + "spacer2"; //add id
    childElement.classList.add('spacer')
    parentElement.appendChild(childElement); //apply all this and make div visible OWO

    var parentElement = document.getElementById("monsterstat" + monster[mid].id); //get parent
    var childElement = document.createElement('div'); //create child
    childElement.id = "monstericon" + monster[mid].id; //add id
    childElement.classList.add('monstericon2')
    childElement.style.backgroundImage = 'url("monsters/' + monster[mid].icon + '")'
    parentElement.appendChild(childElement); //apply all this and make div visible OWO


    nextmob()

    
}



function pass(){   
    monster[mid].smash = false
    console.log(monster[mid].smash)

    var parentElement = document.getElementById('passed'); //get parent
    var childElement = document.createElement('div'); //create child
    childElement.id = "monsterstat" + monster[mid].id; //add id
    childElement.classList.add('monsterstat2')
    parentElement.appendChild(childElement); //apply all this and make div visible OWO

    var parentElement = document.getElementById("monsterstat" + monster[mid].id); //get parent
    var childElement = document.createElement('div'); //create child
    childElement.id = "monstername" + monster[mid].id + "parent"; //add id
    childElement.classList.add('name2')
    parentElement.appendChild(childElement); //apply all this and make div visible OWO

    var parentElement = document.getElementById("monstername" + monster[mid].id + "parent"); //get parent
    var childElement = document.createElement('div'); //create child
    childElement.id = "monstername" + monster[mid].id + "spacer1"; //add id
    childElement.classList.add('spacer')
    parentElement.appendChild(childElement); //apply all this and make div visible OWO

    var parentElement = document.getElementById("monstername" + monster[mid].id + "parent"); //get parent
    var childElement = document.createElement('div'); //create child
    childElement.id = "monstername" + monster[mid].id; //add id
    childElement.classList.add('monstername2')
    childElement.innerHTML = monster[mid].name.en 
    parentElement.appendChild(childElement); //apply all this and make div visible OWO

    var parentElement = document.getElementById("monstername" + monster[mid].id + "parent"); //get parent
    var childElement = document.createElement('div'); //create child
    childElement.id = "monstername" + monster[mid].id + "spacer2"; //add id
    childElement.classList.add('spacer')
    parentElement.appendChild(childElement); //apply all this and make div visible OWO

    var parentElement = document.getElementById("monsterstat" + monster[mid].id); //get parent
    var childElement = document.createElement('div'); //create child
    childElement.id = "monstericon" + monster[mid].id; //add id
    childElement.classList.add('monstericon2')
    childElement.style.backgroundImage = 'url("monsters/' + monster[mid].icon + '")'
    parentElement.appendChild(childElement); //apply all this and make div visible OWO


    nextmob()
}



function stats(){
    document.getElementById('monster').style.display = 'none'
    document.getElementById('stats').style.display = "flex"
    document.getElementById('closestats1').style.display = "block"
    document.getElementById('closestats2').style.display = "block"
}

function closestats(){
    document.getElementById('closestats1').style.display = "none"
    document.getElementById('closestats2').style.display = "none"
    document.getElementById('stats').style.display = "none"
    document.getElementById('monster').style.display = 'block'
}

const smashed = []

function nextmob(){
    mid = Math.floor(Math.random() * monster.length) + 1
    console.log(mid)
    if(monster[mid].smash === "no"){
        console.log("works")
        document.getElementById('monstername').innerHTML = monster[mid].name.en 
        document.getElementById('monstericon').style.backgroundImage = 'url("monsters/' + monster[mid].icon + '")'
    }else{
        nextmob()
    }
        

    

}
