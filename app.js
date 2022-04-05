let wrapper = document.querySelector(".wrapper");


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((users) =>  console.log(users))


fetch("https://fake-movie-database-api.herokuapp.com/api?s=batman")
.then((res) => res.json())
.then((users) => 

        users.Search.forEach(element => {
            // console.log(element);
            wrapper.innerHTML +=`
            <div class="card">
            <div class="img">
                <img src="${element.Poster   }" alt="">
            </div>
                <h2>${element.Title}</h2>
                <p>${element.Year}</p>
            </div>
            `;
        })
);

