window.onload= function(){
    let show = document.getElementById('menu')
    show.addEventListener('click',function(){
    let showbar = document.getElementById('sidebar')
    let heading = document.getElementById('heading')
    if(showbar.style.display == 'none'){
    showbar.style.display = 'block'
    heading.style.height = '900px'
    }else{
         showbar.style.display = 'none'
         heading.style.height = '250px'
    }
})
}