$(document).ready(function(){

    // button 1
    $("#btn1").click(function(){
        $("#title").text("Welcome to PDM")
        $("#status1").text("Change Title button Clicked")
    })

    $("#btn1").dblclick(function(){
        $("body").css("background", "black")
        $("#title").text("You Double Clicked")
    })

    $("#btn1").mouseenter(function(){
        $("#status1").text("your mouse entered the change title button")
    })

    $("#btn1").mouseleave(function(){
        $("#status1").text("your mouse left the change title button")
    })

    $("#btn1").mousedown(function(){
        $(this).css("background", "blue")
    })

    $("#btn1").mouseup(function(){
        $(this).css("background", "rgb(59, 59, 59)")
    })

    // button 2
    $("#btn2").click(function(){
        $(".innerCard").hide("slow")
        $("#status1").text("Profile hidden")
    })

    $("#btn2").mouseenter(function(){
        $("#status1").text("your mouse entered the hide profile button")
    })

    $("#btn2").mouseleave(function(){
        $("#status1").text("your mouse left the hide profile button")
    })

    $("#btn2").mousedown(function(){
        $(this).css("background", "blue")
    })

    $("#btn2").mouseup(function(){
        $(this).css("background", "rgb(59, 59, 59)")
    })


    // button 3
    $("#btn3").click(function(){
        $(".innerCard").show("slow")
        $("#status1").text("Profile Shown")
    })

    $("#btn3").mouseenter(function(){
        $("#status1").text("your mouse entered the show profile button")
    })

    $("#btn3").mouseleave(function(){
        $("#status1").text("your mouse left the show profile button")
    })

    $("#btn3").mousedown(function(){
        $(this).css("background", "blue")
    })

    $("#btn3").mouseup(function(){
        $(this).css("background", "rgb(59, 59, 59)")
    })

    // Select
    $("#course").change(function(){
        $("#status2").text($(this).val())
        $("#course1").text($(this).val())
    })

    // Button 4
    $("#btn4").click(function(){
        $("#status3").text("Odd Rows Highlighted")

        $("tr:odd").css("background", "lightblue")
        $("tr:even").css("background", "white")
    })

    // Button 5
    $("#btn5").click(function(){
        $("#status3").text("Even Rows Highlighted")

        $("tr:even").css("background", "lightblue")
        $("tr:odd").css("background", "white")
    })

    // Button 6
    $("#btn6").click(function(){
        $("#status3").text("Table hidden")

        $("#table").hide("slow")
    })

    // Button 7
    $("#btn7").click(function(){
        $("#status3").text("Table shown")

        $("#table").show(2000)
    })
})