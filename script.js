function d100() {
    let randomNumber = Math.floor(Math.random() * 100);

    return randomNumber;
}

function roll(id) {
    console.log(id);
    let result = document.getElementById(id);
    result.innerHTML = d100();
}

function setRanges(value, rangesID) {
    let rangeTag = document.getElementById(rangesID);
    rangeTag.innerHTML = value + " " + Math.floor(value / 2) + " " + Math.floor(value / 5);
}

function getValue(inputID, rangesID) {
    let statVal = document.getElementById(inputID).value;

    setRanges(statVal, rangesID);

    if(inputID === 'powVal') {
        let magicVal = document.getElementById("magRanges");
        magicVal.innerHTML = Math.floor(statVal / 5);
    }
}

function hitpoints() {
    let conVal = document.getElementById("conVal").value;
    let sizVal = document.getElementById("sizVal").value;

    let hpRanges = document.getElementById("hpRanges");
    
    hpRanges.innerHTML = Math.floor(((parseInt(conVal) + parseInt(sizVal)) / 10));
}