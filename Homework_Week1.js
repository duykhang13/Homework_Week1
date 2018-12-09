function randomNumber(){
  return Math.floor(Math.random() * 10)
}

let random = randomNumber()

for(let i = 0; i < 10; i++){
  let userinput = parseInt(prompt("HEY WANNA GUESS?"))
if (random === userinput)
  {alert("YOU LUCKY BASTARD!")
break
  } else {alert("NICE TRY BUT YOU SUCK!!!")}
}