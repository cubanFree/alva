import Fondo from '../../assets/fondo.jpg';
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
          <span className='w-full absolute text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl top-1/4 text-center md:right-1/4 font-body'>
            Just do it.
          </span>
        </div>

        <div className='flex justify-center md:gap-4 w-full px-3' id='contact'>
          <InfoAbout/>
        </div>

        <div>
          <Skills />
        </div>

        <div>
          <InfoDetails/>
        </div>
      </section>
    );
}

export default Content;