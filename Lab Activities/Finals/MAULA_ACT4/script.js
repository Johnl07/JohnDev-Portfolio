const button = document.getElementById("loadBtn")
const result = document.getElementById("result")

button.addEventListener("click",function(){

    let request = new XMLHttpRequest()

    request.open("GET", "students.txt", true)

    request.onload = function(){
        result.innerHTML = request.responseText 
    }

    request.onreadystatechange = function(){
        console.log(request.readyState)
    }

    request.send()

})