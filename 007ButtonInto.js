<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="show()"> Click me </button> <br><br>

    <input type="text" id="inp">
    <button onclick="display()">click me</button>
    <h1 id="display-head"></h1>
    <script>

        function display(){
            var text=document.getElementById("inp").value
            document.getElementById("display-head").innerHTML=text

            if (text=="Dhanush"){
                alert("He is a nice guy.")
            }
            }
        function show(){
            console.log("Button Clicked")
            var a=17;
            var b=3;
            var sum=a+b;
            console.log("Sum="+sum);

            var c=4;
            var c=6;
            console.log(c);

            let d=7;
             // let d=11; it generates error
             d=11

             console.log(d);

             const e=10;
             // e=11; it generates error
            

            if(e%2==0){
                console.log("Number is even")
            }else{
                console.log("Number is odd")
            }

            for (var i=0;i<10;i++){
                console.log(i)
            }

            var arr=["Apple","Orange","Mango",17]
            console.log(arr)
            console.log(arr[1])

            var person={
                Name:"Dhanush CH",
                Age:"17",
                Place:"Kannur"
            }
            console.log(person)
            console.log(person.Name)

            var person=[{
                Name:"Dhanush CH",
                Age:"17",
                Place:"Kannur"
            },{
                Name:"CH",
                Age:"19",
                Place:"chKannur"
            }]

            console.log(person)
            console.log(person.Name)
            
        }
    </script>
</body>
</html>
