import React from 'react'
import Nav from './components/Nav'
import Homepage01 from './components/Homepage01'
import Homepage02 from "./components/Homepage02";
import Homepage03 from "./components/Homepage03";
import About from "./components/About";
import Services from "./components/Services";
import ServicesDetails from "./components/ServicesDetails";
import Team from "./components/Team";
import TeamDetails from "./components/TeamDetails";
import Pages from "./components/Pages";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import PortfolioDetails from "./components/PortfolioDetails";
import Shop from "./components/Shop";
import ShopDetails from "./components/ShopDetails";
import News from "./components/News";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Nav/> <Homepage01/></>
    },
    {
      path: "/about",
      element: <><Nav /> <About /></>
    },
    {
      path: "/homepage02",
      element: <><Nav /> <Homepage02 /></>
    },
    {
      path: "/homepage03",
      element: <><Nav /> <Homepage03 /></>
    },
    {
      path: "/services",
      element: <><Nav /> <Services /></>
    },
    {
      path: "/servicesDetails",
      element: <><Nav /> <ServicesDetails /></>
    },
    {
      path: "/team",
      element: <><Nav /> <Team /></>
    },
    {
      path: "/teamDetails",
      element: <><Nav /> <TeamDetails /></>
    },
    {
      path: "/pages",
      element: <><Nav /> <Pages /></>
    },
    {
      path: "/portfolio",
      element: <><Nav /> <Portfolio /></>
    },
    {
      path: "/portfolioDetails",
      element: <><Nav /> <PortfolioDetails /></>
    },
    {
      path: "/pricing",
      element: <><Nav /> <Pricing /></>
    },
    {
      path: "/testimonial",
      element: <><Nav /> <Testimonial /></>
    },
    {
      path: "/faq",
      element: <><Nav /> <Faq /></>
    },
    {
      path: "/shop",
      element: <><Nav /> <Shop /></>
    },
    {
      path: "/shopDetails",
      element: <><Nav /> <ShopDetails /></>
    },
    {
      path: "/news",
      element: <><Nav /> <News /></>
    },
    {
      path: "/blog",
      element: <><Nav /> <Blog /></>
    },
    {
      path: "/contact",
      element: <><Nav /> <Contact /></>
    },
  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App