import { useEffect, useState } from 'react';
import Papa from "papaparse";
import HeroLeftImage from './assets/hero_img.png'
import HourImage from './assets/hero_img_alt.png'
import Navbar from './components/navbar';
import ArrowImg from './assets/arrow.png'
import ToothImg from './assets/tooth.png'
import ClockImg from './assets/clock.png'
import BrushImg from './assets/calendar.jpg'
import WorkingHoursImg from './assets/working_hours.jpg'
import Footer from './components/footer';
import ImageSlider from './components/imageSlider';
import Loader from './components/loader';
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import { Slider } from './components/bannerSlider';
import axios from 'axios';
import DCIOptions from './components/dentalChairOptions';

export default function LandingPage(){
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([]);
  const [show, setIsShow] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [category, setCategory] = useState("")

  const showOptionModal = () => {
    setShowOptions(true)
  }

  const hideOptionModal = () => {
    setShowOptions(false)
  }

  const showOptionSelector = () => {
    showOptionModal()
  }

  const showModal = () => {
    setIsShow(true);
  };

  const hideModal = () => {
    setIsShow(false);
  };

  const showImageSlider = () => {
    showModal()
  }

  const getAllCatalogue = (category) => {
    setCategory(category)
    showImageSlider()
  };

  const handleViewBlogDetails = (blogInfo) => {
    const data = [
      { blog: blogInfo }
    ]
    history('/blog', { state: { data } });
  };

  const [sheetData, setSheetData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const sheetId = '1N6E4SXmY38agoGfr23YDg98wZlB2U_Z4d8xDevQlPM8';
      const apiKey = 'AIzaSyCtsfiTL9DQGycRaHn-I9NVjcVFDwg7IZ0';
      const range = 'Sheet1';
      
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
        );

        const data = response.data.values
        const headers = data[0];

        const items = data.slice(1).map(row => {
          return headers.reduce((acc, header, index) => {
            acc[header] = row[index];
            return acc;
          }, {});
        });

        setSheetData(items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   setIsLoading(false)
  // }, [data])

  useEffect(() => {
    window.scrollTo(0,0)

    $.fn.menumaker = function(options) {
      var cssmenu = $(this),
          settings = $.extend({
              format: "dropdown",
              sticky: false
          }, options);
      return this.each(function() {
          $(this).find(".button").on('click', function() {
              $(this).toggleClass('menu-opened');
              var mainmenu = $(this).next('ul');
              if (mainmenu.hasClass('open')) {
                  mainmenu.slideToggle().removeClass('open');
              } else {
                  mainmenu.slideToggle().addClass('open');
                  if (settings.format === "dropdown") {
                      mainmenu.find('ul').show();
                  }
              }
          });
          cssmenu.find('li ul').parent().addClass('has-sub');
          const multiTg = function() {
              cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
              cssmenu.find('.submenu-button').on('click', function() {
                  $(this).toggleClass('submenu-opened');
                  if ($(this).siblings('ul').hasClass('open')) {
                      $(this).siblings('ul').removeClass('open').slideToggle();
                  } else {
                      $(this).siblings('ul').addClass('open').slideToggle();
                  }
              });
          };
          if (settings.format === 'multitoggle') multiTg();
          else cssmenu.addClass('dropdown');
          if (settings.sticky === true) cssmenu.css('position', 'fixed');
          const resizeFix = function() {
              var mediasize = 1000;
              if ($(window).width() > mediasize) {
                  cssmenu.find('ul').show();
              }
              if ($(window).width() <= mediasize) {
                  cssmenu.find('ul').hide().removeClass('open');
              }
          };
          resizeFix();
          return $(window).on('resize', resizeFix);
      });
    };
  }, [])

  return (
    
    <>
    { isLoading ? 
      <Loader/>
      :
      <main className="page-wrapper">
      <div className='relative'>
        <Navbar/>
        <Slider />
        {/* <div className="scroll-down-block">
          <a href="#" className="scroll-down-inner w-inline-block rotate-180">
            <img src={ArrowImg} alt="Arrow" className="w-6 h-6 angle-down-icon dtransform"/>
          </a>
        </div> */}
        <div className='flex flex-col lg:flex-row md:flex-row gap-4'>
          <div className='hero-content-inner'>
            <h1 className='hero-content-header in-down mb-4'>Welcome to Transform-MDS.</h1>
            <h1 className='hero-content-header-sub hero-content-header-sub-alt in-down mb-8'>Your solution for all medical and dental equipment needs. Our
              catalogue includes the latest and highest-quality products, ensuring you have the most current and
              reliable tools for your practice.  
            </h1>
            <a target="blank" href="https://calendly.com/thekid0450/book-consult" className='button-green-primary in-down'>Dental Solution</a>
          </div>
        </div>
      </div>
      {/* <div className='service-section'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='section-header'>Enjoy all dental service indentus chamber</h1>
          <p className='section-p'>The release sheets containing passages and more recently unchanged easy versions release software.</p>
          <div className='max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 mt-12'>
            <div className='card gap-4 cursor-pointer'>
              <img src={ToothImg} className='w-12 h-12' alt="Tooth"/>
              <h1 className='section-link-title'>Oral Surgery</h1>
              <p>Release sheets containing passages more recently unchange easy versions and release software.</p>
            </div>
            <div className='card gap-4'>
              <img src={ToothImg} className='w-12 h-12' alt="Tooth"/>
              <h1 className='section-link-title'>Oral Surgery</h1>
              <p>Release sheets containing passages more recently unchange easy versions and release software.</p>
            </div>
            <div className='card gap-4'>
              <img src={ToothImg} className='w-12 h-12' alt="Tooth"/>
              <h1 className='section-link-title'>Oral Surgery</h1>
              <p>Release sheets containing passages more recently unchange easy versions and release software.</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className='about-us-section m-auto flex justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='section-header'>Our catalogue</h1>
          <p className='section-p'>Explore our comprehensive catalogue of medical and dental equipment at Transform-MDS.</p>
          <div className='max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mt-12'>
            <div onClick={() => showOptionSelector() } className='card gap-4 cursor-pointer'>
              <img src={ToothImg} className='w-12 h-12' alt="Tooth"/>
              <h1 className='section-link-title'>Dental Chairs</h1>
              <p>Explore our extensive range of budget-friendly dental chairs to support your dental services.</p>
            </div>
            <div onClick={() => { getAllCatalogue("autoclave") }} className='card gap-4 cursor-pointer'>
              <img src={ToothImg} className='w-12 h-12' alt="Tooth"/>
              <h1 className='section-link-title'>Autoclaves</h1>
              <p>Explore our extensive range of budget-friendly dental chairs to support your practice.</p>
            </div>
            <div onClick={() => { getAllCatalogue("xray") }} className='card gap-4 cursor-pointer'>
              <img src={ToothImg} className='w-12 h-12' alt="Tooth"/>
              <h1 className='section-link-title'>X-Ray Machines</h1>
              <p>Explore our extensive range of budget-friendly products to support your medical and dental services.</p>
            </div>
            <div onClick={() => { getAllCatalogue("other") }} className='card gap-4 cursor-pointer'>
              <img src={ToothImg} className='w-12 h-12' alt="Tooth"/>
              <h1 className='section-link-title'>Other Equipment</h1>
              <p>Explore our extensive range of budget-friendly medical and dental supplies to support your medical and dental services.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='appointment-section m-auto flex justify-center'>
        <div className='max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md grid grid-cols-2 gap-4'>
          <div className='appointment-form-block'>
            <h1 className='section-header section-header-alt'>Book an appointment</h1>
            <p className='section-p section-header-alt'>Schedule an appointment with us today by selecting a convenient time, and our team will confirm your booking promptly.</p>
            
            <a target="blank" href="https://calendly.com/thekid0450/book-consult" className='flex flex-row gap-4 button-green-primary justify-between mt-8'>
              <h1>Book appointment now</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
          <div className='flex justify-center p-4'>
            <img className='dtransform appointment-img-height b-radius' src={BrushImg} alt="Brush" />
          </div>
          
        </div>
      </div>
      <div className='about-us-section m-auto flex justify-center'>
        <div className='max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8'>
          <div className="hero-image-inner flex justify-center items-center p-4">
            <img className="hero-left-image angle-down-icon dtransform" src={HourImage} alt="Hero Image"/>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-2 top-block'>
              <img src={ClockImg} alt="Clock" className='w-5 h-5'/>
              <div>8 hours available</div>
            </div>
            <h1 className='section-header section-header-alt'>Transform-MDS has the latest and highest-quality products.</h1>
            <p className='section-p section-header-alt'>Schedule an appointment with us today by selecting a convenient time, and our team will confirm your booking promptly.</p>
            <a target="blank" href="https://calendly.com/thekid0450/book-consult" className='flex flex-row gap-4 button-green-primary justify-between mt-8'>
              <h1>Book appointment now</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
     
      
      <div className='working-hours-section'>
        <div className='max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md grid grid-cols-1 relative m-auto'>
          <div className='img-bg relative'>
            <div className='working-hours-inner'>
              <h1 className='working-hour-title'>Working hours</h1>
              <p className='working-text'>Standard working hours.</p>
              <div className='work-schedule-wrapper'>
                <div className='single-work-schedule'>
                  <p>Sunday</p>
                  <p className='red-color'>closed</p>
                </div>
                <div className='single-work-schedule'>
                  <p>Monday</p>
                  <p>9.00 am - 5.00 pm</p>
                </div>
                <div className='single-work-schedule'>
                  <p>Tuesday</p>
                  <p>9.00 am - 5.00 pm</p>
                </div>
                <div className='single-work-schedule'>
                  <p>Wednesday</p>
                  <p>9.00 am - 5.00 pm</p>
                </div>
                <div className='single-work-schedule'>
                  <p>Thursday</p>
                  <p>9.00 am - 5.00 pm</p>
                </div>
                <div className='single-work-schedule'>
                  <p>Friday</p>
                  <p>9.00 am - 5.00 pm</p>
                </div>
                <div className='single-work-schedule last-item'>
                  <p>Saturday</p>
                  <p className='red-color'>closed</p>
                </div>
              </div>
              <div className="booking-button-block">
                <a target="blank" href="https://calendly.com/thekid0450/book-consult"  className="booking-button w-inline-block">
                  <div className="w-full">Booking Now</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className='call-block'>
              <div className='phone-bg'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 special-color">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              
              <div className="call-number-block">
                <div className="call-text">Call Now:</div>
                <a href="tel:+12345678901" className="call-number-link">+233 501 289 226</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='blog-section flex justify-center'>
        <div className='max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md gap-4'>
          <h1 className='section-header section-header-alt section-header-max-width'>Latest Article From Our <span className='special-color'>Blog Post</span></h1>
          <div className='grid grid-cols-3 gap-4 mt-8'>

            {sheetData?.map((blogItem, index) => (
              <div key={index} className='flex flex-col gap-4'>
                <img src={blogItem.image} alt="article img" className='media-fit-image'/>
                <div className='flex justify-between items-center'>
                  <h1 className='date-text'>{blogItem.date}</h1>
                  <h1>By: {blogItem.author}</h1>
                </div>
                <h1 className='blog-title'>{blogItem.title}</h1>
                <p>{blogItem.snippet}</p>
                <button onClick={() => handleViewBlogDetails(blogItem)} className='blog-details-link'>
                  Read more
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
      <ImageSlider show={show} handleClose={hideModal} category={category}/>
      <DCIOptions show={showOptions} handleClose={hideOptionModal} setAllCatalogue={getAllCatalogue} />
    </main>
    }
    
    </>
  );
}