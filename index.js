// const list=document.getElementsByClassName('list')
// console.log(list)
// list[0].style.backgroundColor = 'green';
//  for(i=0;i<=list.length;i++){
//     console.log(list[i].innerHTML)
//  }

    

// const list = document.querySelectorAll('.list'); 
// console.log(list)
// list.forEach((li) => {
//   li.style.backgroundColor = 'green';
// });


// const array=['alizaib','khalq','sundas','adil']
// array.forEach((li)=>{
// } )

// document.querySelector('.list').addEventListener('click',function(e){
//     console.log(e.target.parentNode);
//     let removeIt=e.target.parentNode
//     removeIt.remove()
// }) 


//  const btn1=document.getElementById('one');
//  btn1.addEventListene('click',function (){
//     for(i=0;i<btn1;i++){
//         console.log('i am clicked')
//     }
//  })

// const btn1 = document.getElementById('one');
// btn1.addEventListener('click', function () {
//     const one=document.getElementById('four')

// });
// let result =0;
// let heading=document.getElementById('h1');
// heading.innerText=`You Are Clicked ${result} Times`
// heading.addEventListener('click',function(){
// result+=1;
// })



// button one ky lia

let result1 = 0;
let button1 = document.getElementById('one');
let heading1 = document.getElementById('h1');

button1.addEventListener('click', function() {
    result1 += 1;
    heading1.innerText = `You Are Clicked ${result1} Times`;
});

// button 2 ky li

let result2 = 0;
let button2 = document.getElementById('two');
let heading2 = document.getElementById('h1');

button2.addEventListener('click', function() {
    result2 +=2;
    heading2.innerText = `You Are Clicked ${result2} Times`;
});

// button 3 ky li

let result3 = 0;
let button3 = document.getElementById('three');
let heading3 = document.getElementById('h1');

button3.addEventListener('click', function() {
    result3 +=3;
    heading3.innerText = `You Are Clicked ${result3} Times`;
});

// button 4 ky li

let result4 = 0;
let button4 = document.getElementById('four');
let heading4 = document.getElementById('h1');

button4.addEventListener('click', function() {
    result4 +=4;
    heading4.innerText = `You Are Clicked ${result4} Times`;
});

// button 4 ky li

let result5 = 0;
let button5 = document.getElementById('five');
let heading5 = document.getElementById('h1');

button5.addEventListener('click', function() {
    result5 +=0;
    heading5.innerText = `You Are Clicked ${result5} Times`;
});