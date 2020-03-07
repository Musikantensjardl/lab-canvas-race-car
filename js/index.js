window.onload = () => {
  let canvas = document.getElementById("canvas")
ctx = document.getElementById("canvas").getContext("2d");
  document.getElementById('start-button').onclick = () => {
    startGame()
  }


 
   }

   let car = {
    x: 400,
    y: 550,
    leftPressed: function () {
      car.x -= 20
    },
    rightPressed: function () {
      car.x += 20
    },
    
  }

  let obstacle1 = {
    x: 200,
    y: 0
  }
  let y = 0
  

 

  function startGame() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)


let frameCounter = 0
let drawCar = () => {
  frameCounter++
   let imgCar = new Image();
imgCar.src = "images/car.png"
  ctx.drawImage(imgCar, car.x, car.y, 50, 100)

  function obstacleFall() {
    ctx.fillRect(obstacle1.x, obstacle1.y, 150, 100)
obstacle.y+= 2


  }
  function obstacleFall() {
  
    ctx.fillRect(200, y, 80, 10)
y+= 2

setInterval(function(){ obstacleFall() }, 3000)
  }
 

  window.requestAnimationFrame(drawCar)


  function draw() {
    var img = new Image();
    img.onload = function() { 
       ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 
    }
    img.src = "images/road.png";
  }
  draw()
obstacleFall()
 
}
drawCar() }




    
        










  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
       car.leftPressed();
        break;
      case 39: car.rightPressed(); break;
    }
  }