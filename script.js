// Your code here
const table = document.getElementsByTagName('table')[0]

function makeRow (){
    const row = document.createElement('tr');
    for (let i = 0; i < 20; i++){
        const td = document.createElement('td');
        row.appendChild(td);
    }
    table.appendChild(row);
}

makeRow()
makeRow()


const button = document.getElementById('add-row');
button.addEventListener('click', makeRow);

let chosenColor = 'yellow'

table.addEventListener('click', colorize);
function colorize(event){
    const target = event.target;
    if (target.tagName === 'TD'){
        if (target.className === chosenColor){
            target.className = ''
        } else {
            target.className = chosenColor
        }
    }
}

const select = document.querySelector('select');

select.addEventListener('change', function(event){
    chosenColor = event.target.value
});

