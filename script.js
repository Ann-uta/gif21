function onSearch() {
    let out = '';
    let userRequest = document.querySelector("#userRequest").value;

    fetch("https://api.giphy.com/v1/gifs/search?api_key=nLFa4mMSmxf18GK4EjbWzeX98rxcNQ1U&q=" + userRequest +"&limit=5&offset=0&rating=g&lang=en")
    .then(response => response.json())
    .then ( result => {
        for (let d of result.data){
            out += `<img src='${d.images.original.url}'><br>`;
            }
        console.log(out);
        document.querySelector(".out").innerHTML = out;
        });    
}