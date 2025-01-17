'use client';

import Image from 'next/image';

import React from 'react';

import Sidebar from '../Sidebar';
import NavHeader from '../NavHeader';
import NavMove from '../NavMove';

export default function Header() {
    return (
        <header className="flex flex-col select-none">
            <div className="hidden lg:flex relative h-[135px]">
                <div className="flex w-full h-[135px] relative">
                    <Image className="object-cover" src={'/imgs/bg_header.jpg'} fill sizes="1000000px" alt="" />
                </div>
                <div className="flex absolute w-full justify-center h-full">
                    <div className="flex w-[1200px] items-center gap-3">
                        <div className="w-[110px] h-[110px] relative">
                            <Image src={'/imgs/logo.png'} fill sizes="100000px" alt="" />
                        </div>
                        <div className="hidden lg:flex h-full justify-center flex-col text-white font-bold text-[26px]">
                            <span>CỤC THUẾ TP. HỒ CHÍ MINH</span>
                            <span>CHI CỤC THUẾ QUẬN 8</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex bg-[#0B80FF] justify-center">
                <div className="flex w-[1200px] justify-between h-[70px] lg:h-[42px]">
                    <div className="h-full px-4 flex w-full lg:hidden items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Sidebar />
                            <div className="flex flex-col text-[13px]">
                                <h3 className="flex items-center text-white font-bold">CỤC THUẾ TP. HỒ CHÍ MINH</h3>
                                <h3 className="flex items-center text-white font-bold">CHI CỤC THUẾ QUẬN 8</h3>
                            </div>
                        </div>
                        <div className="relative w-[45px] h-[45px]">
                            <Image src={'/imgs/logo.png'} sizes="10000px" fill alt="" />
                        </div>
                    </div>
                    <NavHeader />
                </div>
            </div>
            <NavMove />
        </header>
    );
}
