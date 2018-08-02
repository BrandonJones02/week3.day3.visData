// let nameBox = document.getElementById("name");

// let title = users.results[0].name.title;
// let first_name = users.results[0].name.first;
// let last_name = users.results[0].name.last;

// let imageURL = users.results[i].picture.large;

// // nameBox.innerHTML = title +" "+ first_name + " " + last_name; 

// let imageElement = document.createElement("img");

// imageElement.src = imageURL;

// profile.appendChild(imageElement);

// let email = users.results[1].email;
// console.log(email);
// // nameBox.innerHTML = email;

for(let i=0; i<users.results.length; i++){
   
    let title = users.results[i].name.title;
    let first_name = users.results[i].name.first;
    let last_name = users.results[i].name.last;
    let imageURL = users.results[i].picture.large
    let age = users.results[i].dob.age;

    let profile = document.createElement("div");
    profile.className = "profile";

    let nameElement = document.createElement("div");
    profile.className = "name";

    let ageElement = document.createElement("div");
    profile.className = "age";

    let imageElement = document.createElement("img");
    profile.className = "pic";

    imageElement.src = imageURL;
    
    nameElement.innerHTML = "<b>" + first_name + " " + last_name + `(${age})` + "</b>";
    
    nameElement.innerHTML 

    profile.appendChild(nameElement);
    profile.appendChild(ageElement);
    profile.appendChild(imageElement);

    document.body.appendChild(profile);


}
