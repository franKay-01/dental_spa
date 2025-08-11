import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import ChairImg from './assets/icons/1.png'
import AutoClaveImg from './assets/icons/2.png'
import DentalImg from './assets/icons/4.png'
import OtherImg from './assets/icons/3.png'
import ToothImg from './assets/tooth.png'
import BrushImg from './assets/calendar.jpg'
import Footer from './components/footer';
import ImageSlider from './components/imageSlider';
import Loader from './components/loader';
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import { Slider } from './components/bannerSlider';
import axios from 'axios';
import DCIOptions from './components/dentalChairOptions';
import DIIOptions from './components/dentalImagingOptions';

export default function LandingPage(){
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [show, setIsShow] = useState(false)
  const [showImagingOptions, setShowImagingOptions] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [category, setCategory] = useState("")
  const [email, setEmail] = useState("")

  const handleTextChange = e => {
    setEmail(e.target.value)
  }

  const submitNewsletter = e => {
    e.preventDefault()
    setIsLoading(true)

    if (email === "") {
      setIsLoading(false)
      return
    }

    const formElement = document.querySelector("form")
    const formData = new FormData(formElement)

    fetch('https://script.google.com/macros/s/AKfycbwxLmDajOkPTlCTTaEAoOCfNxr4WocitlsMZDkGbu5qVuznhXYmipsJj4E6k16SSmvj0A/exec',{
      method: "POST",
      body: formData
    }).then(res => {
      const { status } = res;
      if (status === 200) {
        setEmail("")
        setIsLoading(false)
      }
    }).catch(error => console.log(error))
  }

  const showImagingOptionModal = () => {
    setShowImagingOptions(true)
  }

  const hideImagingOptionModal = () => {
    setShowImagingOptions(false)
  }

  const showImagingOptionSelector = () => {
    showImagingOptionModal()
  }

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
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const sheetId = process.env.REACT_APP_SHEET_KEY
  //     const apiKey = process.env.REACT_APP_MASTER_KEY;
  //     const range = 'Sheet1';
      
  //     try {
  //       const response = await axios.get(
  //         `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
  //       );

  //       const data = response.data.values
  //       const headers = data[0];

  //       const items = data.slice(1).map(row => {
  //         return headers.reduce((acc, header, index) => {
  //           acc[header] = row[index];
  //           return acc;
  //         }, {});
  //       });

  //       setSheetData(items);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    // window.scrollTo(0,0)

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
          <div className='flex flex-col lg:flex-row md:flex-row gap-4 invisible banner-height'>
            <div className='hero-content-inner'>
              <h1 className='hero-content-header in-down mb-4'>Welcome to Transform-MDS.</h1>
              <h1 className='hero-content-header-sub hero-content-header-sub-alt in-down mb-8'>
              Your solution for all medical and dental equipment needs. Our
                catalogue includes the latest and highest-quality products, ensuring you have the most current and
                reliable tools for your practice.  
              </h1>
            </div>
          </div>
        </div>
      <div className='service-section'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='section-header'>Welcome to Transform-MDS.</h1>
          <p className='section-p'>Your solution for all medical and dental equipment needs. Our
                catalogue includes the latest and highest-quality products, ensuring you have the most current and
                reliable tools for your practice.  </p>
        </div>
      </div>
      <div className='about-us-section m-auto flex justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='section-header'>Our catalogue</h1>
          <p className='section-p'>Explore our comprehensive catalogue of medical and dental equipment at Transform-MDS.</p>
          <div className='max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mt-8 p-8'>
            <div onClick={() => showOptionSelector() } className='card gap-4 cursor-pointer'>
              <img src={ChairImg} className='w-14 h-14' alt="Tooth"/>
              <h1 className='section-link-title'>Dental Chairs</h1>
              <p>Explore our extensive range of budget-friendly dental chairs to support your dental services.</p>
            </div>
            <div onClick={() => { getAllCatalogue("autoclave") }} className='card gap-4 cursor-pointer'>
              <img src={AutoClaveImg} className='w-12 h-12' alt="Tooth"/>
              <h1 className='section-link-title'>Autoclaves</h1>
              <p>Explore our extensive range of budget-friendly dental chairs to support your practice.</p>
            </div>
            <div onClick={() => { showImagingOptionSelector() }} className='card gap-4 cursor-pointer'>
              <img src={DentalImg} className='w-12 h-12' alt="Tooth"/>
              <h1 className='section-link-title'>Dental Imaging</h1>
              <p>Explore our extensive range of budget-friendly products to support your medical and dental services.</p>
            </div>
            <div onClick={() => { getAllCatalogue("other") }} className='card gap-4 cursor-pointer'>
              <img src={OtherImg} className='w-12 h-12' alt="Tooth"/>
              <h1 className='section-link-title'>Other Equipment</h1>
              <p>Explore our extensive range of budget-friendly medical and dental supplies to support your medical and dental services.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='appointment-section m-auto flex justify-center'>
        <div className='max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
          <div className='appointment-form-block'>
            <h1 className='section-header section-header-alt section-header-subs'>Book for upcoming events</h1>
            <p className='section-p section-header-alt'>Schedule for upcoming events with us today by selecting a convenient time, and our team will confirm your booking promptly.</p>
            
            <a target="blank" href="https://calendly.com/invataafrica-info/30min" className='flex flex-row gap-4 button-green-primary hover:bg-[#5a48e0] justify-between mt-8'>
              <h1 className='!text-[#fff]'>Book now</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
          <div className='flex justify-center p-4'>
            <img className='dtransform appointment-img-height b-radius' src={BrushImg} alt="Brush" />
          </div>
          <div className='appointment-form-block'>
            <h1 className='section-header section-header-alt section-header-subs'>Newsletter</h1>
            <p className='section-p section-header-alt'>Subscribe to our monthly newsletter</p>

            <form className="flex flex-col gap-4 mt-8" onSubmit={e => submitNewsletter(e)}>
              <input onChange={handleTextChange} value={email} type='email' name="Emails" placeholder='Email address' className='form-field focus:border-purple-800'/>
              {
                isLoading ? 
                <div className='flex flex-row gap-4 footer-green-primary justify-between w-3/5'>
                  <h1>... loading</h1>
                </div>:
                <button type="submit" className='flex flex-row hover:bg-[#5a48e0] gap-4 footer-green-primary justify-between '>
                  <h1 className='!text-[#fff]'>Susbcribe now</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              }
              
            </form>
          </div>
        </div>
      </div>
      {/* <div className='about-us-section m-auto flex justify-center'>
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
            <a target="blank" href="https://calendly.com/invataafrica-info/30min" className='flex flex-row gap-4 button-green-primary justify-between mt-8'>
              <h1>Book appointment now</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div> */}
      
      {/* BANNER INCOMING */}
      {/* <div className='working-hours-section'>
        <div className='max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md grid grid-cols-1 relative m-auto'>
          <div className='img-bg relative'>
          
          </div>
        </div>
      </div> */}
      {/* <div className='blog-section flex justify-center p-8'>
        <div className='max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md gap-4'>
          <h1 className='section-header section-header-alt section-header-max-width'>Latest Article From Our <span className='special-color'>Blog Post</span></h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8'>

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
      </div> */}
      <Footer/>
      <ImageSlider show={show} handleClose={hideModal} category={category}/>
      <DCIOptions show={showOptions} handleClose={hideOptionModal} setAllCatalogue={getAllCatalogue} />
      <DIIOptions show={showImagingOptions} handleClose={hideImagingOptionModal} setAllCatalogue={getAllCatalogue} />
    </main>
    }
    
    </>
  );
}