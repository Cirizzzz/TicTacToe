const array = [
    [0, 0, 0], // 0->[0, 1, 2] // layer-1
    [0, 0, 0], // 1->[0, 1, 2] // layer-2
    [0, 0, 0]  // 2->[0, 1, 2] // layer-3
];

// 0 empty state
// 1 krestik
// 2 nolik

let isFirstPlayer = true;
let arrValue = true;
let counter=0;
let work = false;
function cell() {
    for (let i = 0; i < array.length; i++) {
        const layer = document.createElement('div');
        layer.className = `layer-${i}`;
        document.body.appendChild(layer);
        for (let y = 0; y < array[i].length; y++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            layer.appendChild(cell);
            function winner(){
                const winalert = document.createElement('h1');
                document.body.appendChild(winalert);
                if ((array[i][0] == array[i][1] && array[i][1] == array[i][2] && array[i][0] != '') ||
                    (array[0][0] == array[1][1] && array[1][1] == array[2][2] && array[0][0] !='') ||
                    (array[0][2] == array[1][1] && array[1][1] == array[2][0] && array[0][2] != '') ||
                    (array[0][y] == array[1][y] && array[1][y] == array[2][y] && array[0][y] !='')) {
                    let isWinner='O'
                    if(!arrValue){
                        isWinner='X';
                    }
                    winalert.innerHTML = isWinner + " won";
                    work = true;
                };
                counter+=1;
                if(counter==9){
                    winalert.innerHTML = "ok it's drawn game";
                };
                return work;
            };
            cell.onclick = function () {
                if(!work){
                    if(cell.innerHTML==''){
                        cell.innerHTML = isFirstPlayer ? 'X' : 'O';
                        array[i][y] = arrValue ? 1 : 2 ;
                        isFirstPlayer = !isFirstPlayer;
                        arrValue = !arrValue;
                        winner();   
                    };
                };  
            };   
        };
    };
};
cell();
