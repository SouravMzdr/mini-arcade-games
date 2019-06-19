
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        
        //tiles
        var scale = 20;
        var rows = canvas.height/scale;
        var collums = canvas.width/scale;


        //fruit

        fY = Math.floor(Math.random()*rows+1)*scale;
        fX = Math.floor(Math.random()*collums+1)*scale;
        
        //score
        var score =0;
        var ele=document.getElementById('score_card');

        
        //initial position of the snake
        sX = 0;
        sY = 0;
        sTail=[];
        length=5;

        //movement of the snake
        var Vx = 0;
        var Vy = 0;

        var upPressed=false;
        var downPressed=false;
        var righPressed=false;
        var leftPressed=false;

        document.addEventListener('keydown', keyDownHandler,false);
            function keyDownHandler(event){
                switch(event.keyCode){
                    case 37:
                        Vx=-scale;Vy=0;
                    break;
                    case 38:
                        Vx=0;Vy=-scale;
                    break;
                    case 39:
                        Vx=scale;Vy=0;
                    break;
                    case 40:
                     Vx=0;Vy=scale;
                    break;
                }
            }

           

        function drawFruit(){

            if (fX == canvas.width || fY == canvas.height){
                fY = Math.floor(Math.random()*rows+1)*scale;
                fX = Math.floor(Math.random()*collums+1)*scale;
            }
            ctx.fillStyle = "red";
            ctx.fillRect(fX,fY,scale-1,scale-1);

        }
        
        function drawSnake(){
            ctx.fillStyle = "green";
            for (var i=0 ;i<sTail.length; i++){
                ctx.fillRect(sTail[i].x,sTail[i].y, scale-1, scale-1);
            }
            for (var i=1 ;i<sTail.length; i++){
                if (sTail[i].x == sX && sTail[i].y== sY){
                    alert("Game over!!Your score is :"+ score);
                    document.location.reload();
                }
            }               
            sTail.pop();
            sTail.unshift({x:sX, y:sY});

            // ctx.fillStyle = "yellow";
           
        }


        function eaten(){
        fY = Math.floor(Math.random()*rows)*scale;
        fX = Math.floor(Math.random()*collums)*scale;
        sTail.unshift({x:sX, y:sY})
        score ++;
        ele.innerHTML = "Score: " + score;


        }

        function draw(){

            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        
            drawFruit();
            drawSnake();
            
            //Move snake
            sX += Vx;
            sY += Vy;
            
           
            //collision detection

            if (sX >=canvas.width){
                sX = 0;
            }
            else if (sX < 0){
                sX = canvas.width;
            }
            else if (sY < 0){
                sY = canvas.height;
            }
            else if (sY >=canvas.height){
                sY = 0;
            }
            
            //Food eaten
            if (sX == fX && sY == fY){
                eaten();
            }
        }
        // requestAnimationFrame(draw);
        setInterval(draw,1000/8);
   