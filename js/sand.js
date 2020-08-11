const sections = document.getElementsByClassName("sections-vp");
const headingTwo = document.querySelectorAll("h2");
const headingThree = document.querySelectorAll("h3");

console.log(sections);
console.log(headingTwo);

// ========Start of adding active class to the section and menu item near top of view port====
const checkViewPort = () => {
  [...sections].forEach((section) => {

    let bounding = section.getBoundingClientRect();

    if (
      bounding.top <= 150 &&
      // bounding.left >= 0 &&
      // bounding.right <= window.innerWidth &&
      bounding.bottom >= 150
    ) {
      // console.log("Section is in the viewport!");
      section.classList.add("your-active-class");

      section.style.cursor = "cell";
    } else {
      // console.log("Section is NOT in the viewport!");
      section.classList.remove("your-active-class");

      section.style.cursor = "default";
    }
  });
};


const checkViewPort2 = () => {
    [...headingTwo].forEach((heading) => {
  
      let bounding = heading.getBoundingClientRect();
  
      if (
        bounding.top <=200 &&
        // bounding.left >= 0 &&
        // bounding.right <= window.innerWidth &&
        bounding.bottom >= 200
      ) {
        // console.log("Section is in the viewport!");
  
        heading.classList.add("heading-sand2");
      } else {
        // console.log("Section is NOT in the viewport!");
  
        heading.classList.remove("heading-sand2");
      }
    });
  };

  const checkViewPort3 = () => {
    [...headingThree].forEach((heading) => {
  
      let bounding = heading.getBoundingClientRect();
  
      if (
        bounding.top <= 200 &&
        // bounding.left >= 0 &&
        // bounding.right <= window.innerWidth &&
        bounding.bottom >=200
      ) {
        // console.log("Section is in the viewport!");
  
        heading.classList.add("second-heading-sand2");
      } else {
        // console.log("Section is NOT in the viewport!");
  
        heading.classList.remove("second-heading-sand2");
      }
    });
  };


window.addEventListener("scroll", checkViewPort);
window.addEventListener("scroll", checkViewPort2);
window.addEventListener("scroll", checkViewPort3);


// ========End of adding active class to the section and menu item near top of view port====
