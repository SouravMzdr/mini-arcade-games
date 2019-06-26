<?php
    require 'header.html'
?>
    <div class="wrapper">
        <canvas id="myCanvas" width="580" height="420"></canvas>
    </div>
    
    <div class="container_start">
    <div id="start" onclick="draw();this.style.visibility= 'hidden';">
    <button type="button" id='start_button'>Start</button>
    </div>
    </div>

    <div class="controls">
    USE W / S and UP / DOWN ARROW KEYS FOR MOVEMENT.
    </div>

    <script type="text/javascript" src="./js/pong.js"></script>
<?php
    require 'footer.html'
?>

   