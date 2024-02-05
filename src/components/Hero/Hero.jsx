import React from "react";
import "./Hero.css";
import sliderLeftDec from "../../assets/slider-left-dec.png";
import sliderDec from "../../assets/slider-dec.png";
import { Button } from "../ui";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="hero h-[170vh] sm:h-[130vh] lg:h-[140vh]">
      <div className=" ">
        <div>
          <img
            className="hidden  lg:block slider-left-dec"
            src={sliderLeftDec}
            alt=""
            srcSet=""
          />
          <div className=" h-20 sm:h-32   lg:h-48    "></div>
          <div className=" hero-text lg:max-w-[520px] ">
            <h1 className=" mb-6 leading-[50px] text-[40px] sm:text-5xl md:text-6xl lg:px-0 lg:leading-normal font-bold  text-center lg:text-start">
              Get The Latest App <br className="hidden md:flex" /> From App Stores
            </h1>
            <p className="  mb-8 text-center font-light leading-loose text-gray-400 lg:text-start lg:font-meduim  lg:text-[#2a2a2a]">
              Chain App Dev is an app landing page HTML5 template based on
              <br className="hidden md:flex" /> Bootstrap v5.1.3 CSS layout provided by TemplateMo, a great
              website to download <br className="hidden md:flex" />
              free CSS templates.
            </p>
            <div className="buttons  flex gap-4 text-s lg:justify-start justify-center items-center">
              <Button>
                Free Quots{" "}
                <span className="text-xl">
                  <FaApple />
                </span>
              </Button>
              <Button>
                Free Quots
                <span className="text-xl">
                  <IoLogoGooglePlaystore />
                </span>{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img className="slider-dec" src={sliderDec} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
