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