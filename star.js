let wrapper = document.querySelector(".wrapper");





fetch("https://fake-movie-database-api.herokuapp.com/api?s=Star")
.then((res) => res.json())
.then((Star) => 

        Star.Search.forEach(element => {
            console.log(element);
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