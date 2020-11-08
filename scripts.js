

const ball = document.getElementById('ball');
const container = document.getElementById('container');
let i = -20;
function move () {
        i.toString()
        ball.style.left = i + 'px';
        i++;
        ball.style.background = 'blue';
        if(i > 500) {
            i = -20;
        }
    }
setInterval(move, 5)




