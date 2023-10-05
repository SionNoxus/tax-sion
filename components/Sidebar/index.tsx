import React, { useState, ReactElement } from 'react';
import css from './Sidebar.module.scss';
import { Button } from '@nextui-org/react';
import { FaUser } from 'react-icons/fa';
import Login from '../Login';
import { listNav } from '../Header';
import { AiOutlineClose } from 'react-icons/ai';
import Search from '../Search';

interface items {
    icon?: ReactElement;
    title?: string;
    href: string;
}

export default function Sidebar({ children }: { children: React.ReactNode }) {
    const [turn, setTurn] = useState<boolean>(false);

    return (
        <>
            <button onClick={() => setTurn(!turn)}>{children}</button>
            <div className={`${css.modal} ${turn ? 'visible' : 'invisible'}`}>
                <div onClick={() => setTurn(false)} className={`${css.overlay}`}></div>
                <div className={`${css.box} ${turn && 'left-[0px]'}`}>
                    <div className="h-[70px] w-full bg-[#0B80FF] flex justify-between items-center px-4">
                        <Button className="rounded-none" color="danger">
                            <div className="h-full flex w-full">
                                <Login>
                                    <FaUser className={'translate-y-[-1px]'} />
                                    Đăng nhập
                                </Login>
                            </div>
                        </Button>
                        <AiOutlineClose
                            fontSize={20}
                            color="white"
                            className={'cursor-pointer'}
                            onClick={() => setTurn(false)}
                        />
                    </div>
                    <div className="flex flex-col px-4">
                        {listNav.map(
                            (item: items, index: number) =>
                                index > 0 && (
                                    <span
                                        key={index}
                                        className="items-center flex border-b-[1px] cursor-pointer border-[#ccc] h-[49px]"
                                    >
                                        {item.title}
                                    </span>
                                ),
                        )}
                        <Search className="border-[2px] border-[#ccc] mt-2 w-full" />
                    </div>
                </div>
            </div>
        </>
    );
}
