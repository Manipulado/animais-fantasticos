function initTabNav(){
    const imgs = document.querySelectorAll('.js-tabmenu li');
    const paragrafos = document.querySelectorAll('.js-tabcontent section');
    paragrafos[0].classList.add('ativo');
    
    function ativaParagrafo(index){
        paragrafos.forEach(i => {
            i.classList.remove('ativo') // estou criando um loop em casa texto para não ficar com a classe ativo. 
        });
        paragrafos[index].classList.add('ativo'); // estou setando a classe "ativo" no paragrafo, na qual representa o index da imagem clicada. 
    }
    
    imgs.forEach((i, index) => {
        i.addEventListener('click', () => { //estou criando um loop em cada imagem para ter o evento de clique.
            ativaParagrafo(index) // estou ativando a função com um clique, passando o index da imagem para me retornar o paragrafo com tal index.
        });
    });
}


const accordionList = document.querySelectorAll('.js-accordion dt');

function activeAccordion(){
    this.classList.add('ativo');
    this.nextElementSibling.classList.add('ativo'); //pega o próximo item após o item que eu quis selecionar, nesse caso eu quis o DT, o próximo item após o DT é o DD que é a explicação.
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion); //Estou criando um loop para adicionar o evento de click em cada dt.
})



function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
    
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
    }
    
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}


function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                if(sectionTop < 0){
                    section.classList.add('ativo')
                }
            })
        }

        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}


initTabNav();
initScrollSuave();
initAnimacaoScroll();   