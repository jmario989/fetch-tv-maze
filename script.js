const fetchTvShows = async (search) => {
    const shows = await fetch('http://api.tvmaze.com/search/shows?q=' + search)
        .then((response) => response.json());

    console.log('....', shows);

    return shows;
}

const renderShows = (shows) => {
    const resultsDiv = document.getElementById('shows-results');
    resultsDiv.innerHTML = '';

    shows.forEach((show) => {
        const li = document.createElement('li')
        li.innerHTML = show.score + ' - ' + show.show.name;

        resultsDiv.appendChild(li);
    })
}

window.onload = () => {
    const buttonElement = document.getElementById('shows-submit');
    
    buttonElement.onclick = async (evt) => {
        const inputELement = document.getElementById('search-tv-maze');
        const search = inputELement.value;
        
        console.log('search///', search);
    
        const showResults = await fetchTvShows(search);
    
        console.log('results...', showResults)
        renderShows(showResults);
    }
}