'use client';

import Image from "next/image";
import { PlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const items = [
  'Learning Programming by 12PM',
  'Learn how to cook by 1PM',
  'Learn how to play at 2PM',
  'Have lunch at 4PM',
  'Going to travel 6PM',
];


export default function Dashboard() {
  const [checked, setChecked] = useState<boolean[]>([true, ...Array(items.length - 1).fill(false)]);


  const toggleCheck = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <main className="text-center bg-[#f0f4f3] text-black m-0 pt-64">
      <Image src="/shape_2.png" alt="Logo" width={300} height={270} className='absolute z-10 -top-[67px] -left-[20px]' />

      <div className="absolute top-0 left-0 bg-[#50C2C9] m-0 w-full h-[298px]">
        <Image src="/Ellipse 3.png" alt="Logo" width={100} height={100} className='inline-block mx-auto mt-32 mb-4' />
        <h2 className="text-[18px] font-bold text-center text-white">Welcome Jeegar goyani</h2>
      </div>

      <h2 className="text-[12px] text-right mt-4 font-semibold">Good Afternoon</h2>
      <Image src="/clock.png" alt="Logo" width={184.44} height={138} className='inline-block mx-auto mt-4 mb-4' />
      <h2 className="text-[14px] text-left font-semibold mb-4">Task list</h2>

      <div
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)',
        }}
        className="bg-white border-none pb-12 rounded-md m-auto w-full h-[309px]">
        <div className="flex justify-between items-center p-4">
          <h3 className="text-[12px] font-semibold text-black/70 text-right my-4">Daily Task</h3>
            <PlusIcon className="w-[25px] h-[25px] font-bold text-[#50C2C9]" />
        </div>
        
        <div className="relative">
        <div className="mx-auto text-left space-y-4 px-4 pb-12">
      {items.map((item, index) => (
        <label
          key={index}
          className="block cursor-pointer"
        >
          <input
            type="checkbox"
            checked={checked[index]}
            onChange={() => toggleCheck(index)}
            className={`w-[17px] h-[17px] accent-[#50C2C9] bg-white border-[2px] border-black mr-4 rounded outline-2`}
          />
          <span className={`text-[12px] font-semibold text-black/70`}>{item}</span>
        </label>
      ))}
    </div>
    <div className="absolute right-6 top-12 w-3 h-[86px] border-r-2 border-[#DFDFDF]"></div>
        </div>
      </div>

    </main>
  );
}