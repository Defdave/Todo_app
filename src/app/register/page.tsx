'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (name && email && password && confirmPassword) router.push('/dashboard');
  };

  return (
    <main className="relative h-full px-4 py-8 text-center bg-[#f0f4f3] text-black space-y-6">
        <Image src="/shape.png" alt="Logo" width={300} height={270} className='absolute -top-[67px] -left-[20px]'/>
        <h2 className="text-[18px] font-bold text-center mt-48 mb-6">Welcome to Onboard!</h2>
        <p className='text-[13px] mx-auto w-[203px] text-black/80 mb-20 px-6'>Let’s help to meet up your tasks.</p>

        <input type="text" placeholder="Enter your full name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Enter your Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />

        <button onClick={handleRegister} className='
        mt-12'>
        Register
      </button>

        <p className="text-center text-sm pb-12">
          Already have an account? <Link href="/login" className="text-[#50C2C9]">Sign In</Link>
        </p>
    </main>
  );
}