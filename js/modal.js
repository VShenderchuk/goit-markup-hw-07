/*Fixed header*/
    
      /*
        const { height: pageHeaderHeight } = document
        .querySelector('*.page-header*') 
        .getBoundingClientRect();
        document.body.style.paddingTop = '${pageHeaderHeight}px';
*/

/*Script popup*/
 
const refs = {
  openModalBtn: document.querySelector('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-modal]'),

  

  
};


refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

refs.backdrop.addEventListener('click', logBackdropClick);

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
 
}


function logBackdropClick() {
  console.log('Это клик в бекдроп');
}