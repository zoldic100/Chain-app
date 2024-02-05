import React from "react";
import "./services.css";
import servicesRightDec from "../../assets/services-right-dec.png";
import Card from "../ui/Card/Card";


const Services = () => {
    const cardContent = [
        {
            image:'',
            imageHover:'',
            name:'App Maintenance',
            paragraph:'You are not allowed to redistribute this template ZIP file on any other website.'
        },
        {
            image:'',
            name:'Rocket Speed of App',
            paragraph:'You are allowed to use the Chain App Dev HTML template. Feel free to modify or edit this layout.'
        },
        {
            image:'',
            name:'Multi Workflow Idea',
            paragraph:'If this template is beneficial for your work, please support us a little via PayPal. Thank you.'
        },
        {
            image:'',
            name:'24/7 Help & Support',
            paragraph:'Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.'
        },
    ]
  return (
    <div className="services">
     
      <img className=" text-7xl " src={servicesRightDec} alt="" />
      
      <div className="flex flex-col justify-center items-center ">
      <h1 className="text-3xl text-center font-bold max-w-[400px] md:max-w-[600px]">
        Amazing
        <span className=" to-blue"> Services & Features </span>
        For You
      </h1>
        <p className="text-gray-400 text-center max-w-[400px] md:max-w-[520px]  leading-loose mt-6">
          If you need the greatest collection of HTML templates for your
          business, please visit <span className="to-blue">TooCSS</span> Blog. If you need to have a contact form
          PHP script, go to <span className="to-blue">our contact page</span> for more information.
        </p>
         <Card data={cardContent} />
      </div>
     
    </div>
  );
};

export default Services;
