const EventEmitter = require('events'); 
class Button extends EventEmitter{} 
const button = new Button(); 
button.on('click' , () => { 
console.log("Clicked! Button has been clicked.") 
}); 
button.on('mouseover' , () => { 
console.log("Mouse Is Over The Button.") 
}); 
button.emit('click'); 
button.emit('mouseover'); 