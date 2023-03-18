const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");


function openModal(){
    //code
    console.log('open modal');
    modal.classList.add('active');
    overlay.classList.add('overlayactive')
}

function closeModal(){
    //code
    console.log('close modal');
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive')
}