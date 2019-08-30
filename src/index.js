const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE

const mainDiv = document.getElementById('toy-header');
    fetch('http://localhost:3000/toys')
       .then(resp => resp.json())
       .then(toys => setUpDivs(toys));



const setUpDivs =(toys)=>{
  toys.forEach(toy => {
    let newPost =    mainDiv.innerHTML += divs(toy.id, toy.name, toy.image, toy.likes);
  }
    
  );


}

const divs =(id,name, image,likes)=>{
  return `<div class="card" data-id=${id}>
  <h2 data-toy-name=${name}>${name}</h2>
  <img class="toy-avatar" src=${image} />
  <p data-likes=${likes}>likes: ${likes}</p>
  <button class="like-btn">💗</button>
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
