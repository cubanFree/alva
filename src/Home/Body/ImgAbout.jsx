import imgAbout from '../../assets/img-about.jpg';

export default function ImgAbout() {
  return (
    <div className="z-10 min-w-[300px] md:my-[-1%] hidden md:flex md:justify-center justify-start">
        <img
            width={300}
            className="rounded-lg border-1 min-w-[300px]"
            alt="img about-me"
            src={imgAbout}
        />
    </div>
  );
}
