function head(){

    const header = document.getElementById('header')
    
    header.innerHTML = `<section class="homebg">
    <img class="imagebg" src="Image/cover.svg" />
    
    <section class="header1">
      <div class="logo">
        <img src="Image/logo1.svg" />
      </div>
      <div class="cont1">
        <h2>
          We Won’t Stop Until We Win/For Consulations
          <img class="ic1" src="Image/Call2.svg" />+251 911 58 1616
        </h2>
    
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="whyyeshiwas.html">Why Yeshiwas?</a></li>
          <li><a href="Practice.html">Practice Areas</a></li>
          <li><a href="team.html">Our Team</a></li>
          <li><a href="Contactus.html">Contact Us</a></li>
        </ul>
      </div>`
}

export {head}