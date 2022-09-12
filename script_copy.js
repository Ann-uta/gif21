let userRequest = document.querySelector("#userRequest");

async function onSearch() {
    let out = '';
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=nLFa4mMSmxf18GK4EjbWzeX98rxcNQ1U&q=" + userRequest.value +"&limit=5&offset=0&rating=g&lang=en");
    const result = await response.json();
    for (let d of result.data){
        out += `<img src='${d.images.original.url}'><br>`;
        }        
    console.log(out);
    try {
        if (out == ''){
            throw new Error ("Ничего не найдено")
        }else {
        document.querySelector(".out").innerHTML = out;
        }        
    } catch (error) {
        document.querySelector(".out").innerHTML = "Данные некорректны: " +error.message;
    }
    finally {
    userRequest.value = '';
    }
};

