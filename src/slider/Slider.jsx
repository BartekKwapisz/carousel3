function Slider() {
  function go(num) {
    const buttons = document.querySelectorAll("[data-carousel-button]");
    buttons.forEach(button => {
      const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + num;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;
      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    }); 
  }
  return (
    <section aria-label="Newest Photos">
      <div className="carousel" data-carousel>
        <button
          className="carousel-button prev"
          data-carousel-button="prev"
          onClick={() => go(-1)}
        >
          &#8656;
        </button>
        <button
          className="carousel-button next"
          data-carousel-button="next"
          onClick={() => go(1)}
        >
          &#8658;
        </button>
        <ul data-slides>
          <li className="slide" data-active id="slide1">
            <img
              src="https://source.unsplash.com/78A265wPiO4"
              alt="Nature Image #1"
            />
          </li>
          <li className="slide" id="slide2">
            <img
              src="https://source.unsplash.com/uyzVvJtI8pg"
              alt="Nature Image #2"
            />
          </li>
          <li className="slide" id="slide3">
            <img
              src="https://source.unsplash.com/QHZn3-0bbEM"
              alt="Nature Image #3"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Slider;
