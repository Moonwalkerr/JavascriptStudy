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



{/* <li>CourseName <span>Price</span> </li> */}



const  generateLIST = () => {
  const ul = document.querySelector(".list-group");
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


window.addEventListener("load",generateLIST);





{
  /* <li class="list-group-item">
  Complete C++ course
  <span class="float-right">$ 2.8</span>;
</li>; */
}

// function generateLIST() {
//   const ul = document.querySelector(".list-group");
//   ul.innerHTML = "";
//   courses.forEach((course) => {
//     const li = document.createElement("li");
//     li.classList.add("list-group-item");

//     const name = document.createTextNode(course.name);
//     li.appendChild(name);

//     const span = document.createElement("span");
//     span.classList.add("float-right");
//     const price = document.createTextNode("$ " + course.price);
//     span.appendChild(price);

//     li.appendChild(span);
//     ul.appendChild(li);
//   });
// }

// // generateLIST();

// window.addEventListener("load", generateLIST);

// const button = document.querySelector(".sort-btn");

// button.addEventListener("click", () => {
//   courses.sort((a, b) => a.price - b.price);
//   generateLIST();
// });
