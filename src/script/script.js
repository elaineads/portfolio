const btnMenu = document.querySelector('.btn_menu')
const sidebar = document.querySelector('.sidebar')

/* adicionando evento ao botão */
btnMenu.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar_ativa') /* toggle alterna a visualiação */ 
})