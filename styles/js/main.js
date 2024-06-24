$(function () {
    $('.menu-mobile-limit').on('click', function () {
        $('.menu-mobile-list').toggleClass('ds_none');
        $(this).toggleClass('menu-mobile-limit_active');
    });
});

// ////////////////////////////////////////////////////////////////////////

// window.addEventListener("scroll", function () {
//     let header = document.querySelector('.header-top')
//     header.classList.toggle('rolagem', window.scrollY > 0)
// })

// //////////////////////////////////////////////////////////////////////////

const nav = document.querySelector('.header-top');
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', ()=>{
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos < currentScrollPos){
        nav.classList.add('hide');
    }else {
        nav.classList.remove('hide');
    }
    prevScrollpos = currentScrollPos;
})


// ///////////////////////////////////////////////////////////////////////////


function fazerChamada() {
    // Substitua "123456789" pelo número de telefone desejado
    var numeroTelefone = "874000778";

    // Utiliza a API tel: para iniciar a chamada telefônica
    window.location.href = "tel:" + numeroTelefone;
}


///////////////////////////////////////////////////////////// dialog ////////////////////////////////////////////

const button = document.querySelector(".btn")
// const button2 = document.querySelector(".paragraph > #pop")
const modal = document.querySelector("dialog")
const close = document.querySelector(".fa-xmark")

// modal.addEventListener('click', event => event.stopPropagation())

button.onclick = function () {
    modal.showModal()
}
// button2.onclick = function () {
//     modal.showModal()
// }

close.onclick =function () {
    modal.close()
}

/////////////////////////////////////////////////// midar imagem/////////////////////////////////////////
document.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var image = document.querySelector('.scroll-image');

    // Ajuste o valor conforme necessário para ativar o efeito na posição desejada
    if (scrollTop > 500) {
        image.style.opacity = 0; // Defina a opacidade desejada quando a imagem não deve ser visível
    } else {
        image.style.opacity = 1; // Defina a opacidade desejada quando a imagem deve ser visível
    }
});
