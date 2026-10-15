const message = document.getElementById("message")
const Button = document.getElementById("loadBtn")
const Button1 = document.getElementById("clickBtn")

const profile = document.getElementById("profile");
const grades = document.getElementById("grades");
const schedule = document.getElementById("schedule");

Button1.addEventListener(
    "click", function(){
        loadBtn.style.backgroundColor="beige"
        clickBtn.style.backgroundColor="beige"
    }
)

Button.addEventListener(
    "click", function(){
        loadBtn.style.backgroundColor="pink"
        clickBtn.style.backgroundColor="pink"
    }
)

function showMessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Checking....")
        },1000)
    })
}

Button.addEventListener("click", function(){
    message.innerHTML = "Loading..."
    message.style.color="red"

    showMessage()

    .then(function(result){
        message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading Profile...")
            },1000)
        })

        .then(function(result){
            message.innerHTML = result

            return new Promise(function(resolve){
                setTimeout(function(result){
                    resolve("Welcome!")
                },1000)
            })
        })

        .then(function(result){
            message.innerHTML = result
        })
    })
})

Button1.addEventListener("click", function(){

    message.innerHTML = "Loading Dashboard...";

    profile.innerHTML = "Making Matcha: Waiting...";
    grades.innerHTML = "Making Matcha: Waiting...";
    schedule.innerHTML = "Making Matcha: Waiting...";

    const profilePromise = new Promise(function(resolve){
        setTimeout(function(){

            profile.innerHTML = "Making Matcha: Whisking";

            resolve();
        }, 1000);
    });

    const gradesPromise = new Promise(function(resolve){
        setTimeout(function(){

            grades.innerHTML = "Making Matcha: Pouring Milk";

            resolve();
        }, 2000);
    });

    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){

            schedule.innerHTML = "Making Matcha: Your Matcha is Doneee";

            resolve();
        }, 3000);
    });

    Promise.all([profilePromise, gradesPromise, schedulePromise])

    .then(function(result){

        message.innerHTML = "Your Matcha is Ready!";
    });
})