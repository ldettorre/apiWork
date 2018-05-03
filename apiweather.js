let request = new XMLHttpRequest();

function displayNicely(apiData) {
    let newData = JSON.parse(apiData);
console.log(newData);


    let htmlString = "<div><strong>City:</strong>" + newData.name + "</div>" +
        "<div><strong>Current Weather: </strong>" + newData.weather[0].main + "</div>" + "<div><strong>Temperature in Celcius:</strong>" + (newData.main.temp -273.15).toFixed(2) + "C</div>";
    document.getElementById("data").innerHTML = htmlString;
}





function submitCity() {
    let city =document.getElementById("cityForm")["city"].value;
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=6ebea87dfc131fd5402906ce4b098ab8")

    request.send();
    return false;

}


request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayNicely(this.responseText);
    }
    if (this.readyState == 4 && this.status == 404) {
        document.getElementById("data").innerHTML = "<strong>City not found.Please try again!</strong>";
    }

    // request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Cork&APPID=6ebea87dfc131fd5402906ce4b098ab8")

    // request.send();
}
