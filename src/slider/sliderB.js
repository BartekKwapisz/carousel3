// // import { Component } from "react";

// // //https://www.pluralsight.com/guides/use-plain-javascript-events-in-react
// // class App extends React.Component {
// // componentDidMount() {
//   const element = document.getElementById("myBtn");
//   element.addEventListener("click", myFunction);

//   function myFunction() {
//     alert(2);
//   }
// // }
// // }

// // https://youtu.be/9HcxHDS2w1s
// // const buttons = document.querySelectorAll("[data-carousel-button]")

// // buttons.forEach(button => {
// //   button.addEventListener("click", () => {  
// //     const offset = button.dataset.carouselButton === "next" ? 1 : -1
// //     const slides = button
// //       .closest("[data-carousel]")
// //       .querySelector("[data-slides]")

// //     const activeSlide = slides.querySelector("[data-active]")
// //     let newIndex = [...slides.children].indexOf(activeSlide) + offset
// //     if (newIndex < 0) newIndex = slides.children.length - 1
// //     if (newIndex >= slides.children.length) newIndex = 0

// //     slides.children[newIndex].dataset.active = true
// //     delete activeSlide.dataset.active
// //   })
// // })
