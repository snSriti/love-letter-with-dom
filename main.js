// if my changing text is different..then I can write this code

document.getElementById('yes').addEventListener('click', function(){
    document.getElementById('msg').innerText = 'I LOVE YOU❤️❤️';
})

function ofcourse(){
    document.getElementById('msg').innerText = 'YEAH!!❤️❤️'
}



// different way
// if my changing text is same..in this time I write this code.it is a short code.
// document.getElementById('yes').addEventListener('click', function(){
//     sentMsg('msg')
// })


// function ofcourse(){
//    sentMsg('msg');
// }


// function sentMsg(id){
//     document.getElementById('msg').innerText = 'I LOVE YOU';
// }