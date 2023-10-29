import { Card, Spacer } from '@nextui-org/react';
import { BiLogoReact } from 'react-icons/bi';
import { BsGit } from 'react-icons/bs';
import { FaBootstrap } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { BiLogoMongodb } from 'react-icons/bi';

const CustomCard = ({title}) => (
    <Card className="w-[90%] max-h-full space-y-5 p-4" radius="2xl">
      <div className="p-2 rounded-lg bg-default-300 flex justify-center items-center gap-3">
        <BiLogoReact size={40} color='white'/>
        <BsGit size={40} color='white'/>
        <FaBootstrap size={40} color='white'/>
        <FaNodeJs size={40} color='white'/>
        <BiLogoJavascript size={40} color='white'/>
        <BiLogoTailwindCss size={40} color='white'/>
        <BiLogoMongodb size={40} color='white'/>
      </div>
      <div className="space-y-3">
        <div className="text-xl text-warning">{title}</div>
      </div>
    </Card>
);

function Contact() {
  return (
    <div className='flex md:gap-5 flex-col justify-center items-center w-full'>
      <CustomCard title={"Skills"}/>
      <Spacer x={4} />
    </div>
  )
}

export default Contact;