const ladoA = 4;
const ladoB = 4;

if (ladoA === ladoB) {
    console.log("SIM");
    switch (ladoA) {
        case 0:
            console.log("Bucha de Branco");
            break;
        case 1:
            console.log("Bucha de Às");
            break;
        case 2:
            console.log("Bucha de Duque");
            break;
        case 3:
            console.log("Bucha de Terno");
            break;
        case 4:
            console.log("Bucha de Quadra");
            break;
        case 5:
            console.log("Bucha de Quina");
            break;
        case 6:
            console.log("Bucha de Sena");
            break;
    }
}
else {
    console.log("NÃO");
}