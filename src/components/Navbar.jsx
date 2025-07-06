import React from 'react'
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <nav className={`flex items-center justify-between fixed top-5 mx-8 p-3  overflow-x-hidden  z-30  w-[calc(100%-64px)] rounded-full ${scrolled ?
                'bg-white/10 backdrop-blur-md border-b border-white/30 shadow-lg text-gray-700'
                : 'bg-transparent text-white'}`}>
                <div className='flex items-center gap-4  justify-center'>
                    <div className='flex items-center text-2xl'>
                        <span className='font-bold'>BRISK</span>
                        <span>PAY</span>
                    </div>
                    <div className='text-sm flex items-center gap-2.5 border-2 p-1  box-border  border-white rounded-4xl'>
                        <span className='bg-white rounded-4xl p-2 text-black'>Personal</span>
                        <span className='rounded-4xl pr-2'>Business</span>
                    </div>
                </div>

                <div className="hidden md:flex gap-8 justify-center">
                    <span>Company</span>
                    <span>Feature</span>
                    <span>Career</span>
                    <span>News & Media</span>
                </div>

               
                <div className="hidden md:flex items-center gap-3">
                    <div className="flex items-center border-2 p-1 gap-3 border-white rounded-4xl">
                        <span className="bg-white text-black rounded-full px-2 py-1">HI</span>
                        <span className="pr-2">EN</span>
                    </div>
                    <button className="border-2 px-4 py-2 border-white rounded-4xl">Sign In</button>
                </div>

                
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>


                
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4 bg-white/10 p-4 rounded-xl text-sm backdrop-blur-md border border-white/20">
                        <div className="flex flex-col gap-2">
                            <span>Company</span>
                            <span>Feature</span>
                            <span>Career</span>
                            <span>News & Media</span>
                        </div>
                        <div className="flex justify-between mt-4">
                            <div className="flex items-center border-2 px-3 py-1 gap-2 border-white rounded-4xl">
                                <span className="bg-white text-black rounded-full px-2 py-1">HI</span>
                                <span>EN</span>
                            </div>
                            <button className="border-2 px-4 py-2 border-white rounded-4xl">Sign In</button>
                        </div>
                    </div>

                    )}
                
            </nav>
        </>
    )
}

export default Navbar
