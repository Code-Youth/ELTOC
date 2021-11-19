var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var beta = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
function playSound(letter){
    let wawa = alpha.indexOf(letter)
    console.log(wawa)
    console.log(beta[wawa])
     var letId = document.getElementById(beta[wawa]).play()
}
var omega = "abcdefghijklmnopqrstuvwxyz"
var zeta = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
function playSoundLower(letter){
    let wawawa = omega.indexOf(letter)
    console.log(wawawa)
    console.log(zeta[wawawa])
     var letId = document.getElementById(zeta[wawawa]).play()
}