import React, { useEffect } from 'react';
import './services.css';
import './propos.css'

import creation from './img/creation-de-site-web-a-marrakech-maroc.png'
import design from './img/conception-graphique-design-graphique-marrakech.png'
import socmedia from './img/community-manager-marrakech-maroc-social-media-marketing.png'
import redaction from './img/copywriting-redaction-web-marrakech-maroc-agence.png'
import formation from './img/formation-professionnelle-marketing-digital-marrakech-maroc.png'
import imprimerie from './img/imprimerie-a-marrakech-maroc-impression.png'
import leads from './img/leads-generation-marrakech-maroc.png'
import photographie from './img/photographie-photographe-professionnel-marrakech-maroc.png'
import seo from './img/seo-referencement-de-site-web-marrakech-maroc.png'
import right from './img/play.png'


const Main = () => {
    useEffect(()=>{
        document.getElementById('more').addEventListener('click',()=>{
            console.log("s")
            let items=document.getElementsByClassName('services')[0];
           for (let i = 6; i <9; i++) {
            items.children[i].classList.toggle('hideitem')
                console.log(items.children[i])
           }
        })
        document.getElementById('l').addEventListener('click',(e)=>{ e.preventDefault(); document.getElementsByClassName('text')[0].classList.toggle('text_tg')})
    })

    return (
        <div>
          <div className='header_content'>
                 <div className='service'>
                   <div className='ser_title'>
                      <h3>Home maintenance made simple</h3>   
                      <p>The best technicians in your neighborhood</p>   
                   </div>
                      <a href="#">Book a Service</a>
                 </div>
            </div>

          <div className='ser_content'>
            <h3 className='center'>What are our services?</h3>
            <p className='center'>Find out what service we offer</p>
            <div className='services'>
                <div className='item'>
                    <img  src={creation} />
                     <p>Création de site web</p>
                </div>
                <div className='item'>
                    <img  src={design} />
                     <p>Création graphique</p>
                </div>
                <div className='item'>
                    <img  src={socmedia} />
                     <p>Social media marketing</p>
                </div>
                <div className='item'>
                    <img  src={redaction} />
                     <p>Copywriting</p>
                </div>
                <div className='item'>
                    <img  src={formation} />
                     <p>Formation</p>
                </div>
                <div className='item'>
                    <img  src={imprimerie} />
                     <p>Impression</p>
                </div>
                <div className='item hideitem'>
                    <img  src={leads} />
                     <p>generate de leads</p>
                </div>
                <div className='item hideitem'>
                    <img  src={photographie} />
                     <p>Photographie et video professionnel</p>
                </div>
                <div className='item hideitem'>
                    <img  src={seo} />
                     <p>SEO Référencement</p>
                </div>
            </div>
            <div id="more" className='moreser'>
                <a>More Services</a>
            </div>
          </div>

          <div className="apropos">
            <h1 className='titre'>Titre 1</h1>
          <div className='containertext'>
          <p className='text'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor luctus ante, et venenatis diam lobortis elementum. Maecenas mollis quam a mi volutpat ullamcorper. Nulla non erat vel sem pharetra pulvinar quis eu ligula. Donec ac elit nisi. Integer rhoncus tincidunt tortor ac imperdiet. Mauris ornare eros eget tortor efficitur egestas. Curabitur sed scelerisque orci. Curabitur auctor pretium urna euismod auctor. Cras at erat sit amet lacus porttitor mattis ut id dui. Proin leo urna, finibus et ante in, semper tincidunt dui. Quisque ac neque suscipit, luctus massa non, pharetra dolor. Donec viverra et elit eget feugiat. Donec fringilla ex metus, id vulputate massa egestas vel. Sed consequat elit ut consectetur varius. Quisque id mollis diam, sed sagittis lorem. Duis ut elementum quam.

Sed sit amet ex congue, lacinia dolor ut, viverra sapien. Nulla vel sem justo. Praesent ac dapibus arcu. Praesent et rutrum mauris, sit amet gravida ex. In eu tellus nunc. Pellentesque finibus nisl ut diam egestas, in posuere turpis pellentesque. Donec accumsan arcu et leo vehicula hendrerit sed ac odio. Integer ut feugiat orci. Cras nec tellus ut lorem pharetra facilisis in id mi. Pellentesque dui arcu, condimentum nec porttitor ut, viverra vel orci. Curabitur in vehicula eros. Phasellus faucibus ex purus, a pellentesque mi ullamcorper vel. Proin finibus urna a lacinia viverra. Quisque vitae leo auctor mauris mollis condimentum vel ac augue. Praesent dictum efficitur faucibus.

Vestibulum finibus, turpis aliquam suscipit finibus, felis lorem iaculis magna, posuere pellentesque odio arcu a lacus. Mauris mauris eros, facilisis at condimentum nec, tincidunt eget diam. Vestibulum euismod malesuada purus facilisis placerat. Duis scelerisque lectus vitae est maximus consectetur. Pellentesque sapien leo, pulvinar ut nisi in, fermentum sodales nisl. Curabitur ac neque nec nibh molestie condimentum. Aliquam congue convallis diam id tincidunt. Vestibulum tristique, est ac elementum faucibus, purus urna mattis nibh, nec iaculis sem lectus in ex. Nullam ullamcorper congue lorem, id maximus magna consectetur non. Integer pretium varius neque nec blandit. Praesent felis velit, pharetra non lobortis id, accumsan vel nibh. Ut gravida risus vitae tincidunt posuere. Sed aliquam dolor sed lacus imperdiet luctus.

Quisque consectetur dolor commodo porttitor semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non nisl molestie, fringilla nibh a, imperdiet dolor. Nulla sit amet augue nisl. Aenean arcu ante, rutrum ut aliquet ut, pretium at lorem. Aenean condimentum leo ante, eget auctor nisl ornare laoreet. Quisque suscipit dolor quis semper dapibus. Quisque ac rhoncus arcu, quis ullamcorper mi. Curabitur at arcu ut dolor vestibulum vehicula. Fusce rutrum enim elit, condimentum placerat odio commodo nec. Sed id sem eget tortor mattis porta. Donec fringilla ligula pellentesque sem ornare aliquam. Pellentesque faucibus massa luctus, viverra ligula et, imperdiet purus. Ut facilisis at odio semper imperdiet. Suspendisse commodo et eros scelerisque placerat. Quisque posuere, diam id egestas congue, diam sem sagittis sem, sit amet faucibus metus tellus nec eros.

Phasellus viverra nulla in sodales tincidunt. Sed non sapien quam. Nunc hendrerit tincidunt erat ut accumsan. Donec imperdiet urna nec nulla malesuada placerat. Fusce malesuada iaculis nunc a consequat. Vestibulum non malesuada quam. Sed ac posuere arcu. Proin neque velit, egestas nec urna nec, auctor imperdiet purus. Mauris hendrerit arcu ac nunc scelerisque, vel lacinia nibh sodales. Curabitur nec gravida dui, iaculis porttitor tortor.

Maecenas suscipit sollicitudin leo. Donec turpis ex, luctus ac nunc sed, tincidunt lobortis mauris. Suspendisse maximus a leo id placerat. Ut eu nulla eget erat pharetra efficitur gravida ut odio. Morbi dolor purus, sagittis a elementum et, rhoncus at lectus. Nam placerat tellus vitae scelerisque scelerisque. Sed commodo purus vel leo tristique, eget bibendum libero gravida. Sed elit lacus, porttitor id eros nec, porttitor pellentesque ex. Cras faucibus eros tellus, sed faucibus nulla mattis eget. Donec vestibulum ultricies risus, at posuere leo aliquam iaculis. Maecenas tincidunt et tortor quis elementum. Sed semper, libero sit amet ornare pretium, lorem ante facilisis urna, ut consectetur tellus diam ac lorem. Etiam condimentum, neque sit amet accumsan iaculis, dolor lacus malesuada sapien, vitae laoreet nunc purus vel est.

Vivamus nunc felis, dictum vitae tincidunt nec, vulputate eget ex. Pellentesque posuere vitae eros consequat cursus. Etiam ante urna, feugiat non suscipit eu, dapibus in ligula. Integer rutrum augue at sapien pulvinar ullamcorper. Fusce eu iaculis erat, id ultrices velit. Morbi eget eleifend neque. Nunc a enim commodo, sagittis ligula id, interdum urna. Sed pretium auctor lacinia. Mauris efficitur congue volutpat. Duis at metus ac risus hendrerit aliquet.
         </p>
           <div>
           
           <a href='#' className='lire' id="l" >Lire la suite <img width="10px" height='10px' src={right}></img> </a>
           </div>
          
          </div>
        
        </div>
       
          </div>



    );
};

export default Main;