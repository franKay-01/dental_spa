import { useState } from "react";
import Logo from "../logo.png"
import { Link } from "react-router-dom";

export default function Footer(){
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="footer-inner">
      <div className="flex flex-col lg:flex-row md:flex-row justify-around">
        <div className="flex flex-col gap-4">
          <img className="w-52" src={Logo} />
          <div className="flex flex-col gap-2">
            <Link to={'/privacy'} className="footer-text underline">Privacy policy</Link>
          </div>
        </div>
        <div className="flex flex-col mt-4 lg:mt-0 md:mt-0">
          <h1 className="footer-title">
            Contact Us
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <h1 className="footer-text">+233 501 289 226</h1>
            </div>

            <div className="flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <div className="flex flex-col">
                <h1 className="footer-text"><a href="mailto:sales.transformdental@gmail.com">sales.transformdental@gmail.com</a></h1>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <div className="flex flex-col gap-1">
                <h1 className="footer-text">17 Garden Road</h1>
                <h1 className="footer-text">East Legon</h1>
                <h1 className="footer-text">Accra, Ghana.</h1>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-9 h-9" viewBox="0 0 48 48">
                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-9 h-9" viewBox="0 0 64 64">
                <linearGradient id="HOaxCdew_So_FZGl4pPQ6a_bG29Ckcdp6YP_gr1" x1="32" x2="32" y1="9" y2="55" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#HOaxCdew_So_FZGl4pPQ6a_bG29Ckcdp6YP_gr1)" d="M49,55H15c-3.309,0-6-2.691-6-6V15c0-3.309,2.691-6,6-6h34c3.309,0,6,2.691,6,6v34	C55,52.309,52.309,55,49,55z M15,11c-2.206,0-4,1.794-4,4v34c0,2.206,1.794,4,4,4h34c2.206,0,4-1.794,4-4V15c0-2.206-1.794-4-4-4H15	z"></path><linearGradient id="HOaxCdew_So_FZGl4pPQ6b_bG29Ckcdp6YP_gr2" x1="32" x2="32" y1="13" y2="51" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#HOaxCdew_So_FZGl4pPQ6b_bG29Ckcdp6YP_gr2)" d="M26.978,22l14.108,20h-3.063L23.914,22H26.978z M51,15v34c0,1.1-0.9,2-2,2H15	c-1.1,0-2-0.9-2-2V15c0-1.1,0.9-2,2-2h34C50.1,13,51,13.9,51,15z M44.914,44L34.789,29.613L43,20h-2.5l-6.841,8.009L28.022,20	h-7.937l9.222,13.103L20,44h2.5l7.937-9.292L36.978,44H44.914z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-9 h-9" viewBox="0 0 48 48">
                <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-9 h-9" viewBox="0 0 48 48">
                <path fill="#f44336" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path><path fill="#fff" d="M36.499,25.498c-0.276-0.983-1.089-1.758-2.122-2.021C32.506,23,24,23,24,23s-8.506,0-10.377,0.478 c-1.032,0.263-1.846,1.037-2.122,2.021C11,27.281,11,31,11,31s0,3.719,0.501,5.502c0.276,0.983,1.089,1.758,2.122,2.021 C15.494,39,24,39,24,39s8.505,0,10.377-0.478c1.032-0.263,1.846-1.037,2.122-2.021C37,34.719,37,31,37,31S37,27.281,36.499,25.498z"></path><path fill="#f44336" d="M16.333 37L14.667 37 14.667 26.655 13 26.655 13 25 18 25 18 26.655 16.333 26.655zM23 37h-1.5l-.167-1.132C20.675 36.579 19.892 37 19.283 37c-.533 0-.908-.231-1.092-.653C18.083 36.083 18 35.687 18 35.092V27.5h1.667v7.757c.042.24.217.33.433.33.333 0 .867-.363 1.233-.843V27.5H23V37zM35 32.663v-2.701c0-.777-.192-1.338-.533-1.702-.458-.496-1.117-.76-1.942-.76-.842 0-1.492.264-1.967.76C30.2 28.623 30 29.218 30 29.995v4.593c0 .768.225 1.313.575 1.669C31.05 36.752 31.7 37 32.567 37c.858 0 1.533-.256 1.983-.785.2-.231.333-.496.392-.785C34.95 35.298 35 34.943 35 34.522h-1.667v.661c0 .38-.375.694-.833.694s-.833-.314-.833-.694v-2.52H35zM31.667 29.392c0-.388.375-.694.833-.694s.833.306.833.694v2.123h-1.667V29.392zM28.783 28.492c-.208-.646-.717-1.001-1.35-1.01-.808-.008-1.142.414-1.767 1.142V25H24v12h1.5l.167-1.034C26.192 36.611 26.875 37 27.433 37c.633 0 1.175-.331 1.383-.977.1-.348.175-.67.183-1.399V30.28C29 29.461 28.892 28.84 28.783 28.492zM27.333 34.41c0 .869-.2 1.167-.65 1.167-.258 0-.75-.174-1.017-.439v-5.686c.267-.265.758-.521 1.017-.521.45 0 .65.273.65 1.142V34.41z"></path><path fill="#fff" d="M15 9l1.835.001 1.187 5.712.115 0 1.128-5.711 1.856-.001L19 16.893V21h-1.823l-.003-3.885L15 9zM21.139 14.082c0-.672.219-1.209.657-1.606.437-.399 1.024-.6 1.764-.601.675 0 1.225.209 1.655.63.429.418.645.96.645 1.622l.003 4.485c0 .742-.209 1.326-.63 1.752C24.812 20.788 24.234 21 23.493 21c-.714 0-1.281-.221-1.712-.656-.428-.435-.64-1.023-.641-1.76l-.003-4.503L21.139 14.082 21.139 14.082zM22.815 18.746c0 .236.057.423.178.553.115.128.279.193.495.193.221 0 .394-.066.524-.201.129-.129.196-.314.196-.547l-.003-4.731c0-.188-.069-.342-.201-.459-.131-.116-.305-.175-.519-.175-.199 0-.361.06-.486.176-.124.117-.186.271-.186.459L22.815 18.746zM32 12v9h-1.425l-.227-1.1c-.305.358-.622.63-.953.815C29.067 20.901 28.747 21 28.437 21c-.384 0-.671-.132-.866-.394-.195-.259-.291-.65-.291-1.174L27.276 12h1.653l.004 6.825c0 .204.036.355.106.449.066.09.183.14.335.14.124 0 .278-.062.46-.186.188-.122.358-.281.512-.471L30.344 12 32 12z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-0 md:mt-0">
          <h1 className="footer-title">
            Newsletter
          </h1>
          <div className="flex flex-col gap-4">
            <h1 className="footer-text w-52">Be the first to know about any updates with regards to cutting-edge dental innovations.</h1>
            <form className="flex flex-col gap-4" onSubmit={e => submitNewsletter(e)}>
              <input onChange={handleTextChange} value={email} type='email' name="Emails" placeholder='Email address' className='form-field w-64 focus:border-purple-800'/>
              {
                isLoading ? 
                <div className='flex flex-row gap-4 footer-green-primary justify-between w-3/5'>
                  <h1>... loading</h1>
                </div>:
                <button type="submit" className='flex flex-row gap-4 footer-green-primary justify-between w-3/5'>
                  <h1>Susbcribe now</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              }
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}