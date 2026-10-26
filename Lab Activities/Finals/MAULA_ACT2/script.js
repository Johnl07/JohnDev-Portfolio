const LoadBtn = document.getElementById("LoadBtn")
const changeBtn = document.getElementById("changeBtn")

const Message = document.getElementById("Message")
const profile = document.getElementById("profile")
const grade = document.getElementById("grade")
const schedule = document.getElementById("schedule")

let i = 0

changeBtn.addEventListener("click",function(){
    if(i == 0){
        LoadBtn.style.backgroundColor = "white"
        changeBtn.style.backgroundColor = "white"

        LoadBtn.style.color = "rgb(130, 130, 255)"
        changeBtn.style.color = "rgb(130, 130, 255)"
        i = 1
    }else{
        LoadBtn.style.backgroundColor = "rgb(130, 130, 255)"
        changeBtn.style.backgroundColor = "rgb(130, 130, 255)"

        LoadBtn.style.color = "white"
        changeBtn.style.color = "white"
        i = 0
    }

})

function showMessage(){
    return new Promise(function(resolve){
        setTimeout(function(){

            resolve("Loading Assets...")
            
        },2000)
    })
}
LoadBtn.addEventListener("click",function(){
    Message.innerHTML = "Loading..."
    Message.style.color = "blue"

    showMessage()

    .then(function(result){
        Message.innerHTML = result
        Message.style.color = "green"

         return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading Images...")
            },2000)
         })
    })

    .then(function(result){
        Message.innerHTML = result
        Message.style.color = "red"

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Welcome!")
            },2000)
        })
     }) 

    .then(function(result){
        Message.innerHTML = result
        Message.style.color = "orange"
    })

})





changeBtn.addEventListener("click", function(){
    profile.innerHTML = "Profile: Waiting..."
    grade.innerHTML = "Grade: Waiting..."
    schedule.innerHTML = "Schedule: Waiting ..."

    const ProfilePromise = new Promise(function(resolve){
        
        setTimeout(function(){

            profile.innerHTML = "Profile Loaded!"

            resolve()

        },1000)

    })


    const GradePromise = new Promise(function(resolve){
        
        setTimeout(function(){

            grade.innerHTML = "Grade Loaded!"

            resolve()

        },2000)

    })


    const SchedulePromise = new Promise(function(resolve){
        
        setTimeout(function(){

            schedule.innerHTML = "Schedule Loaded!"

            resolve()

        },3000)

    })

    Promise.all([ProfilePromise,GradePromise,SchedulePromise])  
})