import React from "react";
import "./Reviews.css";
import Quote from "../../assets/quote.png";
import clientImg from "../../assets/client-image.jpg";

import { Stars } from "../ui";
const reviewsArray = [
  {
    name: "David Martino Co",
    date: "30 November 2021",
    category: "Financial Apps",
    rating: 5,
  },
  {
    name: "Jake Harris Nyo",
    date: "29 November 2021",
    category: "Digital Business",
    rating: 4.5,
  },
  {
    name: "May Catherina",
    date: "27 November 2021",
    category: "Business & Economics",
    rating: 4.7,
  },
  {
    name: "Random User",
    date: "24 November 2021",
    category: "New App Ecosystem",
    rating: 3.9,
  },
  {
    name: "Mark Amber Do",
    date: "21 November 2021",
    category: "Web Development",
    rating: 4.3,
  },
];
const Reviews = () => {

  return (
    <div className="reviews">
      <div className="text-center relative mb-10">
        <h1 className="text-bold text-2xl md:text-4xl font-bold ">
          Check What <span className="to-blue">The Clients Say</span> About Our
          App Dev
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod{" "}
          <br /> tempor incididunt ut labore et dolore magna.
        </p>
      </div>
      <div className="lg:grid text-center lg:text-start grid-cols-12 mt-12">
        <div className="text-gray-400 col-span-7 mt-16">
          <div className="md:grid grid-cols-12">
            {reviewsArray.map((review, index) => (
              <React.Fragment key={index}>
                <div  className={` star-${index+1}  col-span-4 flex flex-col  md:mb-10 `}>
                  <h4 className={`${index==0 && 'active'} text-black font-semibold text-xl`}>{review.name}</h4>
                  <span>{review.date}</span>
                </div>
                <div className=" col-span-4 font-bold hidden md:block">
                  <span>
                    <a href={review.category}>{review.category}</a></span>
                </div>
                <div className={`${index==0 && 'active'} col-span-4 text-xl mb-12 `}>
                  <span className="flex flex-row justify-center items-center">
                    <Stars data={review.rating} />
                    <span className=" ms-1">{review.rating}</span>
                  </span>
                  
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className=" col-span-5">
          <div className="flex flex-col thumb">
            <div className="client-content">
              <img src={Quote} alt="" />
              <p>
                “Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do
                eismod tempor idunte ut labore et dolore magna aliqua darwin
                kengan lorem ipsum dolor sit amet, consectetur picing elit
                massive big blasta.”
              </p>
            </div>
            <div className="down-content mt-8 flex flex-row  items-center gap-10">
              <img src={clientImg} alt="" />
              <div className="right-content">
                <h4 className="font-bold text-3xl pb-2">David Martino</h4>
                <span className=" font-light text-lg">
                  CEO of David Company
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
