import React from "react";

export const First = () => {
  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="first-slide">
          <div class="card1">
            <h1>iPhone 14</h1>
            <h3>Pro.Bayond</h3>
            <h4>Learn more> Buy> </h4>
          </div>

          <img
            src="https://media.wired.com/photos/6318ecabf2203b5586fabe75/master/w_2580,c_limit/Apple-iPhone-14-Gear.jpg"
            alt="iPhone-14"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

//   export default First
