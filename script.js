function onSearch() {
let userRequest = document.getElementById("userRequest").value;
//let out = '';
fetch("https://api.giphy.com/v1/gifs/search?api_key=nLFa4mMSmxf18GK4EjbWzeX98rxcNQ1U&q=" + userRequest +"&limit=5&offset=0&rating=g&lang=en")
.then(response => response.json())
.then ( result => {
    /*  console.log(result.data[3].images.original.url)
        //return result.data; 
    for (let d of result.data){
        out += `<img src='${result.data[d].images.original.url}'><br>`;
        }
    document.getElementsByClassName("out").innerHTML = out;
    });*/
    
    document.getElementById("gif").src = result.data[1].images.original.url;})
    
    
}


