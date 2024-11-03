import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredWishList,
  addToStoredReadList,
} from "../../utilities/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();

  const book = data.find((book) => book.bookId == bookId);

  const {
    image,
    author,
    bookName,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleWishlist = (id) => {
    addToStoredWishList(id);
  };
  const handleReadList = (id) => {
    addToStoredReadList(id);
  };
  return (
    <div className="grid grid-cols-2 gap-14 w-full my-6">
      <div className="bg-[#f3f3f3] p-16 flex justify-center items-center rounded-xl">
        <img src={image} alt="" />
      </div>
      <div className="">
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <p className="text-lg my-4">By: {author}</p>
        <hr />
        <p className="text-2xl mt-3 mb-4">{category}</p>
        <hr />
        <p className="my-5">
          <span className="font-bold">Review: </span>
          {review}
        </p>
        <div className="flex gap-3">
          <span className="font-bold">Tag</span>
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="text-green-600 bg-[#F3F3F3] rounded-lg w-fit py-1 px-2"
            >
              {tag}
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <table className="table-fixed w-1/2">
          <tr className="flex gap-10">
            <td className="opacity-50 w-1/2 p-2 text-left">Number of Pages:</td>
            <td className="font-bold w-1/4 p-2">{totalPages}</td>
          </tr>
          <tr className="flex gap-10">
            <td className="opacity-50 w-1/2 p-2 text-left">Publisher:</td>
            <td className="font-bold w-1/4 p-2">{publisher}</td>
          </tr>
          <tr className="flex gap-10">
            <td className="opacity-50 w-1/2 p-2 text-left">
              Year of Publishing:
            </td>
            <td className="font-bold w-1/4 p-2">{yearOfPublishing}</td>
          </tr>
          <tr className="flex gap-10">
            <td className="opacity-50 w-1/2 p-2 text-left">Rating:</td>
            <td className="font-bold w-1/4 p-2">{rating}</td>
          </tr>
        </table>
        <div className="flex gap-4 mt-5">
          <button onClick={()=> handleReadList(bookId)} className="btn btn-ghost btn-outline shadow-md">Read</button>
          <button onClick={() => handleWishlist(bookId)} className="btn btn-accent">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
