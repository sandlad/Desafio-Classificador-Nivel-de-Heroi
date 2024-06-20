let mc = [ 
    {nome: "Zummaer Omaka", xp: 5470}
]
for (let loop = 0; loop < mc.length; loop++)
    {
        let nomeMc = mc[loop].nome
        let xpMc = mc[loop].xp
        let nivel = ""
    
    if(xpMc <= 1000){nivel = "Ferro"}
    else if(xpMc >= 1001 && xpMc <= 2000) {nivel = "Bronze"}
    else if(xpMc >= 2001 && xpMc <= 5000) {nivel = "Prata"}
    else if(xpMc >= 5001 && xpMc <= 7000) {nivel = "Ouro"}
    else if(xpMc >= 7001 && xpMc <= 8000) {nivel = "Platina"}
    else if(xpMc >= 8001 && xpMc <= 9000) {nivel = "Ascendente"}
    else if(xpMc >= 9001 && xpMc <= 10000) {nivel = "Imortal"}
    else if(xpMc > 10000){nivel = "Radiante"}
        console.log("O Herói de nome " + nomeMc + " está no nível de " + nivel + ", com " + xpMc + " pontos de experiência.")
    }
