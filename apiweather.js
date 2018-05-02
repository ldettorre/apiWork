let request = new XMLHttpRequest();

function displayNicely(apiData) {
    let newData = JSON.parse(apiData);




    let htmlString = "<div><strong>City:</strong>" + newData.name + "</div>"
     + "<div><strong>Current Weather: </strong>" + newData.weather[0].description + "</div>";
    document.getElementById("data").innerHTML = htmlString
}
    

   
   
   
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            displayNicely(this.responseText);
        }
    }


    
    
    


request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Dublin&APPID=6ebea87dfc131fd5402906ce4b098ab8")

request.send();
