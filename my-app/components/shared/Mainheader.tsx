"use client"

import { useState } from 'react';
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { BELLICON, DOWNARROW, JOBICON, MESSAGE, PAYMENT } from '@/public';

type ButtonName = 'Jobs' | 'Messages' | 'Payments' | null;

export default function MainHeader() {
    const [selectedButton, setSelectedButton] = useState <ButtonName>("Jobs");

    const handleButtonClick = (buttonName : ButtonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <header className=' w-full z-10 flex flex-col justify-center items-center sticky top-0 bg-white'>
        <div className="w-full items-center justify-between text-sm lg:flex p-4 shadow-sm">
            <section className=" w-full flex justify-between items-center px-4">
                <div className="flex justify-between items-center p-3 font-bold bg-gray-300 text-red-500">
                    Logo
                </div>
                <div className="justify-between items-center border rounded-3xl p-2 space-x-20 shadow-md text-gray-500 hidden lg:flex">
                    <Button
                        variant={"ghost"}
                        className={`rounded-3xl flex justify-center items-center font-semibold ${selectedButton === 'Jobs' ? 'bg-orange-600 text-white' : ''}`}
                        onClick={() => handleButtonClick('Jobs')}
                    >
                        <Image
                        alt='job-icon'
                        src={JOBICON}
                        width={15}
                        height={15}
                        className='mr-2 text-gray-500'
                        />
                        <span>
                        Jobs
                        </span>
                    </Button>
                    <Button
                        variant={"ghost"}
                        className={`rounded-3xl font-semibold ${selectedButton === 'Messages' ? 'bg-orange-600 text-white' : ''}`}
                        onClick={() => handleButtonClick('Messages')}
                    >
                        <Image
                        alt='message'
                        src={MESSAGE}
                        width={15}
                        height={15}
                        className='mr-2 text-gray-500'
                        />
                        <span>
                        Messages
                        </span>
                    </Button>
                    <Button
                        variant={"ghost"}
                        className={`rounded-3xl font-semibold ${selectedButton === 'Payments' ? 'bg-orange-600 text-white' : ''}`}
                        onClick={() => handleButtonClick('Payments')}
                    >
                        <Image
                        alt='payment'
                        src={PAYMENT}
                        width={15}
                        height={15}
                        className='mr-2 text-gray-500'
                        />
                        <span>
                        Payments
                        </span>
                    </Button>
                </div>
                <div className="flex justify-between items-center space-x-3">
                    <Image
                    src={BELLICON}
                    alt='bell'
                    width={20}
                    height={20}
                    />
                    <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none">
                        <Image
                                alt="company logo"
                                src={DOWNARROW}
                                width={50}
                                height={50}
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className=" space-y-12 flex flex-col items-center font-bold py-7 ">
                            {/* Dropdown menu items go here */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </section>
        </div>
        <div className='flex justify-center lg:justify-start items-center p-3  shadow-sm space-x-10 w-full text-gray-400 font-semibold'>
            <div className="hover:text-orange-600 ml-20 cursor-pointer text-orange-600">Job Preview</div>
            <div className="hover:text-orange-600  cursor-pointer">Applicants</div>
            <div className="hover:text-orange-600 cursor-pointer">Match</div>
            <div className="hover:text-orange-600 cursor-pointer">Messages</div>
        </div>
        </header>
    )
}