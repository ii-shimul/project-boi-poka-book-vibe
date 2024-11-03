import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utilities/addToDb";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishlist] = useState([]);
  const books = useLoaderData();
  useEffect(()=>{
    const storedReadList = getStoredReadList().map(id => parseInt(id));
    const readBookList = books.filter(book => storedReadList.includes(book.bookId));
    setReadList(readBookList);
    const storedWishlist = getStoredWishList().map(id => parseInt(id));
    const readWishlist = books.filter(book => storedWishlist.includes(book.bookId));
    setWishlist(readWishlist);
  },[])
  return (
    <div>
      <div className="flex justify-center mb-8 items-center rounded-xl bg-black bg-opacity-10 py-10">
        <h1 className="font-bold text-5xl">Books</h1>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Marked as read</Tab>
            <Tab>Wishlist</Tab>
          </TabList>

          <TabPanel>
            {readList.map((book) => {
              const { bookId, image, author, bookName } = book;
              return (
                <div className="p-5 rounded-xl flex gap-5 w-full border mb-5">
                  <div className="h-[200px] bg-[#F3F3F3] rounded-xl flex items-center justify-center w-[20%] overflow-hidden">
                    <img className="h-[150px] w-fit" src={image} />
                  </div>
                  <div className="w-full  flex flex-col justify-between">
                    <div className="">
                      <h1 className="font-bold text-2xl mb-3">{bookName}</h1>
                      <p>By: {author}</p>
                    </div>
                    <Link to={`/books/${bookId}`} className="max-w-[20%]">
                      <button className="btn mt-4 w-full">Show Details</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </TabPanel>
          <TabPanel>
            {wishList.map((book) => {
              const { bookId, image, author, bookName } = book;
              return (
                <div className="p-5 rounded-xl flex gap-5 w-full border mb-5">
                  <div className="h-[200px] bg-[#F3F3F3] rounded-xl flex items-center justify-center w-[20%] overflow-hidden">
                    <img className="h-[150px] w-fit" src={image} />
                  </div>
                  <div className="w-full  flex flex-col justify-between">
                    <div className="">
                      <h1 className="font-bold text-2xl mb-3">{bookName}</h1>
                      <p>By: {author}</p>
                    </div>
                    <Link to={`/books/${bookId}`} className="max-w-[20%]">
                      <button className="btn mt-4 w-full">Show Details</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
