
    Writing into an HTML element, using innerHTML.
    Writing into the HTML output using document.write().
    Writing into an alert box, using window.alert().
    Writing into the browser console, using console.log().

<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>
<p>My First Paragraph.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html> 
