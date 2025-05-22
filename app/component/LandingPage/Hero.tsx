'use client';
import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../svg/Icons';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className='w-full overflow-x-hidden overflow-y-hidden h-[calc(100vh-60px)] md:h-[calc(100vh-90px)] justify-center items-center flex relative'>
      <div className="absolute inset-0 bg-[url('/assets/logo.svg')] bg-no-repeat bg-center bg-[length:35%_auto] opacity-5"></div>
      
      <Wrapper style='h-full'>
        <Fade duration={1200} triggerOnce className='w-full h-full'>
          <div className='w-full flex flex-col gap-5 justify-center items-center h-full max-h-[800px]'>
            <Zoom duration={1500} triggerOnce>
              <div className="w-full -mt-28 max-w-[300px] sm:max-w-[450px] md:max-w-[940px] 2xl:max-w-[1800px] 2xl:h-[800px] h-[300px] sm:h-[400px] md:h-[490px] flex flex-col justify-center items-center">
                <div className='mt-[5rem] sm:mt-[9rem] text-[21px] 2xl:text-[55px] sm:text-[31px] md:text-[39px] h-[21px] 2xl:h-[55px] sm:h-[31px] md:h-[39px]'>
                  {/* Invisible spacer to maintain layout */}
                </div>

                <h1 className='text-[38px] sm:block hidden sm:text-[50px] md:text-[70px] lg:text-[96px] 2xl:text-[140px] tracking-[4px] leading-[50px] sm:leading-[60px] md:leading-[90px] lg:leading-[120px] 2xl:leading-[180px] text-center font-bold font-terminaExtraBold text-[#deb36cff] mt-0 2xl:mt-3'>
                  The Unlimited <br /> Orderbook
                </h1>
                <h1 className='text-[36px] sm:hidden block sm:text-[50px] md:text-[70px] lg:text-[96px] 2xl:text-[120px] 3xl:text-[160px] tracking-[4px] leading-[50px] sm:leading-[60px] md:leading-[90px] lg:leading-[120px] text-center font-bold font-terminaExtraBold text-[#deb36cff]'>
                  The Unlimited Orderbook
                </h1>
              </div>
            </Zoom>
            <Slide
              className='w-full flex flex-col sm:flex-row gap-4 justify-center items-center'
              direction='up'
              duration={1000}
              delay={500}
              triggerOnce
            >
              <div className='w-full max-w-[300px] rounded-xl 3xl:rounded-2xl sm:max-w-[500px] md:max-w-[700px] 2xl:max-w-[900px] 3xl:max-w-[1750px] flex justify-center items-center bg-gradient-to-r from-[#927252] to-[#95C9BD] p-[2px]'>
                <div className='w-full py-3 2xl:py-5 3xl:py-14 flex justify-center rounded-xl items-center gap-24 sm:gap-28 3xl:gap-[14rem] bg-[#3d3b3a]'>
                  <div className='flex justify-center items-center flex-col gap-4'>
                    <p className='text-[#95C9BD] text-[10px] sm:text-[16px] md:text-[20px] 2xl:text-[28px] 3xl:text-[36px] font-terminaExtraDemi'>
                      0.00 %
                    </p>
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] 2xl:text-[24px] font-normal 3xl:text-[32px] text-[#bca378]/90'>
                      Trading Fees
                    </p>
                  </div>
                  <div className='flex justify-center items-center flex-col gap-4'>
                    <p className='text-[#95C9BD] text-[10px] sm:text-[16px] md:text-[20px] 2xl:text-[28px] 3xl:text-[36px] font-terminaExtraDemi'>
                      0.004 SOL
                    </p>
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] 2xl:text-[24px] font-normal 3xl:text-[32px] text-[#bca378]/90'>
                      Listing Cost
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 2xl:gap-12 justify-center items-stretch'>
                <Link 
                href="https://app.manifest.trade/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-black z-50 px-10 2xl:px-12 3xl:px-20 py-4 bg-gradient-to-tr from-[#927252] to-[#95C9BD] rounded-lg text-[20px] font-medium hover:brightness-110 transition-all duration-300 active:translate-y-[1px] min-w-[200px] sm:min-w-[220px] md:min-w-[240px] text-center'>
                Markets
                </Link>
                <Link 
                href="https://app.manifest.trade/market/ENhU8LsaR7vDD2G1CsWcsuSGNrih9Cv5WZEk7q9kPapQ?showLeaderboard=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-black z-50 px-10 2xl:px-12 3xl:px-20 py-4 bg-gradient-to-tr from-[#95C9BD] to-[#927252] rounded-lg text-[20px] font-medium hover:brightness-110 transition-all duration-300 active:translate-y-[1px] min-w-[200px] sm:min-w-[220px] md:min-w-[240px] text-center'>
                Leaderboard
                </Link>
              </div>
            </Slide>
          </div>
        </Fade>
      </Wrapper>
      <Icons.arrow1 className='absolute opacity-30 left-[0] md:left-[3rem] bottom-[8rem] md:bottom-[7rem] w-[80px] sm:w-[149px] h-[90px] sm:h-[167px] transform rotate-[-90deg] hidden sm:block' />
      <Icons.arrow1 className='absolute opacity-30 right-[20%] bottom-[30%] w-[40px] sm:w-[70px] h-[50px] sm:h-[80px] hidden sm:block' />
      <Icons.arrow1 className='absolute opacity-20 right-0 sm:right-[2%] bottom-[10%] sm:bottom-[2%] w-[70px] sm:w-[107px] h-[70px] sm:h-[120px] hidden sm:block' />
    </div>
  );
};

export default Hero;