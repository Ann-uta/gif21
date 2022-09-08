   
async function onSearch() {
 let out = '';
let userRequest = document.getElementById("userRequest").value;
try {
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=nLFa4mMSmxf18GK4EjbWzeX98rxcNQ1U&q=" + userRequest +"&limit=5&offset=0&rating=g&lang=en");
    const result = await response.json();
    for (let d of result.data){
        out += `<img src='${d.images.original.url}'><br>`;  
        }
        document.querySelector(".out").innerHTML = out;
console.log(out);
//document.getElementById("gif").src = result.data[4].images.original.url;
        
} catch (error) {
    console.log(error);
}
};

