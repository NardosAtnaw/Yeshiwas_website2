const client1 = document.querySelector('.client1')
const client2 = document.querySelector('.client2')

client1.addEventListener('mouseover', () =>{
  client1.setAttribute('src','./Image/client3.svg')
})
client1.addEventListener('mouseleave', () =>{
    client1.setAttribute('src','./Image/client1.svg')
  })

  client2.addEventListener('mouseover', () =>{
    client2.setAttribute('src','./Image/clients4.svg')
  })
  client2.addEventListener('mouseleave', () =>{
      client2.setAttribute('src','./Image/clients2.svg')
    })



window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav')
  const navHeight = nav.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > navHeight){
    
    nav.classList.add('fixed')
  }else{
    nav.classList.remove('fixed')
  }
})

const menu = document.querySelector('.menu')
const sidenav = document.querySelector('.home-cont')
const close = document.querySelector('.close-btn')
menu.addEventListener('click', () =>{
  sidenav.classList.add('show-nav')
  console.log("clicked");
})
close.addEventListener('click',() =>{
  sidenav.classList.remove('show-nav')
})