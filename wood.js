

function wood_need(chairQuantity, tableQuantity, bedQuantity) {
    const chairWood = 3;
    const tableWood = 5;
    const bedWood = 30;

    let chair = chairQuantity * chairWood;
    let table = tableQuantity * tableWood;
    let bed = bedQuantity * bedWood;

    let toatalWoodRequired = chair + table + bed;
    return toatalWoodRequired;
}


console.log('Wood is required all item: ', (wood_need(14, 7, 3)));