import DentalImg from '../assets/icons/4.png'
import './imageSlider.css'

export default function DIIOptions({handleClose, show, setAllCatalogue}) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
 
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className='modal-header'>
          <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x w-9 h-9 modal-header-icon cursor-pointer" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </div>
        <div className='max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mt-12'>
          <div onClick={() => { handleClose(); setAllCatalogue("xray") }} className='card gap-4 cursor-pointer'>
            <img src={DentalImg} className='w-12 h-12' alt="Tooth"/>
            <h1 className='section-link-title'>X-Ray Devices</h1>
            <p>Explore our extensive range of budget-friendly dental chairs to support your dental services.</p>
          </div>
          <div onClick={() => { handleClose(); setAllCatalogue("scanners") }} className='card gap-4 cursor-pointer'>
            <img src={DentalImg} className='w-12 h-12' alt="Tooth"/>
            <h1 className='section-link-title'>Scanners</h1>
            <p>Explore our extensive range of budget-friendly dental chairs to support your practice.</p>
          </div>
        </div>
      </section>
    </div>
  )
}