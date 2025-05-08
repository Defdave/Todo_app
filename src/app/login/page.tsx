'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) router.push('/dashboard');
  };

  return (
    <main className="flex flex-col items-center justify-center bg-[#f0f4f3] text-black h-screen space-y-6">
          <Image src="/shape.png" alt="Logo" width={300} height={270} className='absolute -top-[67px] -left-[20px]'/>
          <h2 className="text-[18px] font-bold text-center mt-48">Welcome back</h2>
          <Image src="/undraw_back_to_school_inwc 1.png" alt="Logo" width={184.44} height={138} className='mx-auto my-12'/>

        <input type="email" placeholder="Enter your Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />

        <p className='text-[13px] text-center w-[203px] text-[#50C2C9] mt-4 mb-14 px-6'>Forget password ?</p>
        
        <button onClick={handleLogin}>
        Login
      </button>

        <p className="text-center text-[16px]">
        Don&rsquo;t <Link href="/register" className="text-[#50C2C9]">Sign Up</Link>
        </p>
    </main>
  );
}