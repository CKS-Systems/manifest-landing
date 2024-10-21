'use client';

import React, { useState } from 'react';
import Wrapper from '../ComponentWrapper/Wrapper';
import * as Icons from '../../../svg/Icons';
import Link from 'next/link';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { usePathname } from 'next/navigation';

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='w-full bg-gradient-radial from-[#403822] to-[#000000] cursor-pointer h-[60px] 2xl:h-[120px] 3xl:h-[210px] sm:h-[90px]'>
      <Wrapper style='h-full'>
        <div className='w-full h-full flex justify-between items-center'>
          <Link href='/' className='z-50'>
            <Icons.Logo className='w-[147px] h-[28px] sm:h-[32px]' />
          </Link>
          <div className='hidden md:flex justify-center items-center gap-10 z-50'>
            {links.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`text-[#BCA378] ${
                    pathName === item.path
                      ? 'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#00FFE5] after:w-full after:duration-200'
                      : 'after:bg-[#95C9BD]'
                  } font-normal text-[18px] relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] hover:after:w-full after:duration-200`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <Link 
            href="https://fill.city/" 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-black z-50 px-8 2xl:px-10 3xl:px-16 py-3 bg-[#95C9BD] rounded-lg text-[16px] font-medium hover:opacity-80 active:translate-y-[1px]'>
            Trade Now
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

const links = [
  {
    name: '',
    path: '/',
  },
];

export default TopBar;
