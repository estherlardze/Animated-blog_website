AOS.init();

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navLinks = document.getElementsByClassName('links')[0];
const signLinks = document.getElementsByClassName('sign')[0];

toggleButton.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')
    signLinks.classList.toggle('active')
})

// dummy data for recent post
const latestPost = [
     {
        index:1,
        image:"./images/post-3.jpg",
        description: "Lorem ipsum dolor sit amet.",
        category:"fashion",
        time:"10 minutes ago"
     },
     {  index:2,
        image:"./images/men.jpg",
        description: "Lorem ipsum dolor sit amet.",
        category:"fashion",
        time:"2 hours ago"
     },
     {  index:3,
        image:"./images/Ai.jpg",
        description: "Lorem ipsum dolor sit amet.",
        category:"fashion",
        time:"2 minutes ago"
     },
     {  index:4,
        image:"./images/ocean.jpg",
        description: "Lorem ipsum dolor sit amet.",
        category:"fashion",
        time:"1 hour ago"
     },
     {  index:5,
        image:"./images/program.jpg",
        description: "Lorem ipsum dolor sit amet.",
        category:"fashion",
        time:"40 minutes ago"
     }

]
 
const postCards = document.querySelector(".cards-section");
const Posts = latestPost.map((item)=>{
 return(
    `<article key=${item.index}>
      <img src=${item.image} alt="">
      <h5 class="fw-bold">${item.description}</h5>
      <button>${item.category}</button>
      <p>${item.time}</p>
   </article>`
)}
)
 postCards.innerHTML =  Posts;
 

 // dummy data for recent blog

