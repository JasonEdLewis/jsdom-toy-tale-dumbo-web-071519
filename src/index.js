const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE

const mainDiv = document.querySelector('#toy-collection');
    fetch('http://localhost:3000/toys')
      .then(resp => resp.json())
      .then(toys =>
      toys.forEach(toy => {
        mainDiv.innerHTML += divs(toy.id, toy.name, toy.image, toy.likes);})
      );



const divs =(id,name, image,likes)=>{
  return `<div class="card" data-id=${id}>
  <h2 data-toy-name=${name}>${name}</h2>
  <img class="toy-avatar" src=${image} />
  <p data-likes=${likes}>likes:${likes}</p>
  <button class="like-btn">😍</button>
  </div>`
}
// console.log(grabToys());
mainDiv.addEventListener('click', (event) =>{

  if(event.target.className === 'like-btn'){
    likeNumStr= event.target.previousSibling.previousElementSibling.dataset.likes
    likesText = event.target.previousSibling.previousElementSibling
    likeNum = parseInt(likeNumStr) + 1
    likeNumStr= likeNum
    const id= event.target.parentElement.dataset.id
    updateLikes(id,likeNumStr).then(like => {
      // debugger
      likesText.innerText = 'likes:' + likeNumStr

    })
  }

}
  )


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


  
const addNewToy =(toyName, imageName)=>{
  return fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: { 
	'Content-Type' : 'application/json',
    'Accept': 'application/json'	

},
body: JSON.stringify({
	name: toyName,
	image: imageName,
	likes: 0
        
})
    
})

}
  
  fetch("http://localhost:3000/toys",addNewToy).then(resp => resp.json())


form.addEventListener("submit", (event) =>{
  // event.preventDefault();
  const toyName = event.target.name.value
  const imageName = event.target.image.value
  addNewToy(toyName,imageName).then(toy =>
    toys.forEach(toy => {
      mainDiv.innerHTML += divs(toy.id, toy.name, toy.image, toy.likes);})
    )
  toyName = ""
  imageName = ""
  
}
)
const updateLikes =(id,addedLike) =>{
  return fetch(`http://localhost:3000/toys/${id}`, {
    method:'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  },
  body: JSON.stringify({
    likes: addedLike

  })


  })

}