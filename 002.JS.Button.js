
<input type="text" id="inp">
<button onclick="display()">click me</button>
<h1 id="display-head">Dhanush ch</h1>

<script>
	function display(){
    var text=document.getElementById("inp").value
    document.getElementById("display-head").innerHTML=text
    }
    
 </script>
