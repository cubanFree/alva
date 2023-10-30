import Fondo from '../../assets/fondo.jpg';
import ImgAbout from './ImgAbout';
import InfoAbout from './InfoAbout';
import Skills from './Skills';
import InfoDetails from '../Footer/InfoDetails';

function Content() {
    return (
      <section className='flex flex-col gap-4 absolute top-0 z-10 w-full'>
        
        <div className='relative border-b-2 border-gray-300 shadow-md'>
          <img
            className='z-0 object-cover w-full min-h-screen' 
            src={Fondo}
          />
          <span className='absolute text-white md:text-6xl text-3xl top-1/4 left-1/2 md:left-1/3 -translate-x-1/2 -translate-y-1/2 font-body'>
            Just do it.
          </span>
        </div>

        <div className='md:flex block justify-center gap-4 w-full px-3' id='contact'>
          <ImgAbout/>
          <InfoAbout/>
        </div>

        <div className='flex flex-col gap-3 w-full'>
          <Skills />
        </div>

        <InfoDetails/>
      </section>
    );
}

export default Content;