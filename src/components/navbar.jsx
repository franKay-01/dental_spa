import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Logo from "../logo_alt.png"
import PhoneImg from "../assets/phone.png"

const navigation = [
  { name: "Pension", href: "/pension", current: false },
  { name: "Welfare", href: "/welfare", current: false },
  { name: "Loan", href: "/loan", current: false },
];

const mobile_navigation = [
  { name: "Pension", href: "#/pension", current: false },
  { name: "Welfare", href: "#/welfare", current: false },
  { name: "Loan", href: "#/loan", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent nav-bg">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-24">
            <div className="relative grid grid-cols-2 items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center mt-4 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-9 w-9" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-12 w-12" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="justify-center flex-shrink-0 flex sm:justify-start">
                <h6 className="uppercase font-semibold text-black flex items-center justify-center md:justify-start">
                  <Link to={'/'}>
                    <img alt="" className="w-60 p-4" src={Logo} />
                  </Link>
                </h6>
              </div>
              <div className="hidden lg:flex lg:justify-end lg:items-center lg:gap-4 lg:w-auto">
                <div className="flex flex-row gap-1">
                  <img src={PhoneImg} className="w-7 h-7" alt="phone" />
                  <h1 className="hero-content-header-sub">+233 501 289 226</h1>
                </div>
                <a target="blank" href="https://calendly.com/thekid0450/book-consult" spy={true} smooth={true}
                  className={"button-green-primary button-margin-left"}
                >
                  <span className='button-text'>Book an appointment</span>
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden mobile-nav-bg">
            <div className="px-2 pt-2 pb-3">
              <Disclosure.Button className="inline-flex place-x mt-8 items-center justify-right p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon
                    className="block h-12 w-12 text-white"
                    aria-hidden="true"
                  />
                ) : (
                  <MenuIcon
                    className="block h-12 w-12 text-white"
                    aria-hidden="true"
                  />
                )}
              </Disclosure.Button>
              <div className="mt-24"></div>
              {mobile_navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block mobile-nav-text px-3 py-2"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
