<?php
require 'header.html'
?>     
       
        <div class="text">
            Play Arcade Mini Games
        </div>

        <div class="container">
            <div class="snake" onclick="window.location.href ='snake.php'">
            </div>
            <div class="pong" onclick="window.location.href=' pong.php'">
            </div>
        </div>
        <div class="btn">
                <button onclick="window.location.href ='snake.php'">Play Snake</button>
                <button onclick="window.location.href=' pong.php'">Play Pong </button>    
        </div>

<?php

require 'footer.html'

?>