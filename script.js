  const btnCachorro = document.querySelector('.cachorro')
  const btnGato = document.querySelector('.gato')
  const btnPintinho = document.querySelector('.pintinho')
  const btnVaca = document.querySelector('.vaca')
  const btnGalinha = document.querySelector('.galinha')
  const btnCavalo = document.querySelector('.cavalo')
  const btnElefante = document.querySelector('.elefante')
  const btnLeao = document.querySelector('.leao')
  const btnMacaco = document.querySelector('.macaco')
  const btnPato = document.querySelector('.pato')
  const btnSapo = document.querySelector('.sapo')
  const btnGolfinho = document.querySelector('.golfinho')
  const btnFoca = document.querySelector('.foca')

  const SoundCachorro = new Audio ("https://github.com/WillMR94/abcSound/blob/main/cachorro.mp3?raw=true")
  const SoundGato = new Audio ("https://github.com/WillMR94/abcSound/blob/main/Gato1.mp3?raw=true")
  const SoundPintinho = new Audio ("https://github.com/WillMR94/abcSound/blob/main/pintinho.mp3?raw=true")
  const SoundVaca = new Audio ("https://github.com/WillMR94/abcSound/blob/main/vaca.mp3?raw=true")
  const SoundGalinha = new Audio ("https://github.com/WillMR94/abcSound/blob/main/galinha.mp3?raw=true")
  const SoundCavalo = new Audio ("https://github.com/WillMR94/abcSound/blob/main/cavalo.mp3?raw=true")
  const SoundElefante = new Audio ("https://github.com/WillMR94/abcSound/blob/main/elefante.mp3?raw=true")
  const SoundLeao = new Audio ("https://github.com/WillMR94/abcSound/blob/main/leao.mp3?raw=true")
  const SoundMacaco = new Audio ("https://github.com/WillMR94/abcSound/blob/main/macaco.mp3?raw=true")
  const SoundPato = new Audio ("https://github.com/WillMR94/abcSound/blob/main/pato.mp3?raw=true")
  const SoundSapo = new Audio ("https://github.com/WillMR94/abcSound/blob/main/sapo.mp3?raw=true")
  const SoundGolfinho = new Audio ("https://github.com/WillMR94/abcSound/blob/main/golfinho.mp3?raw=true")
  const SoundFoca = new Audio ("https://github.com/WillMR94/abcSound/blob/main/foca.mp3?raw=true")
  
 function pause(){
  SoundCachorro.pause()
  SoundGato.pause()
  SoundPintinho.pause()
  SoundVaca.pause()
  SoundGalinha.pause()
  SoundCavalo.pause()
  SoundElefante.pause()
  SoundLeao.pause()
  SoundMacaco.pause()
  SoundPato.pause()
  SoundSapo.pause()
  SoundGolfinho.pause()
  SoundFoca.pause()

 }

  btnCachorro.addEventListener('click',function(){
    pause();
    SoundCachorro.play()
  })
  
  btnGato.addEventListener('click',function(){
    pause();
    SoundGato.play()
  })
  btnPintinho.addEventListener('click',function(){
    pause();
    SoundPintinho.play()
  })
  btnVaca.addEventListener('click',function(){
    pause();
    SoundVaca.play()
  })
  btnGalinha.addEventListener('click',function(){
    pause();
    SoundGalinha.play()
  })
  btnCavalo.addEventListener('click',function(){
    pause();
    SoundCavalo.play()
  })
  btnElefante.addEventListener('click',function(){
    pause();
    SoundElefante.play()
  })
  btnLeao.addEventListener('click',function(){
    pause();
    SoundLeao.play()
  })
  btnMacaco.addEventListener('click',function(){
    pause();
    SoundMacaco.play()
  })
  btnPato.addEventListener('click',function(){
    pause();
    SoundPato.play()
  })
  btnSapo.addEventListener('click',function(){
    pause();
    SoundSapo.play()
  })
  btnGolfinho.addEventListener('click',function(){
    pause();
    SoundGolfinho.play()
  })
  btnFoca.addEventListener('click',function(){
    pause();
    SoundFoca.play()
  })

  