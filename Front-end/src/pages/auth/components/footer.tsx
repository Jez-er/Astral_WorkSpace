import React, { ReactNode } from 'react';

interface FooterProps {
    children: ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
    return (
        <div className='flex'>
            <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded bg-gray-500" />
                <div className="h-0.5 bg-gray-500 min-w-5 w-16 " />
                <div className="w-1.5 h-1.5 rounded bg-gray-500" />
            </div>
            <span className='mx-3 w-full'>{children}</span>
            <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded bg-gray-500" />
                <div className="h-0.5 min-w-5 w-16 bg-gray-500" />
                <div className="w-1.5 h-1.5 rounded bg-gray-500" />
            </div>
        </div>
    );
};

export default Footer;
