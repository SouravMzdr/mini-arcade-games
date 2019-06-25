<?php
    require 'header.html'
?>
   
    <div class="wrapper">
        <canvas id="myCanvas" width="580" height="420"></canvas>
    </div>
    <div id="score_card" style="
        position: fixed;
        top:65%;
        color: aliceblue;
        left: 45%;
        font-size: 50px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;     
    ">
        Score
    </div>
    <div class="controls" style="
         position: fixed;
        top:80%;
        color: aliceblue;
        left: 30%;
        font-size: 2.5vw;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;     
    ">
        USE ARROW KEYS FOR MOVEMENT
    </div>
    
    <script type="text/javascript" src="./js/snake.js"></script>
<?php
    require 'footer.html'
?>
   