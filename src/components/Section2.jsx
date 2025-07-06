import React, { useEffect, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, useInView } from 'framer-motion';


const Section2 = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const imageRef = useRef(null);
    const isImageInView = useInView(imageRef, { once: true });

    return (
        <>

            <div className="relative px-4 md:mx-36 my-16 flex flex-col md:flex-row gap-8">

                <div className="flex flex-col w-full md:w-[58%]">
                    <p data-aos="flip-left" flip-left className="text-sky-300 text-sm">Welcome to BriskPay</p>
                    <h1 data-aos="fade-right" className="text-3xl md:text-5xl font-medium">
                        We're here to help you take control of your money and turn
                    </h1>
                    <h1 className="text-3xl md:text-5xl text-gray-400">
                        your dreams into reality
                    </h1>
                </div>


                <div className="flex flex-col w-full md:w-[40%] mt-4 text-sm">
                    <p data-aos="fade-right">
                        Our mission is to make banking fun, easy, and smart. With
                        cutting-edge tools, no hidden fees, and support every step of the
                        way, we're empowering the next generation of financial leaders. At
                        BriskPay, you're not just a customer – you're a partner in building
                        a brighter, more financially confident future.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4 text-xs">
                        <button className="border-2 border-sky-300 rounded-full px-3 py-1">
                            Split payment
                        </button>
                        <button className="border-2 border-sky-300 rounded-full px-3 py-1">
                            Saving
                        </button>
                        <button className="border-2 border-sky-300 rounded-full px-3 py-1">
                            International Transfer
                        </button>
                        <button className="border-2 border-sky-300 rounded-full px-3 py-1">
                            +
                        </button>
                    </div>
                </div>
            </div>


            <div className="px-4 md:mx-36">
                <img
                    className="w-full h-[50vh] md:h-[70vh] object-cover object-center rounded-3xl"
                    src="src/assets/pexels-ron-lach-9654034.jpg"
                    alt="BriskPay illustration"
                />
            </div>
        </>
    );
};

export default Section2;

