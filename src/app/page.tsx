'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SplashScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/register');
  };

  return (
    <main className="flex flex-col items-center justify-center bg-[#f0f4f3] text-black h-screen space-y-6">
      <Image src="/shape.png" alt="Logo" width={300} height={270} className='absolute -top-[67px] -left-[20px]'/>
      <Image src="/undraw_done_checking_re_6vyx 1.png" alt="Logo" width={254} height={194} className='mx-auto mt-[180px]'/>
      
      <h1 className="text-[18px] font-bold text-center mt-8 mb-4">Gets things with TODs</h1>
      <p className='text-[13px] text-center w-[203px] text-black/80 mb-28'>Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.</p>

      <button onClick={handleGetStarted} className="w-[380px] h-[60px] text-center bg-[#50C2C9] text-white rounded-[8px] text-[18px] transition">
        Get Started
      </button>
    </main>
  );
}