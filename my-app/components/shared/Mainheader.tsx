"use client"

import { useState } from 'react';
import Image from "next/image";
import { Button } from "../ui/button";
import {APPLOGO} from "@/public"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { BELLICON, DOWNARROW, JOBICON, MESSAGE, PAYMENT } from '@/public';

type ButtonName = 'Jobs' | 'Messages' | 'Payments' | null;

export default function MainHeader() {
    const [selectedButton, setSelectedButton] = useState <ButtonName>("Jobs");

    const handleButtonClick = (buttonName : ButtonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <header className=' w-full z-10 flex flex-col justify-center items-center sticky top-0 bg-white'>
        <div className="w-full items-center justify-between text-sm lg:flex px-4 py-5 shadow-sm">
            <section className=" w-full flex justify-between items-center px-4">
                <Image
                src={APPLOGO}
                alt='logo'
                height={90}
                width={90}
                />
                <div className="justify-between items-center border rounded-3xl p-2 space-x-16 shadow-md text-gray-500 hidden lg:flex">
                    <Button
                        variant={"ghost"}
                        className={`p-6 rounded-3xl flex justify-center items-center font-semibold ${selectedButton === 'Jobs' ? 'bg-orange-600 text-white' : ''}`}
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
                        className={`p-6 rounded-3xl font-semibold ${selectedButton === 'Messages' ? 'bg-orange-600 text-white' : ''}`}
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
                        className={`p-6 rounded-3xl font-semibold ${selectedButton === 'Payments' ? 'bg-orange-600 text-white' : ''}`}
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
                    width={25}
                    height={25}
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
                        <DropdownMenuContent className=" space-y-12 flex flex-col items-center font-bold py-7 lg:hidden">
                            <DropdownMenuItem className='p-2 px-4 bg-orange-600 text-white rounded-full'>
                                Jobs
                            </DropdownMenuItem>
                            <DropdownMenuItem className='p-2 px-4 bg-orange-600 text-white rounded-full'>
                                Messages
                            </DropdownMenuItem>
                            <DropdownMenuItem className='p-2 px-4 bg-orange-600 text-white rounded-full'>
                                Payments
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </section>
        </div>
        </header>
    )
}
