const annualy_paragraph = document.querySelector('.annualy-value');
const month_paragraph = document.querySelector('.month-value');
let ann = document.querySelectorAll('.annualy-value');
let mon = document.querySelectorAll('.month-value');
// document.getElementById('toggle').addEventListener('che', (e) => {

//       if(month_paragraph.style.display === 'none' ){
     
//         month_paragraph.style.display = 'block';
//         annualy_paragraph.style.display = 'none';
     
//       }else {
//         annualy_paragraph.style.display = 'block';
//         month_paragraph.style.display = 'none';
//       }
    

    
// })

let annualyArray = Array.from(ann);
let monthArray = Array.from(mon);

var checkbox = document.querySelector("input[name=toggle]");

checkbox.addEventListener( 'change', function() {



    if(this.checked) {
     
            annualyArray.forEach((e, i) => {
          
               e.style.display = 'none';
               console.log(i)
               monthArray[i].style.display = 'block'; 
         }) 
        
 
      
    } else {
        
           annualyArray.forEach((e, i) => {
              e.style.display = 'block';
              console.log(i)
              monthArray[i].style.display = 'none'; 
            })      
    }
});