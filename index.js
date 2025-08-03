async function main() {
    const dogs = await fetch("https://api.thedogapi.com/v1/images/search?has_breeds=true&limit=25&api_key=live_46jUtRQ0tvjuWjtXLgxENhXe42bjJ1StbjSuNNqHkeRnEN1zc2Fg9G6gklIyheDw");
    const dogsData = await dogs.json()
    console.log (dogsData.breeds);
}

main();
