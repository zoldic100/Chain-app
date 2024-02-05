import React from "react";
import "./about.css";
import AboutRightImg from "../../assets/about-right-dec.png";
const About = () => {
  const boxContent = [
    {
      name: "Maintance Problems",
    },
    {
      name: "24/7 Support & Help",
    },
    {
      name: "Fixing Issues About",
    },
    {
      name: "Co. Development",
    },
  ];
  return (
    <div className="lg:h-[130vh] h-[310vh] md:h-[350vh]" >
    <div className=" about mt-44 grid grid-cols-12  relative">
      <div className="col-span-12 lg:col-span-7 ">
        <h1 className="text-bold text-4xl font-bold">
          About <span className="to-blue"> What We Do</span> & Who We Are
        </h1>
        <p className="lg:max-w-[550px] mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          explicabo cupiditate provident deserunt doloribus perspiciatis
          temporibus sequi.
        </p>
        <div className="boxs grid grid-cols-2 gap-9 ">
          {boxContent.map((item, index) => (
            <div
              key={index}
              className="box flex flex-col align-middle lg:col-span-1 col-span-2 text-center mb-10 shadow lg:w-[290px] w-full px-10 py-3 bg-white rounded-full "
            >
              <h4 className="text-[22px] font-bold ">
                <a href="/">{item.name}</a>
              </h4>
              <p>Lorem Ipsum Text</p>
            </div>
          ))}
          <div className="col-span-2 text-center lg:text-start pb-10">
            <p className="lg:max-w-[550px] mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eismod tempor idunte ut labore et dolore adipiscing magna.
            </p>
            <div className="mb-3">
              <a href="/" className="link-button   rounded-full">
                Start 14-Day Free Trail
              </a>
            </div>

            <div className="nb">
              <span>*No Credit Card Required</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12  lg:col-span-5 img">
        <div class="right-image">
          <img className=" lg:absolute top-16 -right-8" src={AboutRightImg} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
