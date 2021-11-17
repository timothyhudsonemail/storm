import './App.css';
import $ from 'jquery';
function App() {

  function storm1() {
    friendlyfunction();
    if ($('#clue').css('backgroundColor') ==='rgb(0, 0, 0)'){
      $('#clue').css('backgroundColor','yellow');
      document.getElementById('friendly').play();
      document.getElementById('friendly').volume = 0.6;
      setTimeout(storm1, 200 )
    }
    else{
      $('#clue').css('backgroundColor','black');
      setTimeout(storm2, Math.floor(Math.random() * 24000) )
    }
  }

  function storm2() {
    if($('#clue').css('backgroundColor') ==='rgb(0, 0, 0)'){
      $('#clue').css('backgroundColor','yellow');
      document.getElementById('evil').play();
      document.getElementById('evil').volume = 0.4;
      setTimeout(storm2, 200 )
    }
    else{
      $('#clue').css('backgroundColor','black');
      setTimeout(storm3, Math.floor(Math.random() * 24000) )
    }
  }

  function storm3() {
    if($('#clue').css('backgroundColor') ==='rgb(0, 0, 0)'){
      $('#clue').css('backgroundColor','yellow');
      document.getElementById('psycho').play();
      document.getElementById('psycho').volume = 0.4;
      setTimeout(storm3, 200 )
    }
    else{
      $('#clue').css('backgroundColor','black'); 
      setTimeout(storm4, Math.floor(Math.random() * 24000) )
    }
  }

  function storm4() {
    if($('#clue').css('backgroundColor') ==='rgb(0, 0, 0)'){
      $('#clue').css('backgroundColor','yellow');
      document.getElementById('emo').play();
      document.getElementById('emo').audio = 0.4;
      setTimeout(storm4, 200 )
    }
    else{
      $('#clue').css('backgroundColor','black');
      setTimeout(storm1, Math.floor(Math.random() * 24000) )
    }
  }

  function friendlyfunction() {
      var audio2 = document.getElementById("radiofriendly");
          audio2.play();
          audio2.loop = true; 
          audio2.volume = 1;   
  }

  return (
    <div className="App"> 
      <body>
      <button style={{width:'300px', height:'100px'}}onClick={storm1}>storm
        </button>
        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
          <div id='clue' style={{backgroundColor:'black', width:'500px', height:'500px'}}>
          </div>
        </div>
        <audio id='friendly' src="https://cdn.artlist.io/artlist-sfx-aac/578771_Texture_-_Thunder%2c_Clap%2c_Large-01_normal.aac" type="audio/mpeg" />
        <audio id='evil' src="https://cdn.artlist.io/artlist-sfx-aac/517402_Force_of_Nature_-_Lightening_-_Thunder_strikes_15_second_Loop_normal.aac" type="audio/mpeg" />
        <audio id='psycho' src="https://cdn.artlist.io/artlist-sfx-aac/578771_Texture_-_Thunder%2c_Clap%2c_Large-01_normal.aac" type="audio/mpeg" />
        <audio id='emo' src="https://cdn.artlist.io/artlist-sfx-aac/517402_Force_of_Nature_-_Lightening_-_Thunder_strikes_15_second_Loop_normal.aac" type="audio/mpeg" />
        <audio id='radiofriendly' src="https://www.soundjay.com/nature/sounds/rain-07.mp3" type="audio/mpeg" />



      </body>
    </div>
  );

  
}

export default App;
