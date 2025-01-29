let scoreElH = document.getElementById("score-el-home")
let scoreElG = document.getElementById("score-el-guest")
//
let countH = 0
let countG = 0

function addOneH(){
    countH += 1
    scoreElH.textContent = countH
}

function addTwoH(){
    countH += 2
    scoreElH.textContent = countH
}

function addThreeH(){
    countH += 3
    scoreElH.textContent = countH
}

//

function addOneG(){
    countG += 1
    scoreElG.textContent = countG
}

function addTwoG(){
    countG += 2
    scoreElG.textContent = countG
}

function addThreeG(){
    countG += 3
    scoreElG.textContent = countG
}

function newGame(){
    countH = 0
    countG = 0
    scoreElH.textContent = 0
    scoreElG.textContent = 0
}




