const fetchTvShows = async (search) => {
    const shows = await fetch('http://api.tvmaze.com/search/shows?q=' + search)
        .then((response) => response.json());

    console.log('....', shows);

    return shows;
}

const renderShows = (shows) => {
    const resultsDiv = document.getElementById('shows-results');
    resultsDiv.innerHTML = '';

    console.log (shows);

    shows.forEach((show) => {
        const li = document.createElement('li')
        li.innerHTML = `${show.score} - ${show.show.name}`;
    })
}

window.onload = () => {
    const buttonElement = document.getElementById('shows-submit');
    
    buttonElement.onclick =  () => {
        const inputELement = document.getElementById('search-tv-maze');
        const search = inputELement.value;
        
        console.log('search///', search);
    
        fetchTvShows(search).then(showResults => renderShows(showResults));
    }
}