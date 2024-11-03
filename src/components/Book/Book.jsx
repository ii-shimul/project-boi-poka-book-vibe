import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, bookName, author, tags, category, rating, bookId } = book;
  return (
    <div className="rounded-xl p-6 border space-y-4 hover:shadow-md duration-200">
      <div className="h-[220px] bg-[#F3F3F3] rounded-xl flex items-center justify-center w-auto overflow-hidden">
        <img className="h-[166px] w-fit" src={image} />
      </div>
      <div className="flex gap-2">
        {tags.map((tag, idx) => (
          <div key={idx} className="text-green-600 bg-[#F3F3F3] rounded-lg w-fit py-1 px-2">
            {tag}
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold">{bookName}</h2>
      <h3>By: {author}</h3>
      <div className="divider"></div>
      <div className="flex justify-between">
        <p>{category}</p>
        <p>Rating: {rating}</p>
      </div>
      <Link to={`/books/${bookId}`}><button className="btn mt-4 w-full">Show Details</button></Link>
    </div>
  );
};

export default Book;
