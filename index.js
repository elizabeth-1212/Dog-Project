async function main() {
    const dogs = await fetch("https://api.thedogapi.com/v1/images/search?has_breeds=true&limit=25&api_key=live_46jUtRQ0tvjuWjtXLgxENhXe42bjJ1StbjSuNNqHkeRnEN1zc2Fg9G6gklIyheDw");
    const dogsData = await dogs.json()   
        dogsData.map( dog => `<div class="search__container">
            <div class="breed-list">
            <div class="breed-card">
            <h1><b>Breed name</b></h1>
            <h4><b>Bred for:</b></h4>
            <h4><b>Life span:</b></h4>
            <h4><b>Temperament:</b></h4>
            <h4><b>Photo</b></h4>
            </div>
            </div>
            </div>`
        )
        .join("")

}

main();
