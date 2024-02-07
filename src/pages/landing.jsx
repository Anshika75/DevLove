import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
    const [text, setText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);
    const phrase = '<  DevLove >';

    useEffect(() => {
        let index = 0;

        const typingInterval = setInterval(() => {
            if (index < phrase.length - 1) {
                setText((prevText) => prevText + phrase[index]);
                index += 1;
            } else {
                clearInterval(typingInterval);
                setIsTypingComplete(true);

                // Start blinking after a delay (adjust as needed)
                setTimeout(() => {
                    setIsBlinking(true);
                }, 500);
            }
        }, 100); // Adjust the interval as needed

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className='grid place-items-center min-h-screen chip text-white text-9xl'>
            <div className="flex flex-col items-center justify-center">
                <h1>{text}</h1>
                {isTypingComplete && (
                    <div className={`pang flex flex-col items-center justify-center text-4xl mt-4`}>
                        <p className={` opacity-0 ${isBlinking ? 'blink' : ''}`}>Forge Your Love Story in Code</p>
                        <button className={`opacity-0 bg-[#A2171C] mt-4 px-3 py-2 ${isBlinking ? 'btnblink' : ''}`}>
                            <Link to='/input'>Get Started</Link>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
