import React from "react";
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 rounded-2xl my-8 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16">
        <img
          src={bannerImg}
          className="rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl mb-6 font-bold leading-snug">
            Books to freshen <br/> up your bookshelf
          </h1>
          <button className="btn bg-stone-500 text-white hover:text-black">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
