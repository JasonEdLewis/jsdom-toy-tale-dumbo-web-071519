const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE

const mainDiv = document.querySelector('#toy-collection');
    fetch('http://localhost:3000/toys')
       .then(resp => resp.json())
       .then(toys => setUpDivs(toys));



const setUpDivs =(toys)=>{
  toys.forEach(toy => {
   mainDiv.innerHTML += divs(toy.id, toy.name, toy.image, toy.likes);
  }
    
  );


}

const divs =(id,name, image,likes)=>{
  return `<div class="card" data-id=${id}>
  <h2 data-toy-name=${name}>${name}</h2>
  <img class="toy-avatar" src=${image} />
  <p data-likes=${likes}>likes:${likes}</p>
  <button class="like-btn">😍</button>
  </div>`
}
// console.log(grabToys());

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
  } else {
    toyForm.style.display = 'none'
  }
})


// OR HERE!

const form = document.querySelector(".add-toy-form");
const theText = form[0];
const theImg = form[1];


let whatsTheValue =(event)=>{
  event.preventDefault();
  debugger
  console.log(theText);
  // form.reset()
  }





// const addNewToy =(name, url)=>{
//   fetch("http://localhost:3000/toys",
//   {
//     method: 'POST',
//     headers: {
//       "Content - Type" : "application/json",
//       "Accept" : "application/json"
//     },
//     body:  JSON.stringify({
      
//     })
//   }).then(resp => resp.json()).then(toys => setUpDivs(toys) )

// };

form.addEventListener('submit', whatsTheValue)