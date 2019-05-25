var audioAcertou = new Audio();
var audioErrou = new Audio();
	audioAcertou.src = "aplausos.mp3";
	audioErrou.src = "derrota.mp3";
	
  var perguntas = ['Qual o maior país do mundo?', 'Qual a banda mais famosa do mundo?', 'Qual a série mais vista da história?',
                    'Em que ano foi o último título mundial do Brasil no futebol?', 'Qual o nome do jogo que é feito em cubos?'];
  var respostaCerta = ['Rússia', 'The Beatles', 'The Walking Dead', '2002', 'Minecraft']
  
  var alter1 = ['Estados Unidos', 'Guns and Roses', 'How I Met Your Mother', '2006', 'Counter-Strike'];
  var alter2 = ['China', 'Queen', 'Prison Break', '1998', 'GTA V']; 
  var alter3 = ['Brasil', 'Rolling Stones', 'Game Of Thrones', '2010', 'Fifa 19'];  
            
  var acertou = new Boolean(true);
  var respostasDadas = 0;         
  var i = 0;
 
 function VerificaResposta(element){

       var respClick = element.innerHTML;
      respostasDadas = respostasDadas + 1;
      
      if(respostaCerta[i] == respClick){   // se acertou
          element.style.color = "green";
          audioAcertou.play();
          acertou = true;
        
          if(i == 4){
            Ganhou(respostasDadas);
            respostasDadas = 0;
            i = 0;
          }
          else
          i = i + 1;
      }
      else{
           element.style.color = "red";
           audioErrou.pause();
           audioErrou.currentTime = 0;
           audioErrou.play();
       }
 	}


 	function ProxPergunt(){
    if(acertou)
    {
    audioAcertou.pause();
    audioErrou.pause();
    audioAcertou.currentTime = 0;
    audioErrou.currentTime = 0;

    acertou = false;  
    document.getElementById('numPergunta').innerHTML = perguntas[i];
    document.getElementById('alt1').style.color = "black";
    document.getElementById('alt2').style.color = "black";
    document.getElementById('alt3').style.color = "black";
    document.getElementById('alt4').style.color = "black";
     
     if(i == 0){
        document.getElementById('alt1').innerHTML = alter1[i]; 
        document.getElementById('alt2').innerHTML = respostaCerta[i]; 
        document.getElementById('alt3').innerHTML = alter2[i];
        document.getElementById('alt4').innerHTML = alter3[i]; 
     }

    if(i == 1){
        document.getElementById('alt1').innerHTML = alter1[i]; 
        document.getElementById('alt2').innerHTML = respostaCerta[i]; 
        document.getElementById('alt3').innerHTML = alter2[i]; 
        document.getElementById('alt4').innerHTML = alter3[i]; 
    }
    else if(i == 2)
    {
      document.getElementById('alt1').innerHTML = respostaCerta[i]; 
      document.getElementById('alt2').innerHTML = alter1[i]; 
      document.getElementById('alt3').innerHTML = alter2[i]; 
      document.getElementById('alt4').innerHTML = alter3[i]; 
    }
    else if (i == 3)
    {
      document.getElementById('alt1').innerHTML = alter1[i]; 
      document.getElementById('alt2').innerHTML = alter2[i]; 
      document.getElementById('alt3').innerHTML = respostaCerta[i]; 
      document.getElementById('alt4').innerHTML = alter3[i]; 
    }
   else if(i == 4)
    {
      document.getElementById('alt1').innerHTML = alter1[i];  
      document.getElementById('alt2').innerHTML = respostaCerta[i]; 
      document.getElementById('alt3').innerHTML = alter2[i]; 
      document.getElementById('alt4').innerHTML = alter3[i]; 
    }
  }
  else 
    alert('Você deve acertar a pergunta primeiro!');
 	}

  function Ganhou(qtsResp){
        if(qtsResp == 5)
          alert('Parabéns você acertou todas de primeira!');
        else if(qtsResp < 7)
          alert('Você podia ter ido melhor!');
        else
          alert('Você foi mal!');
  }
