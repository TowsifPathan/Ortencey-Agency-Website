import React from 'react'
import Container from './Container'
import { Dropdown, Navbar, NavbarLink } from "flowbite-react";
import { Link } from 'react-router-dom';
import Button from './Button';
import { BiLogoFacebook } from "react-icons/bi";
import { PiBirdLight } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Nav = () => {
  return (
    <>


      <div className=' bg-parbel absolute top-0 w-[50%] h-[42px] left-0'>
      </div>
      <div className=' bg-white absolute top-[42px] w-[50%] h-[100px] right-0'>
      </div>
      <Container>
        <nav className=' relative'>
          <div className=' flex items-center justify-between bg-parbel w-full h-[42px] absolute rounded-[500px] '>
            <div className=' flex  items-center justify-between w-[50%] '>
              <p className=' text-white text-[14px] leading-[26px] font-dm'>Welcome to Ortencey Digital Market Agency</p>
              <div className=' flex items-center gap-[61px]'>
                <p className=' flex gap-[9px] items-center text-white text-[14px] leading-[26px] font-dm'><span className=' text-[20px] font-dm text-[#FE681E]'><FaPhone /></span>+88 ( 5548 ) 6548</p>
                <p className=' flex gap-[9px] items-center text-white text-[14px] leading-[26px] font-dm'><span className=' text-[26px] font-dm text-[#FE681E]'><IoIosMail /></span>infoyour@gmail.com</p>
              </div>
            </div>
            <div className=' flex gap-[46px]'>
              <Dropdown inline label={
                <div className=' flex gap-[5px] items-center'>
                  <img className=' w-full h-full' src=" LangIcon.png" alt="LangIcon" />
                  <Link className=' text-white text-[14px] leading-[26px] font-dm'>

                    English</Link>
                </div>
              } >
                <div className=' flex flex-col'>
                  <Link className=' py-[10px] px-8 text-[16px] font-pop font-normal' to='/homepage02'>Bangla</Link>
                  <Link className=' py-[10px] px-8  text-[16px] font-pop font-normal'>Hindi</Link>

                </div>
              </Dropdown>

              <div className=' flex items-center gap-[31px]'>
                <Link className=' text-[#95ACFF] text-[25px] hover:text-[#FE681E]'><BiLogoFacebook /></Link>
                <Link className=' text-[#95ACFF] text-[25px] hover:text-[#FE681E]'><FaLinkedinIn /></Link>
                <Link className=' text-[#95ACFF] text-[25px] hover:text-[#FE681E]'><PiBirdLight /></Link>
                <Link className=' text-[#95ACFF] text-[25px] hover:text-[#FE681E] mr-4'><FaYoutube /></Link>
              </div>
            </div>
          </div>
          <Navbar className=' w-full h-[100px] flex items-center  absolute top-[42px] left-0 p-0 pl-0 pr-0 rounded-bl-[500px] rounded-tl-[500px]'>
            <Navbar.Brand>
              <div className=' flex items-center gap-[15px]'>
                <Link to='/'><img src=' NavIcon.png' alt='navicon' /></Link>
                <Link className=' flex flex-col text-[22px] font-nun font-bold' to='/'>ORTENCEY<span className=' text-[15px] font-dm font-normal text-parbel'>Digital Marketing</span></Link>

              </div>
            </Navbar.Brand>
            <Navbar.Collapse>
              <div className="flex">
                <Dropdown
                  arrowIcon={true}
                  inline
                  label={
                    <NavbarLink className=' active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' >Home</NavbarLink>
                  }
                >
                  <div className=' flex flex-col'>
                    <Link className=' p-[1rem]  active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/homepage02'> Homepage02</Link>
                    <Link className=' p-[1rem]  active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/homepage03'> Homepage03</Link>

                  </div>
                </Dropdown>
                <Navbar.Toggle />
              </div>
              <Link className=' active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/about'>About</Link>
              <div className="flex">
                <Dropdown
                  arrowIcon={true}
                  inline
                  label={
                    <NavbarLink className=' active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal'>Services</NavbarLink>
                  }
                >
                  <div className=' flex flex-col'>
                    <Link className=' p-[1rem]  active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/services'> Services page</Link>
                    <Link className=' p-[1rem]  active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/servicesDetails'> Services Details</Link>

                  </div>
                </Dropdown>
                <Navbar.Toggle />
              </div>
              <div className="flex">
                <Dropdown
                  arrowIcon={true}
                  inline
                  label={
                    <NavbarLink className=' active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal'>Team</NavbarLink>
                  }
                >
                  <div className=' flex flex-col'>
                    <Link className=' p-[1rem]  active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/team'> Team page</Link>
                    <Link className=' p-[1rem]  active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/teamDetails'> Team Details</Link>

                  </div>
                </Dropdown>
                <Navbar.Toggle />
              </div>
              <div className="flex">
                <Dropdown
                  arrowIcon={true}
                  inline
                  label={
                    <NavbarLink className=' active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal'>Pages</NavbarLink>
                  }
                >
                  <div className=' flex flex-col'>
                    <Link className=' p-[1rem]  active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/portfolio'> Portfolio</Link>
                    <Link className=' p-[1rem]  active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/portfolioDetails'> Portfolio Details</Link>
                    <Link className=' p-[1rem]  active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/pricing'> Pricing</Link>
                    <Link className=' p-[1rem]  active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/testimonial'> Testimonial</Link>
                    <Link className=' p-[1rem]  active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/faq'> Faq</Link>

                  </div>
                </Dropdown>
                <Navbar.Toggle />
              </div>
              <div className="flex">
                <Dropdown
                  arrowIcon={true}
                  inline
                  label={
                    <NavbarLink className=' active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal'>Shop</NavbarLink>
                  }
                >
                  <div className=' flex flex-col'>
                    <Link className=' p-[1rem]  active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/shop'> Shop page</Link>
                    <Link className=' p-[1rem]  active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/shopDetails'> Shop Details</Link>

                  </div>
                </Dropdown>
                <Navbar.Toggle />
              </div>
              <div className="flex">
                <Dropdown
                  arrowIcon={true}
                  inline
                  label={
                    <NavbarLink className=' active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal'>News</NavbarLink>
                  }
                >
                  <div className=' flex flex-col'>
                    <Link className=' p-[1rem]  active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/blog'> Blog</Link>

                  </div>
                </Dropdown>
                <Navbar.Toggle />
              </div>
              <Link className=' active:text-[#FE681E] text-blc md:hover:text-[#FE681E] text-[16px] font-pop font-normal' to='/contact'>Contact US</Link>
            </Navbar.Collapse>
            <Button></Button>
          </Navbar>

        </nav>
      </Container>



    </>
  )
}

export default Nav