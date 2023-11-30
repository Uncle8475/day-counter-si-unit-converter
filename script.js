function calculateDays() {
    const start= new Date(document.getElementById('startDate').value);
    const end= new Date(document.getElementById('endDate').value);

    if (start > end) {
        alert('End date must be equal to or after the start date.');
        return;
    }

    const timeDiff = Math.abs(end.getTime() - start.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    document.getElementById('result').innerText = `Number of days between the dates: ${daysDiff} days`;
}
function convertMass() {
    const massInput = parseFloat(document.getElementById('massInput').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;

    let result;

    if (unitFrom === 'gram' && unitTo === 'kg') {
        result = massInput / 1000;
    } else if (unitFrom === 'kg' && unitTo === 'gram') {
        result = massInput * 1000;
    } else if (unitFrom === 'gram' && unitTo === 'pound') {
        result = massInput / 453.592;
    } else if (unitFrom === 'pound' && unitTo === 'gram') {
        result = massInput * 453.592;
    } else {
        result = massInput; // No conversion needed
    }

    document.getElementById('resultt').innerText = `Result: ${result} ${unitTo}`;
}



