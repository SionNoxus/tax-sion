'use client';

import Image from 'next/image';

import React from 'react';
import { FaBars } from 'react-icons/fa';

import Search from '../Search';
import Sidebar from '../Sidebar';
import NavCategories from '../NavCategories';
import CurrentDate from '../CurrentDate';

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
                    <div className="h-full flex w-full lg:hidden items-center">
                        <Sidebar>
                            <FaBars className={'cursor-pointer'} color="white" fontSize={20} />
                        </Sidebar>
                        <div className="flex gap-3">
                            <div className="h-[100px] relative">
                                <Image src={'/imgs/logo.png'} sizes="100000px" fill alt="" />
                            </div>
                            <h1 className="flex items-center text-white font-bold">Chi cục thuế quận 8</h1>
                        </div>
                    </div>
                    <NavCategories />
                    <div className="hidden lg:flex">
                        <Search />
                    </div>
                </div>
            </div>
            <CurrentDate />
        </header>
    );
}
