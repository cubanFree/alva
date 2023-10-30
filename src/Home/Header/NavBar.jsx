import React from "react";
import Logo from "../../assets/Logo";
import { GoChevronRight } from "react-icons/go";

export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Contact"
  ];

  // Scroll to About and Contact
  const scrollToElement = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollMenu = (item) => {
    setIsMenuOpen(false);
    
    setTimeout(() => {
      scrollToElement(item.toLowerCase());
    }, 0);
  };

  return (
    <nav className="bg-opacity-10 bg-black z-20 w-full relative border-b-1 border-gray-900">

      <ul className="justify-between flex text-gray-300 md:px-[15%] px-[10%] py-2 m-0 relative">
        <li className="md:hidden flex justify-start z-20">
          <div className="flex justify-center items-center">
            <GoChevronRight className={"cursor-pointer" + (isMenuOpen ? " rotate-90" : "")} onClick={() => setIsMenuOpen(!isMenuOpen)} size={30} />
            {isMenuOpen && (
              <div className="flex flex-col gap-2 text-lg font-semibold absolute bottom-[-4rem] left-0 min-w-[30%] bg-gray-800 text-end p-3 rounded-e-lg">
                {menuItems.map((item, index) => (
                  <span 
                    key={`${item}-${index}`}
                    className="max-w-[100%] cursor-pointer relative"
                    onClick={(e) => {
                      e.preventDefault(); 
                      handleScrollMenu(item)
                    }}>
                      {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </li>

        <li className="flex md:justify-start justify-content-end">
          <div className="flex justify-center items-center">
            <Logo />
            <span className="font-bold text-inherit text-xl">ALVA</span>
          </div>
        </li>

        <li className="hidden md:flex">
          <div className="flex justify-center items-center gap-3 font-semibold">
            <span 
              className="cursor-pointer hover:text-gray-400" 
              onClick={(e) => {
                e.preventDefault(); 
                scrollToElement("contact")
                }}
                >
                  Contact
            </span>
          </div>
        </li>
      </ul>

    </nav>
  );
}
