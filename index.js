// Add your code here
const addUser = {
    name : "Morris",
    email : "lordish@gmail.com",
    hobby : "coding"
}


const addObject = {
    method : "POST",
    headers : {
        "Content-Type" : "application/json",
        Accept : "application/json",
    },
    body : JSON.stringify(addUser),
};

fetch('http://localhost:3000/users',addObject)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    alert("Hey There is Something You left out")
    console.log(error.message);
});

const addAnother = {
    name : "Ian",
    email : "karolshaw@gmail.com",
    hobby : "power_naps"
}

const addNewObj = {
    method : "POST",
    headers : {
        "Content-Type" : "application/json",
        Accept : "application/json",
    },
    body : JSON.stringify(addAnother),
};

fetch ('http://localhost:3000/users', addAnother)
.then(function(response){
    response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    alert("We messed Up A lil bit!!")
    console.log(error.message)
});

const addRobot = {
    robotName : "C8-09S204K",
    robotType : "Machine Learner"
}

const addRobotObj = {
    method : "POST",
    headers : {
        "Content-Type" : "application/json",
        Accept : "application/json",
    },
    body : JSON.stringify(addRobot),
};

fetch('http://localhost:3000/robots', addRobotObj)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    alert("Error!!")
    console.log(error.message)
})