window.addEventListener('scroll', onScroll)

function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSession(home)
    activateMenuAtCurrentSession(services)
    activateMenuAtCurrentSession(about)
    activateMenuAtCurrentSession(contact)
}

function  activateMenuAtCurrentSession(section){
    //linha alvo 
    const targetLine = scrollY + innerHeight / 2;


    // pode pegar o ID de um tag HTML apenas com o nome id=home === home (no JS)

    //verificar se  a seção passou da linha topo
    //topo da seção
    const sectionTop = section.offsetTop;
    //altura da seção
    const sectionHeight = section.offsetHeight;

    //o topo da seção chegou ou ultrapassou a linha alvo
    const  sectionTopReachOrPassedTargetLine =  targetLine >= sectionTop;

    //verificar se  a base está a baixo da linha balvo

    //a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight;

    //o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

    //limites da seção
    const sectionBourdaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;


    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[hrer*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBourdaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll(){
    if (scrollY > 0){
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
    if (scrollY > 400){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}


function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    }).reveal(`
        #home,
        #home img, 
        #home .stats,
        #services, 
        #services header, 
        #services .card,
        #about,
        #about header,
        #about .content`)

