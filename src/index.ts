import './index.css';
import { Watch } from './watch-unit';

const time = new Watch();

var WatchElement = document.getElementById('Watch');
WatchElement.innerHTML = time.get();
let edit = 0;
let NightMode = false;

var IncreaseButton = document.getElementById('Increase');
IncreaseButton.onclick = function() {
    if(edit == 1){
        time.increaseHours();
    }
    
    if(edit == 2){
        time.increaseMinutes();
    }
    WatchElement.innerHTML = time.get();
  }

var ModeButton = document.getElementById('Mode');
ModeButton.onclick = function() {
      edit += 1;
      if(edit == 3){
          edit = 0;
      }
    }

var LightButton = document.getElementById('Light');
LightButton.onclick = function() {
    NightMode = ! NightMode;
    if (NightMode == true)
    {
        WatchElement.style.background = "rgb(2, 248, 15)";
    }
    else
        WatchElement.style.background = "rgb(0, 0, 0)";
  }

console.log('the time is', time.get());

