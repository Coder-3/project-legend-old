const checkSelected = () => {
    let selectedStatsWithValues = [];
    let selectedStats = [];
    let selectedStatsValues = [];

    [...document.getElementsByClassName("characteristic-checkbox")].forEach(
        (element, index, array) => {
            if(element.checked) {
                let selectedCharacteristicName = element.id.replace('Checkbox', '');
                selectedStats.push(selectedCharacteristicName);
                
                let selectedCharacteristicValueElement = document.getElementById(selectedCharacteristicName + "ValueInput").value;
                selectedStatsValues.push(selectedCharacteristicValueElement);
            }
        }
    );

    selectedStatsWithValues.push(selectedStats);
    selectedStatsWithValues.push(selectedStatsValues);

    return selectedStatsWithValues;
}

const drawActionScreen = () => {
    let selectedStatsWithValues = checkSelected();

    console.log(selectedStatsWithValues);

    document.body.innerHTML = "";

    let actionScreenDiv = document.createElement("DIV");
    actionScreenDiv.id = "action-screen-div";

    selectedStatsWithValues[0].forEach(function (characteristic) {
        let currentCharacteristic = characteristicComponent(characteristic);
        actionScreenDiv.appendChild(currentCharacteristic);
    });

    selectedStatsWithValues[1].forEach(function (value){
        let 
    });

    document.body.append(actionScreenDiv);
}