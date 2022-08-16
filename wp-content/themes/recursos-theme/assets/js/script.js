const menu = document.querySelector(".nav__menu-icon"); //icono del menu desplegable
const mainMenu = document.querySelector(".menu-bar"); 
const exitMenu = document.querySelector(".menu__close");
const subMenu = document.querySelectorAll(".menu-bar .sub-menu");
const menuPrincipal = 
    document.querySelector(".menu__principal");
const menuOptions =
    document.querySelectorAll(".menu__option > li");
const principalOptions=
    document.querySelectorAll(".menu__principal > li");
const body = document.querySelector("body");
const nav = document.querySelectorAll("nav > img");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
const navigate = document.querySelector("nav");
const sugerenciaBtn = document.querySelector(".sugerencia__boton");
const sugerencia = document.querySelector("#sugerencias_form");
const sugerenciaClose = document.querySelector(".sugerencia__close");


/**Media queries**/

const mediaQuery = window.matchMedia('(min-width: 768px)');

const mqTablet = window.matchMedia('(min-width: 769px) and (max-width: 1070px)');


const openMenu = (event) => {
    nav[0].classList.add("ocult");
    nav[1].classList.add("ocult");
    main.classList.add("ocult");
    footer.classList.add("ocult");
    mainMenu.classList.remove('ocult');
    //header.classList.add("ocult");
    navigate.style.background="none";
    setTimeout(() => mainMenu.classList.add('anim-menu'), 100);
}


const openMenuTablet = (event) => {
    mainMenu.classList.remove('ocult');
    navigate.style.background="none";
    nav[0].classList.remove('ocult');
    nav[1].classList.remove('ocult');
    main.classList.remove('ocult');
    footer.classList.remove('ocult');
    setTimeout(() => mainMenu.classList.add('anim-menu'), 100);
}

const closeMenu = (event) => {
    nav[0].classList.remove('ocult');
    nav[1].classList.remove('ocult');
    main.classList.remove('ocult');
    //header.classList.remove('ocult');
    footer.classList.remove('ocult');
    mainMenu.classList.add("ocult");
    //navigate.style.background="var(--bgColor-nav)";
    navigate.style.background="var(--header-transparent)";
    mainMenu.classList.remove('anim-menu');
}

const ocultSubMenu = () => {
    subMenu.forEach((option) => {
        option.classList.add('ocult');
        option.classList.remove('anim-open');
    });

    //subMenu.classList.remove('anim-open');
    
}

const showSubMenu = () => {
    subMenu.forEach((option) => {
        setTimeout(() => option.classList.remove('ocult'),100);
    });
}

const displaySubItems = (option) => {
    const lista = option.querySelector('ul');
    if (lista != null) {
        if (lista.classList.contains('ocult'))
            showSubMenu(); // quita la clase ocult
        else
            ocultSubMenu(); //agrega clase ocult
    }
}

const addClickOptions = () => {
    menuOptions.forEach((option) => {
        option.addEventListener(
            "click",
            () => displaySubItems(option)
        );
    });
}

const addHoverOptions = () => {
    principalOptions.forEach((option)=>{
        option.classList.add('subitem__principal');
        const lista = option.querySelector('ul');
        if(lista != null){
            lista.classList.add("subitem__secondary");
        }
    });
}

function handleLaptopChange(e) {
    console.log("laptop: "+e.matches);
    if (e.matches) {
        menuPrincipal.parentElement.style=`
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            background: var(--menu-principal-color);
            backdrop-filter: blur(2px);`;
        nav[0].classList.remove('ocult');
        nav[1].classList.remove('ocult');
        main.classList.remove('ocult');
        //header.classList.remove('ocult');
        footer.classList.remove('ocult');
        //navigate.style.background="var(--bgColor-nav)";
        navigate.style.background="var(--header-transparent)";
        menu.classList.add('ocult');
        mainMenu.classList.add('ocult');
    }
    else{
        menuPrincipal.parentElement.style=`
            display: none;
            backdrop-filter: blur(2px);`;
        mainMenu.style=`
            width:100vw;`;
        menu.classList.remove('ocult');
    }
}

function handleTabletChange(e){
    console.log("tablet: "+e.matches);
    if (e.matches) {
        menu.removeEventListener('click',openMenu);
        menu.addEventListener('click', openMenuTablet);
        menuPrincipal.parentElement.style=`
            display: none;
            backdrop-filter: blur(2px);
            position:relative;`;
        mainMenu.style=`
            width:40vw;
            position: absolute;`;
        menu.classList.remove('ocult');
        nav[0].classList.remove('ocult');
        nav[1].classList.remove('ocult');
        main.classList.remove('ocult');
        //header.classList.remove('ocult');
        footer.classList.remove('ocult');
        //navigate.style.background="var(--bgColor-nav)";
        navigate.style.background="var(--header-transparent)";
        console.log("open menu tablet");
    }
    else{
        console.log("open menu");
        menu.removeEventListener('click',openMenuTablet);
        menu.addEventListener('click', openMenu);
        handleLaptopChange(mediaQuery);
    }
}

function abrirSugerencia(){
    setTimeout(() => sugerencia.style=`
        display: block;
    `
    ,100);
}

function cerrarSugerencia(){
    setTimeout(() => sugerencia.style=`
        display: none;
    `
    ,100);
}


/* ¡Importante! */
/* El siguiente codigo sirve para que los eventos se agreguen
    una vez que todas las etiquetas html han sido cargas
    en el DOM 
*/
document.addEventListener("DOMContentLoaded", function (event) {
    ocultSubMenu();
    //menu.addEventListener('click', openMenu);
    exitMenu.addEventListener('click', closeMenu);
    mediaQuery.addEventListener('change',handleLaptopChange);
    mqTablet.addEventListener('change',handleTabletChange);
    handleLaptopChange(mediaQuery);
    handleTabletChange(mqTablet);
    addClickOptions();
    addHoverOptions();
    sugerenciaBtn.addEventListener('click',abrirSugerencia);
    sugerenciaClose.addEventListener('click',cerrarSugerencia);
    if(header!= null){
        document.querySelectorAll(".subitem__secondary")
        .forEach( tag  => tag.style="background-color: var(--subitem-principal-color);");
    }else{
        document.querySelectorAll(".subitem__secondary")
        .forEach( tag  => tag.style="background-color: #fffdd6;");
    }
});

document.addEventListener('scroll', (e)=>{
    if(header!= null){
        if(window.scrollY>=header.offsetHeight){
            navigate.style=`background-color: white;
            backdrop-filter: blur(2px);`;
            document.querySelectorAll(".subitem__secondary")
                .forEach( tag  => tag.style="background-color: #fffdd6;");
        }
        else{
            navigate.style=`background:var(--header-transparent)
            backdrop-filter: blur(2px);`;
            document.querySelectorAll(".subitem__secondary")
            .forEach( tag  => tag.style="background-color: var(--subitem-principal-color);");
        }
    }else{
        navigate.style=`background-color: white;
        backdrop-filter: blur(2px);`;
        document.querySelectorAll(".subitem__secondary")
        .forEach( tag  => tag.style="background-color: #fffdd6;");
    }
});



