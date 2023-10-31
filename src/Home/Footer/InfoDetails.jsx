import Logo from '../../assets/Logo';
import { Link } from 'react-router-dom';
import {BiLogoGithub, BiLogoLinkedinSquare} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {SiFiverr} from 'react-icons/si'

function InfoDetails() {
  return (
    <section className='flex flex-col w-full bg-black font-semibold p-4 justify-center items-center gap-2 z-20'>
      <div className='flex justify-center items-center gap-4'>
        <Link to="https://github.com/cubanFree" target="_blank">
            <BiLogoGithub color='gray' size={30}/>
        </Link>
        <Link to="https://www.linkedin.com/in/alvaro-fuentes-590179249/" target="_blank">
            <BiLogoLinkedinSquare color='gray' size={30}/>
        </Link>
        <Link to="https://www.instagram.com/aa_fonts/" target="_blank">
            <AiFillInstagram color='gray' size={30}/>
        </Link>
        <Link to="https://www.fiverr.com/aafonts" target="_blank">
            <SiFiverr color='gray' size={55}/>
        </Link>
        <div className='flex justify-center items-center gap-2 border-1 border-gray-600 rounded-md p-2'>
          <BsWhatsapp color='gray' size={25}/>
          <span className='text-gray-400 md:text-lg text-sm'>+1 626 955 6895</span>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <Logo />
        <span className='text-gray-500'>© Create by ALVA Corp.</span>
      </div>
    </section>
  )
}

export default InfoDetails;