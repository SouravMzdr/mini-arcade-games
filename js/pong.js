var canvas = document.getElementById("myCanvas");
                var ctx = canvas.getContext("2d");
                var grd = ctx
    
                var x = canvas.width/2;
                var y = canvas.height/2;
                var ballRadius = 10;

                var dx = 2;
                var dy = 2;

                var paddleHeight = 10;
                var paddleWidth = 75;
                var paddle1Y = (canvas.height-paddleWidth)/2;
                var paddle2Y = (canvas.height-paddleWidth)/2;


                var paddleDy =7;
                
                var rightPressed;
                var leftPressed;
                var aPressed;
                var dPressed;

                document.addEventListener('keydown', keyDownHandler,false);
                document.addEventListener('keyup', keyUpHandler,false);

                function keyDownHandler(event){
                    switch(event.keyCode){
                        case 37:
                            leftPressed = true;
                            break;
                        case 39:
                            rightPressed = true;
                            break;
                        case 65:
                            console.log("65");
                            aPressed = true;
                            break;
                        case 68:
                            dPressed = true;
                            break;
                    }
                }
                function keyUpHandler(event){
                    switch(event.keyCode){
                        case 37:
                            leftPressed = false;
                            break;
                        case 39:
                            rightPressed = false;
                            break;
                        case 65:
                            aPressed = false;
                              break;
                        case 68:
                            dPressed = false;
                            break;
                    }
                }

                function drawBall(){
                    ctx.beginPath();
                    ctx.arc(x ,y, ballRadius, 0, Math.PI*2);
                    ctx.fillStyle = "blue";
                    ctx.fill();
                    ctx.closePath();
                }

                function drawPadde(){
                    //draw paddle 1
                    ctx.fillStyle = "red";
                    ctx.fillRect(canvas.width - paddleHeight,paddle1Y , paddleHeight,paddleWidth);
                    //draw paddle 2
                    ctx.fillStyle = "yellow";
                    ctx.fillRect(0,paddle2Y , paddleHeight,paddleWidth);

     
                }
    
                function draw(){
                    
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    drawBall();
                    drawPadde();

                    //collision detection

                    //for paddle 2
                    if (y +dy > canvas.height - ballRadius  || y +dy < ballRadius  ){ 
                        dy = -dy;
                    }

                    if (
                        x+dx < paddleHeight + ballRadius &&
                        y+dy > paddle2Y &&
                        y+dy < paddle2Y + paddleWidth
                        
                    ){ dx=1.3*dx;
                        dx = -dx;
                    }

                    //for paddle 1
                    if (
                        x+dx > canvas.width - (paddleHeight + ballRadius) &&
                        y+dy > paddle1Y &&
                        y+dy < paddle1Y + paddleWidth
                        
                    ){ dx=1.3*dx;
                        dx = -dx;
                    }

                    //Game over condition
                    if( x + ballRadius< 0){
                        alert('Game over.Red Wins!!');
                        document.location.reload()
                    }
                    else if (x - ballRadius> canvas.width){
                        alert('Game over.Yellow Wins!!');
                        document.location.reload()
                    }
                    



                    //paddle movement 
                    //paddle 1
                    if(rightPressed && (paddle1Y + paddleWidth)< canvas.height ){
                        paddle1Y +=paddleDy;
                    }
                    else if(leftPressed && paddle1Y > 0){
 
                        paddle1Y -=paddleDy;
                    }

                    //paddle 2
                    if(dPressed && (paddle2Y + paddleWidth)< canvas.height ){
                        paddle2Y +=paddleDy;
                    }
                    else if(aPressed && paddle2Y > 0){
 
                        paddle2Y -=paddleDy;
                    }

                    //ball  movement
        
                    x +=dx;
                    y +=dy;

    
                    requestAnimationFrame(draw);
    
                }
    
                // requestAnimationFrame(draw);