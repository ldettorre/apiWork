let request = new XMLHttpRequest();

function displayNicely(apiData) {
    let newData = JSON.parse(apiData);
    
    // let count = 1;
    // for (let i in newData) {
    //     count++;
    //     console.log(newData[i]);
    //     if (count == 9){
    //         break;
    //     }
    

     let htmlString = "<div><strong> Name:</strong>" + newData.name + "</div>" 
     + "<div><strong> Height:</strong>" + newData.height + "</div>" 
     + "<div><strong> Mass:</strong>" + newData.mass + "</div>"
     + "<div><strong> Hair color: </strong>" + newData.hair_color + "</div>"
     + "<div><strong> Skin color: </strong>" + newData.skin_color + "</div>"
     + "<div><strong> Eye color: </strong>" + newData.eye_color + "</div>"
       document.getElementById("data").innerHTML = htmlString;

}
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayNicely(this.responseText);
    }
}

request.open("GET", "https://swapi.co/api/people/1/")

request.send();
