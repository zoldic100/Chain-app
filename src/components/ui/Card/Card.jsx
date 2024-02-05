import React from "react";
import "./card.css";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ data }) => {
  return (
    <div  className="mt-16 grid sm:grid-cols-1 h-fit  lg:grid-cols-4 gap-8 ">
      {data.map((item, index) => (
        <>
          <div className={`card card-${index+1} flex flex-col sm:items-center`} key={index}>
            <div className={`icon icon-${index+1}`} >
                
            </div>
            
            <h3 className="lg:w-[150px] ">{item.name}</h3>
            <p className="font-light lg:w-[155px] leading-[30px] text-[15px] text-gray-400 ">{item.paragraph}</p>
            <div className="link mb-2">
                <a href="/" className=" flex sm:justify-center items-center  gap-2"> Read More <FaArrowRight /></a>
            </div>
            
          </div>
        </>
      ))}
    </div>
  );
};

export default Card;
