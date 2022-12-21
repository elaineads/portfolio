const btnMenu = document.querySelector('.btn_menu');
const sidebar = document.querySelector('.sidebar');

/* adicionando evento ao botão */
btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('active');
    sidebar.classList.toggle('active'); /* toggle alterna a visualiação */ 
});