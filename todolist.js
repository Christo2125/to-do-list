
let number = 0
document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById("submit-button");
    button.addEventListener('click', function data() {
        let input = document.getElementById('input').value;

        // const display = document.getElementById('displayData');
        // display.innerText = input;

        const tableRow = document.createElement('tr'); // Create a row
        const tableBody = document.getElementById('tableBody');
        tableBody.appendChild(tableRow);

        const tableDataA = document.createElement('td'); // Create dataA
        tableDataA.innerText = (number += 1);
        tableRow.appendChild(tableDataA);

        const tableDataB = document.createElement('td'); // Create dataB
        var output = tableDataB.innerText = input;
        tableRow.appendChild(tableDataB);

        const tableDataC = document.createElement('td'); // Create dataC
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('class', 'checkBox');
        tableDataC.appendChild(checkBox);
        tableRow.appendChild(tableDataC);

        const tableDataD = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'delete'
        deleteButton.setAttribute('id', 'delete');
        tableDataD.appendChild(deleteButton);
        tableRow.appendChild(tableDataD)

        deleteButton.addEventListener('click', function () {
            tableRow.remove();
        })
    });
});




//find the same input and alert the user




