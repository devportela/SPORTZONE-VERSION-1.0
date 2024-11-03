let menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
   item.classList.remove('ativo')
    )
    this.classList.add('ativo')

}
menuItem.forEach((item)=>
     item.addEventListener('click',selectLink)
    )

    
    let btnExp = document.querySelector('#btn-exp')
    let menusite = document.querySelector('.menu-lateral')
    
    btnExp.addEventListener('click',function(){
       menusite.classList.toggle('expandir')
    })



