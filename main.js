let i = 0;
let images = ['/images/jumpingover.jpg','/images/jumpingover2.jpg','/images/jumpingover3.jpg','/images/theboys.jpg'];
let time = 4000;

// Change image

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++
    }
        else{
            i = 0;
        }
    
    setTimeout(changeImg,time);
}

window.addEventListener('load', changeImg);

///////////////////////////////////////////////////////

const lupinha = document.getElementById('magnifyingGlass');

let searchBar = document.getElementById('searchBar');

lupinha.addEventListener('click',()=>{
    searchBar.classList.toggle('noDisplay')
})
