import { Card, Tooltip } from '@nextui-org/react';
import { BiLogoReact } from 'react-icons/bi';
import { BsGit } from 'react-icons/bs';
import { FaBootstrap } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { BiLogoMongodb } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const CustomCard = ({title, children}) => (
    <Card className="md:min-w-[30%] max-h-full space-y-5 p-4" radius="2xl">
      <div className="p-2 rounded-lg bg-default-300 flex justify-center items-center gap-3">
        {children}
      </div>
      <div className="space-y-3">
        <div className="text-xl text-warning">{title}</div>
      </div>
    </Card>
);

function Skills() {
  return (
    <div className='md:flex md:gap-5 inline-grid justify-center items-center w-full px-3 gap-1'>
      <CustomCard title={"Skills"}>
        <BiLogoReact size={40} color='white'/>
        <BsGit size={40} color='white'/>
        <FaBootstrap size={40} color='white'/>
        <FaNodeJs size={40} color='white'/>
        <BiLogoJavascript size={40} color='white'/>
        <BiLogoTailwindCss size={40} color='white'/>
        <BiLogoMongodb size={40} color='white'/>
      </CustomCard>
      <CustomCard title={"Projects..."}>
        <Tooltip showArrow={true} content="Chats App" className='font-semibold bg-gray-200'>
          <Link
            to='https://alva-chats.vercel.app'
            className='flex justify-center items-center cursor-pointer'>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z" fill="#1C274C"/>
              <path opacity="0.5" d="M15.6361 2.01096C15.0111 2 14.3051 2 13.5 2H10.5C7.22657 2 5.58985 2 4.38751 2.7368C3.71473 3.14908 3.14908 3.71473 2.7368 4.38751C2 5.58985 2 7.22657 2 10.5V11.5C2 13.8297 2 14.9946 2.3806 15.9134C2.88807 17.1386 3.86144 18.1119 5.08658 18.6194C5.74689 18.8929 6.53422 18.9698 7.78958 18.9915C8.63992 19.0061 9.06509 19.0134 9.40279 19.2098C9.74049 19.4063 9.95073 19.7614 10.3712 20.4718L10.9133 21.3877C11.3965 22.204 12.6035 22.204 13.0867 21.3877L13.6288 20.4718C14.0492 19.7614 14.2595 19.4062 14.5972 19.2098C14.9349 19.0134 15.36 19.0061 16.2104 18.9915C17.4658 18.9698 18.2531 18.8929 18.9134 18.6194C20.1386 18.1119 21.1119 17.1386 21.6194 15.9134C22 14.9946 22 13.8297 22 11.5V10.5C22 9.69494 22 8.98889 21.989 8.36394C21.1942 9.07068 20.1473 9.5 19 9.5C16.5147 9.5 14.5 7.48528 14.5 5C14.5 3.85275 14.9293 2.80577 15.6361 2.01096Z" fill="#1C274C"/>
            </svg>
          </Link>
        </Tooltip>
      </CustomCard>
    </div>
  )
}

export default Skills;