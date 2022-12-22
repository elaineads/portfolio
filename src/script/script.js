const btnMenu = document.querySelector('.btn_menu');
const sidebar = document.querySelector('.sidebar');
const pagina = document.querySelector('.container')

/* adicionando evento ao botão */
btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('active'); /* toggle alterna a visualiação */ 
    sidebar.classList.toggle('active');
    pagina.classList.toggle('active'); 
});