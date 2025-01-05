const response={
  "who are you?" : "we are support client at Crustdata",
  "How can you help me?" : "By giving replies of your query"
}

function send()
{
  var text= document.getElementById('text').value;
  receive(text,'usr-msg');
  
  document.getElementById('text').value="";
  
  if (response[text]) {
         setTimeout( ()=>{receive(response[text],'bot-msg')}, 1000);
  }
}

function receive(text,className){
  const messageElement = document.createElement('div');
  messageElement.className= className;
  messageElement.textContent = text;
  document.getElementById('chat-bot').appendChild(messageElement);
}
