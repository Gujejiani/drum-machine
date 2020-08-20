
import React, {Component } from 'react';
import './Drumpad.css';

const data = [
    {id: ''},
    { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
    { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
    { id: 'bongo', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
    { id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
    { id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
    { id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
    { id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
    { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
    { id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
  ]

 
var music =  data.map((x)=>{
 

    return x.id



})
console.log(music)


class Drumpad extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        //markdown: initialState
    hitIndex: 0,
    play: false,
    pause: true
        };
        this.soundOn = this.soundOn.bind(this)
   
        this.handleKeyPress=this.handleKeyPress.bind(this)


       



        this.sudio = new Audio( data[3].src);

      };

 

      
soundOn(event){
    console.log('am clicked')
this.setState({
//hit: data.src,
    play: true,
      pause: false,
      hitIndex: parseInt(event.target.getAttribute('id'))
      
})
var index =  parseInt(event.target.getAttribute('id'))



//console.log(data.src)
//console.log(event.target.getAttribute('id'))
console.log( parseInt(this.state.hitIndex))

this.url = data[index].src;
this.audio = new Audio(this.url);
this.audio.play();
};





handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    }
  }

render(){
    
    return(
   <div>
<button className="drum-pad" id='1' onClick={this.soundOn} >Q <audio src='' className='clip' id="Q" onClick={this.soundOn} ></audio> </button>
<button className="drum-pad"  id='2' onClick={this.soundOn} >W  <audio src='' className='clip' id='W' ></audio> </button>
<button  className="drum-pad" id='3' onClick={this.soundOn} >E <audio src='' className='clip' id='E' ></audio></button>
<button className="drum-pad" id='4' onClick={this.soundOn} >A <audio src='' className='clip' id='A' ></audio></button>
<button className="drum-pad" id='5' onClick={this.soundOn} >S <audio src = '' className='clip' id='S' ></audio></button>
<button className="drum-pad" id='6'onClick={this.soundOn} >D <audio src='' className='clip' id='D' ></audio> </button>
<button className="drum-pad" id='7'onClick={this.soundOn} >Z <audio src='' className='clip' id='Z' ></audio></button>
<button className="drum-pad" id='8'onClick={this.soundOn} >X <audio src='' className='clip' id='X' ></audio></button>
<button className="drum-pad" id='9'onClick={this.soundOn} >C <audio src='' className='clip' id='C'></audio></button>

    <p>{data[this.state.hitIndex].id}</p>

   </div>


    );


}



}

export default Drumpad