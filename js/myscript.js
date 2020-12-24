$(document).ready(function() {
    let movies = JSON.parse(mycinema); // convert json from string to object


    function addMovie(movies) {
        for (let i = 0; i < movies.length; i++) {
            let movie = "";
            if (i === 0) {
                movie = `
        <div class="tab-pane fade show active" id="v-pills-movie_${i+1}" role="tabpanel" aria-labelledby="v-pills-movie_${i+1}-tab">    
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${movies[i].image}" class="card-img-top">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="card-title">Title: ${movies[i].title}</h3>
                            <p class="card-text my-3">Description: ${movies[i].description}</p>
                            <p class="card-text">Actors: ${movies[i].actors}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
            } else {
                movie = `
    <div class="tab-pane fade" id="v-pills-movie_${i+1}" role="tabpanel" aria-labelledby="v-pills-movie_${i+1}-tab">
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${movies[i].image}" class="card-img-top">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">Title: ${movies[i].title}</h3>
                        <p class="card-text my-3">Description: ${movies[i].description}</p>
                        <p class="card-text">Actors: ${movies[i].actors}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
            }
            $("#v-pills-tabContent").append(movie);
        };
    }
    addMovie(movies);
});