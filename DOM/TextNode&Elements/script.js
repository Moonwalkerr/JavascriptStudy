const courses = [
  {
    name: "Complete ReactJS course",
    price: "2.3",
  },
  {
    name: "Complete Angular course",
    price: "2.1",
  },
  {
    name: "Complete MERN course",
    price: "2.7",
  },
  {
    name: "Complete C++ course",
    price: "2.8",
  },
  {
    name: "Django Course",
    price: "7.4",
  },
];

const  generateLIST = () => {
  const ul = document.querySelector(".list-group");
  
  // The following is done to clear UL whever this function is called again during upcoming sorting event via Sort Button 
  ul.innerHTML = "";

  courses.forEach((course) => {

    // Creating List Element
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    // Injecting course Name inside List Element by creating TextNode element inside it
    const name = document.createTextNode(course.name);
    li.appendChild(name);
    
    // Now Creating Span element
    const span = document.createElement("span");
    span.classList.add("float-right");
    // Injecting Course Price inside Span element by creating TextNode element inside it
    const price = document.createTextNode(course.price);
    span.appendChild(price);
    // Injecting Span element inside List 
    li.appendChild(span);

    // Now Creating Unordered List Element and injecting  above created elements into it
    ul.appendChild(li);

  })
}
// Adding Event listener on window object , whenever the page reloads, the list will get generated
window.addEventListener("load",generateLIST);


// Sorting Button
const ascbutton = document.querySelector(".sort-btn");
ascbutton.addEventListener("click",()=>{
  courses.sort((a,b)=>a.price - b.price);
  generateLIST();
})


const descbutton = document.querySelector(".btn-primary");
descbutton.addEventListener("click",()=>{
  courses.sort((a,b)=>b.price - a.price);
  generateLIST();
})