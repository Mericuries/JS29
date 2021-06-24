fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        return data.json();
    })
    .then(data => {
        console.log(data);
        for (let value of data) {
            console.log(value.name);
            // let tagH1WithUsername = document.createElement(`<h1>${value.name}<h1>`);
           //document.getElementById('box').innerHTML += `<p class='userName'>${value.name}<p><span class'email'>${value.email}</span><h5 class'address'>${value.address.city}${value.campony}</h5>`;
           document.getElementById('box').innerHTML += `<p class='user'>${value.name}</p>`;
           document.getElementById('box2').innerHTML += `<p class='user'>${value.username}</p>`
           document.getElementById('box3').innerHTML += `<p class='user'>${value.email}</p>`
           document.getElementById('box4').innerHTML += `<p class='user'>${value.address.city}</p>`
           document.getElementById('box5').innerHTML += `<p class='user'>${value.address.street}</p>`
           document.getElementById('box6').innerHTML += `<p class='user'>${value.address.suite}</p>`
           document.getElementById('box7').innerHTML += `<p class='user'>${value.address.zipcode}</p>`
           document.getElementById('box8').innerHTML += `<p class='user'>${value.phone}</p>`
           document.getElementById('box9').innerHTML += `<p class='user>${value.website}</p>`

           
           
           
           
          
           

           
        }
    })









