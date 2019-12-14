

// http://api.weatherstack.com/current?access_key=d289ef262a03b3990ccf4c237c89867b&query=Toronto

let dropDownList = document.getElementById("city");

dropDownList.addEventListener("change",function(){
    const endPoint 
    = `http://api.weatherstack.com/current?access_key=
    d289ef262a03b3990ccf4c237c89867b&query=${dropDownList.value}`;

    fetch(endPoint)
    .then(function(res){
    res.json()
    .then(function(data){
        alert(data.current.temperature);
    })
    })
})