import videoSource from '../../assets/video.mp4';
import ImgAbout from './ImgAbout';
import InfoAbout from './InfoAbout';
import Contact from './Contact';
import InfoDetails from '../Footer/InfoDetails';

const VideoFondo = () => {

  return (
    <video autoPlay loop muted className="z-0 object-cover w-full min-h-screen" id='video-background'>
        <source src={videoSource} type="video/mp4" />
    </video>
  );
};

function Content() {
    return (
      <div className='flex flex-col gap-4 absolute top-0 z-10 w-full'>
        
        <VideoFondo/>

        <div className='md:flex block justify-center gap-4 w-full px-3' id='about'>
          <ImgAbout/>
          <InfoAbout/>
        </div>

        <div className='flex flex-col gap-3 w-full' id='contact'>
          <Contact/>
        </div>

        <InfoDetails/>
      </div>
    );
}

export default Content;