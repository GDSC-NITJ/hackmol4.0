import { useState, useEffect } from "react";
import Link from "next/link";
// import '../styles/Navbar.css';

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div>

      <div expand="md" fixed="top" >
        <div className="heading__container" href="/">
          <h2 className="heading">HACKMOL 5.0</h2>
        </div>

        <nav className="w-full bg-purple shadow border-2 border-black sticky top-0 ">
          <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 md:py-3 ">
            <div>
              <div className="flex items-center justify-between py-1 md:py-5 md:block">
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="md:hidden flex items-center gap-2" onClick={() => setNavbar(!navbar)} >
                  <h2 className=" text-lg md:text-2xl font-bold text-white"   >Menu</h2>
                  {navbar ? (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.75 13.125L10 6.875L16.25 13.125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.25 6.875L10 13.125L3.75 6.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  )}
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-4 mt-4 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                  }`}
              >
                <ul className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-extrabold text-white  font-bold  md:text-xl hover:text-indigo-200">
                    <Link
                      href={'#about'}
                      scroll={false}
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li className="text-white text-extrabold font-bold  md:text-xl hover:text-indigo-200">
                    <Link
                      href={'#rules'}
                      scroll={false}
                    >
                      INFO
                    </Link>
                  </li>
                  {/* <li className="text-white text-extrabold font-bold  md:text-xl hover:text-indigo-200">
                    <Link
                      href={'#schedule'}
                      scroll={false}
                    >
                      SCHEDULE
                    </Link>
                  </li>  */}
                  {/* <li className="text-white text-extrabold font-bold  md:text-xl hover:text-indigo-200">
                    <Link
                      href={'#prizes'}
                      scroll={false}
                    >
                      PRIZES
                    </Link>
                  </li> */}

                  <li className="text-white text-extrabold font-bold  md:text-xl hover:text-indigo-200">
                    <Link
                      href={'#contact'}
                      scroll={false}
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
export default NavBar;
