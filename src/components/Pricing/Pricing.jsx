import React from "react";
import "./pricing.css";
import pricingImg from '../../assets/pricing-table-01.png'
const plansArray = [
  {
    scale: false,
    price: "$12",
    name: "Standard Plan App",
    details: [
      { detail: "Lorem Ipsum Dolores", active: false },
      { detail: "20 TB of Storage", active: false },
      { detail: "Life-time Support", active: true },
      { detail: "Premium Add-Ons", active: true },
      { detail: "Fastest Network", active: true },
      { detail: "More Options", active: true },
    ],
  },
  {
    scale: true,
    price: "$25",
    name: "Business Plan App",
    details: [
      { detail: "Lorem Ipsum Dolores", active: false },
      { detail: "50 TB of Storage", active: false },
      { detail: "Life-time Support", active: false },
      { detail: "Premium Add-Ons", active: false },
      { detail: "Fastest Network", active: true },
      { detail: "More Options", active: true },
    ],
  },
  {
    scale: false,
    price: "$66",
    name: "Premium Plan App",
    details: [
      { detail: "Lorem Ipsum Dolores", active: false },
      { detail: "120 TB of Storage", active: false },
      { detail: "Life-time Support", active: false },
      { detail: "Premium Add-Ons", active: false },
      { detail: "Fastest Network", active: false },
      { detail: "More Options", active: false },
      { detail: "Purchase This Plan Now", active: false },
    ],
  },
];

console.log(plansArray);

console.log(plansArray);

const Pricing = () => {
  return (
    <>
      <div className=" pricing ">
        <div className="text text-center pt-24 ">
          <h1 className="text-bold text-2xl md:text-4xl font-bold">
            We Have The Best Pre-Order <span className="to-blue">Prices</span>{" "}
            You Can Get
          </h1>
        </div>
        <div className="pricing-cards  md:grid grid-cols-12 md:gap-8">
          {plansArray.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className={`${
                  item.scale
                    ? "pricing-card-pro md:scale-115 md:hover:scale-110"
                    : "pricing-card md:scale-90  md:hover:scale-95"}
                      pricing-card delay-300 ease-in-out transition duration-500 col-span-4  mb-7 flex flex-col items-center gap-5`}
              >
                <h4 className="font-bold text-2xl ">{item.name}</h4>
                <div className="icon">
                  <img src={pricingImg} alt="" srcset="" />
                </div>
                {item.details.map((item,index)=>(
                  <React.Fragment key={index}>
                  <h5 className={`${item.active ? 'line-through font-light text-gray-500':' text-blue-500' } text-lg`}>{item.detail}</h5>
                  </React.Fragment>
                ))}
                <div className= "mt-5 transition-colors delay-200  ease-in-out  px-5 py-4 text-lg cursor-pointer rounded-full text-white bg-blue-500 hover:bg-blue-400">
                <a href="/">
                Purchase This Plan Now
                </a>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
