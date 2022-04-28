const d = document,
    $containerFood = d.getElementById("container-food"),
    $containerSearch = d.getElementById("template-search"),
    inputSearch = d.getElementById("search-box"),
    $templateCard = d.getElementById("tamplate-cards").content,
    $fragment = d.createDocumentFragment();

d.addEventListener("DOMContentLoaded", e =>{
    fetchData()
});


const fetchData = async () =>{
    const res = await fetch("store.json");
    const data = await res.json();
    console.log(data)
    pintarCards(data);
};



const pintarCards = data =>{
    data.forEach(item =>{
        $templateCard.querySelector("img").src = item.thumbnailUrl;
        $templateCard.querySelector("img").alt = item.title;
        $templateCard.querySelector("h3").textContent = item.title;
        $templateCard.querySelector(".price").innerHTML = `$${item.precio}.00 <span>${item.descPrecio}.00</span>`;
        let $clone = d.importNode($templateCard, true);
        $fragment.appendChild($clone)
    })
    $containerFood.appendChild($fragment)
}



