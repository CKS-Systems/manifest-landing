'use client';

import React from 'react';
import Wrapper from '../ComponentWrapper/Wrapper';
import * as Icons from '../../../svg/Icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  const pathname = usePathname();

  return (
    <div
      className={`w-full ftBg py-10 ${
        pathname === '/partners'
          ? 'mt-0'
          : 'mt-[25rem] sm:mt-[20rem] md:mt-[11rem] 2xl:mt-[24rem]'
      } `}
    >
      <Wrapper>
        <div className='w-full flex justify-center items-center flex-col gap-10 2xl:gap-14'>
          <Fade duration={800} delay={100} triggerOnce>
            <div className='flex flex-col justify-center items-center gap-2 2xl:gap-4'>
            <a
              href='https://cks.systems/'
              className='text-[16px] 2xl:text-[26px] 3xl:text-[40px] font-normal text-[#bca378]/60'
              target='_blank'
              rel='noopener noreferrer'
            >
              Built by CKS Systems
            </a>
            </div>
          </Fade>
          <Fade duration={800} delay={200} triggerOnce>
            <div className='flex flex-col justify-center items-center gap-2 2xl:gap-4 3xl:gap-6'>
              <div className='flex gap-6 justify-center items-center'>
                {socialIcons.map((item, index) => {
                  return (
                    <Link key={index} href={item.path}>
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <p className='text-[16px] 2xl:text-[22px] 3xl:text-[32px] font-normal text-[#bca378]/60'>
                Manifest is Open Source, Public Good, Blockchain Software. Licensed under GNU GPL-3.0
              </p>
              <p className='text-[16px] 2xl:text-[22px] 3xl:text-[32px] font-normal text-[#bca378]/60'>
                © 2025 Manifest. All Rights Reserved.
              </p>
            </div>
          </Fade>
        </div>
      </Wrapper>
    </div>
  );
};

const socialIcons = [
  {
    path: 'https://x.com/ManifestTrade',
    name: (
      <Icons.twiter className='w-[32px] 2xl:w-[48px] h-[32px] 3xl:h-[55px] 2xl:h-[40px] 3xl:w-[70px] hover:scale-105 duration-300' />
    ),
  },
    {
    path: 'https://t.me/manifest_trade',
    name: (
      <img 
        src="/assets/tg.svg" 
        alt="Telegram"
        className='w-[32px] 2xl:w-[48px] h-[32px] 3xl:h-[55px] 2xl:h-[40px] 3xl:w-[70px] hover:scale-105 duration-300' 
        style={{ filter: 'brightness(0) invert(1) opacity(0.5)' }}
      />
    ),
  },
  {
    path: 'https://github.com/CKS-Systems/manifest',
    name: (
      <Icons.githHub className='w-[32px] 2xl:w-[48px] h-[32px] 3xl:h-[55px] 2xl:h-[40px] 3xl:w-[70px] hover:scale-105 duration-300' />
    ),
  },
  {
    path: 'https://cks-systems.github.io/manifest',
    name: (
      <Icons.gitBook className='w-[32px] 2xl:w-[48px] h-[32px] 3xl:h-[55px] 2xl:h-[40px] 3xl:w-[70px] hover:scale-105 duration-300' />
    ),
  },
  {
    path: 'https://linktr.ee/ManifestTrade',
    name: (
      <svg 
        className='w-[32px] 2xl:w-[48px] h-[32px] 3xl:h-[55px] 2xl:h-[40px] 3xl:w-[70px] hover:scale-105 duration-300' 
        viewBox="0 0 24 24" 
        fill="rgba(255, 255, 255, 0.5)"
      >
        <path d="M7.953 15.066L2.886 10l5.067-5.066.826.826-3.826 3.826H20v1.167H4.953l3.826 3.826zm8.094-6.132L21.114 14l-5.067 5.066-.826-.826 3.826-3.826H4v-1.167h15.047l-3.826-3.826z"/>
      </svg>
    ),
  },
];

export default Footer;
