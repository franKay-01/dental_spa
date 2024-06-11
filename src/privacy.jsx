import Navbar from './components/navbar';
import Footer from './components/footer';
import './index.scss'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function BlogPage(){

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <main className="page-wrapper-alt">
        <Navbar/>

        <div className='blog-details-section flex justify-center mt-12'>
          <div className='max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md gap-4'>
            <div className='flex flex-row gap-4 items-center'>
              <Link to={'/'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
              </Link>
              <h1 className='section-header section-header-alt-pro section-header-alt'>TRANSFORM-MDS PRIVACY POLICY</h1>
            </div>
            <div className='grid grid-cols-1 gap-4 mt-8'>
              <div className='flex justify-between items-center'>
                <h1 className='date-text'>LAST UPDATE: MAY 31, 2024</h1>
              </div>
              <h1 className='blog-title'>Background</h1>
              <p>
                At Transform-MDS, privacy and data protection are essential to us. We are committed to safeguarding your privacy and ensuring the security and confidentiality of your personal information. To provide optimal products and services, we lawfully collect, process, and securely store your personal data, refraining from any unlawful disclosure to third parties.
                <br/><br/>This Privacy Policy outlines the data processing practices at Transform-MDS. For inquiries regarding your personal information or concerns about our practices, please contact our Privacy Officer via email at [contact@email.com]. We encourage you to review this Policy periodically, as Transform-MDS reserves the right to modify its terms at its sole discretion.
              </p>
              <h1 className='blog-title'>Scope of This Privacy Policy</h1>
              <p>
                This Privacy Policy applies to:
                <ul className="bullet-ul">
                  <li>
                    <span className="flex flex-col gap-2">Individuals who are customers and/or users.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Organizations that are customers and/or users.</span>
                  </li>
                  <li><span className="flex flex-col gap-2">All employees and job applicants or prospective employees of Transform-MDS.</span></li>
                  <li><span className="flex flex-col gap-2">All suppliers, partners, and service providers of Transform-MDS.</span></li>
                </ul>
              </p>
              <h1 className='blog-title'>Personal Information We Collect</h1>
              <p>The types of information we collect and how we gather it may vary based on the services you use, your interactions with Transform-MDS, and data obtained from third parties with consent to share it with us. We process your personal data for the following purposes:</p>
              <p>
                Contract Performance:
                <ul className="bullet-ul">
                  <li>
                    <span className="flex flex-col gap-2">Processing orders and delivering services.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Managing billing and payments.</span>
                  </li>
                  <li><span className="flex flex-col gap-2">Responding to inquiries and concerns.</span></li>
                </ul>
              </p>
              <p>Service Improvement:
                <ul className="bullet-ul">
                  <li>
                    <span className="flex flex-col gap-2">Analyzing and enhancing our support services.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Monitoring service usage for quality assurance.</span>
                  </li>
                  <li><span className="flex flex-col gap-2">Customizing our services for a better client experience.</span></li>
                </ul>
              </p>
              <p>Marketing and Personalization:
                <ul className="bullet-ul">
                  <li>
                    <span className="flex flex-col gap-2">Informing clients about new services and events.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Tailoring messages based on client preferences and past interactions.</span>
                  </li>
                </ul>
              </p>
              <p>Research and Analytics:
                <ul className="bullet-ul">
                  <li>
                    <span className="flex flex-col gap-2">Conducting market research and analyzing trends.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Ensuring privacy and data protection in all analytics.</span>
                  </li>
                </ul>
              </p>
              <p>Fraud Prevention and Security:
                <ul className="bullet-ul">
                  <li>
                    <span className="flex flex-col gap-2">Detecting and preventing fraud, misuse, or damage to our services.</span>
                  </li>
                </ul>
              </p>
              <h1 className='blog-title'>Information We May Collect</h1>
              <p>
                Depending on the nature of your interaction with Transform-MDS, we may collect the following information, where applicable:
                <ul className="bullet-ul">
                  <li>
                    <span className="flex flex-col gap-2">Contact Information: Name, address, phone number, email address.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Service Usage Data: Service-related information.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Account Information: Payment details, subscriptions, account numbers.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Credentials: Passwords and security information.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Other non-public personal customer information we collect includes information we receive from applications or other forms submitted to Transform-MDS.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Credentials: Passwords and security information.</span>
                  </li>
                </ul>
              </p>
              <h1 className='blog-title'>How We Use Your Personal Information</h1>
              <p>We utilize your data for purposes including but not limited to:
                <ul className="bullet-ul">
                  <li>
                    <span className="flex flex-col gap-2">Service Provision: Processing orders, billing, and client care.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Service Improvement: Enhancing our services based on usage patterns.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Marketing: Informing you about products and events.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Research and Analytics: Analyzing trends for service enhancement.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Security: Protecting against fraud and misuse.</span>
                  </li>
                </ul>
              </p>
              <h1 className='blog-title'>How We Protect Your Personal Information</h1>
              <p className=''>Transform-MDS employs rigorous security measures to safeguard your data from unauthorized access, alteration, loss, disclosure, or destruction. However, internet communications (e.g., emails) are not entirely secure, and we cannot be responsible for external breaches.</p>
              <h1 className='blog-title'>Sharing Your Personal Information</h1>
              <p>
                We may share your information with:
                <ul className="bullet-ul">
                  <li>
                    <span className="flex flex-col gap-2">Partners, suppliers, or agents for service delivery.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Service providers engaged by Transform-MDS.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Fraud prevention agencies.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Law enforcement or government bodies as required by law.</span>
                  </li>
                  <li>
                    <span className="flex flex-col gap-2">Third parties for online advertising.</span>
                  </li>
                </ul>
              </p>
              <h1 className='blog-title'>Data Retention</h1>
              <p className=''>We retain your data only as long as necessary for lawful processing.</p>

              <h1 className='blog-title'>Your Privacy Rights</h1>
              <p className=''>You can request access to your data or make corrections by contacting our Customer Care Service Team. You may also lodge complaints with the Data Protection Commission if your privacy rights are violated. You have the right to withdraw your consent, which may impact our ability to fulfil contractual obligations.</p>

              <h1 className='blog-title'>Changes To This Policy</h1>
              <p>This Privacy Policy is effective as of 1st June 2024. We may update it to reflect changes in our practices, legislation, or website enhancements. 
                Material changes will be prominently communicated on our website.</p>
            </div>
          </div>
        </div>
        <Footer/>
      </main>
    </>
  );
}