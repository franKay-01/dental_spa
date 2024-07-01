import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import WorkingHoursImg from './assets/working_hours.jpg'
import Footer from './components/footer';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Loader from './components/loader';

export default function BlogPage(){
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const history = useNavigate();
  const location = useLocation();

  const formatText = (text) => {
    return text.split('\n').map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    ));
  }

  useEffect(() => {
    window.scrollTo(0,0)
    const { state } = location;
    if (state === null){
      return history('/')
    }
    const { data } = state;
    const { blog } = data[0];

    setData(blog)
  }, [])

  useEffect(() => {
    setIsLoading(false)
  }, [data])

  return (
    <>
    { isLoading ? 
      <Loader/>
      :
      <main className="page-wrapper-alt">
        <Navbar/>

        <div className='blog-details-section flex justify-center mt-12'>
          <div className='max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md gap-4'>
            <div className='flex flex-row items-center gap-4'>
              <Link to={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
              </Link>
              <h1 className='section-header section-header-alt-pro section-header-alt'>{data.title}</h1>
            </div>
            
            <div className='grid grid-cols-1 gap-4 mt-8'>
              <img src={data.image} alt="article img" className='media-fit-image'/>
              <div className='flex justify-between items-center'>
                <h1 className='date-text'>{data.date}</h1>
                <h1>By: {data.author}</h1>
              </div>
              <h1 className='blog-title'>{data.snippet}</h1>
              <p>{formatText(data.story)}</p>
            </div>
          </div>
        </div>
        <Footer/>
      </main>
    }
      
    </>
  );
}