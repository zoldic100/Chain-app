import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
const Stars = ({data}) => {
  function roundToNearestHalf(number) {
    return Math.floor(number * 2) / 2;
  }
  return (
    <>
      {roundToNearestHalf(data) === 5 && (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      )}

      {roundToNearestHalf(data) === 4.5 && (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </>
      )}
      {roundToNearestHalf(data) === 4 && (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      )}
      {roundToNearestHalf(data) === 3.5 && (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </>
      )}
    </>
  );
};

export default Stars;
