let jumper = document.getElementById('jumper');
let obstacle = document.getElementById('obstacle');
let message = document.getElementById('message');

function jump() {
    if (jumper.classList !== 'jump') {
        jumper.classList.add('jump');
    }

    setTimeout(function(){
        jumper.classList.remove('jump');
    },500)
}

var checkDead = setInterval(function() {
    var jumperVerticlePosition = parseInt(window.getComputedStyle(jumper).getPropertyValue('top'));
    var obstacleHorizontalPosition = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if (obstacleHorizontalPosition < 20 && obstacleHorizontalPosition > 0 && jumperVerticlePosition>= 130) {
        jumper.style.animation = 'none';
        jumper.style.display = 'none'
        obstacle.style.animation = 'none';
        obstacle.style.display = 'none'
        message.textContent = 'You Have Lost';
        message.style.color = '#c72914';
        message.style.display = 'block';
    }
}, 10);