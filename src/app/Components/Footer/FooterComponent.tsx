import Image from "next/image";
import React from "react";
import logo from "@/app/assets/white-logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Data = [
  {
    title : 'information',
    txt : ['About Us' , 'information',  'Privacy Policy' , 'Terms & Conditions']
  },
  {
    title : 'Service',
    txt : ['About Us' , 'information',  'Privacy Policy' , 'Terms & Conditions']
  },
  {
    title : 'Extra',
    txt : ['About Us' , 'information',  'Privacy Policy' , 'Terms & Conditions']
  },
  {
    title : 'My Account',
    txt : ['About Us' , 'information',  'Privacy Policy' , 'Terms & Conditions']
  },
  {
    title : 'Useful Links',
    txt : ['About Us' , 'information',  'Privacy Policy' , 'Terms & Conditions']
  },
  {
    title : 'Our Offer',
    txt : ['About Us' , 'information',  'Privacy Policy' , 'Terms & Conditions']
  },
]

const FooterComponent = () => {
  return (
    <div className="mt-2xl shadow-inner">
      <div className="py-14">
        <div className="container">
        <div className="grid md:grid-cols-3 justify-between items-start gap-5 md:gap-[100px]">
          <div className="flex flex-col gap-5">
            <Image src={logo} alt="logo" width={190} height={24} />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt qui itaque quaerat possimus voluptas, illum ipsa, earum recusandae nobis dolore,</p>
          </div>
          <div className="flex flex-col gap-5">
            <h5 className="text-h5">Follow Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, animi? Reprehenderit</p>
            <div className="flex items-start justify-start gap-5">
              <FaFacebookF className="text-[20px] text-[#385C8E]"/>
              <FaTwitter className="text-[20px] text-[#03A9F4]"/>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h5 className="text-h5">Contact Us</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aspernatur ex laboru</p>
          </div>
        </div>
        </div>
          <div className="mt-lg shadow-inner">
          <div className="container grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 pt-7 ">
          {Data.map((item, index)=>{
            return (
              <div key={index}>
                <h5 className="text-h5">{item.title}</h5>
                {item.txt.map((ele , index)=>{
                  return (
                    <p className="opacity-95 my-5" key={index}>{ele}</p>
                  )
                })}
              </div>
            )
          })}
        </div>
          </div>
      </div>
    </div>
  );
};

export default FooterComponent;
