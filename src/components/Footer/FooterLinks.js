import Link from 'next/link';
import React from 'react'

let FooterLinks = function(props){
    return (
        <div className='md:grid hidden bg-black text-white h-[72px] justify-center w-full font-Jakarta font-light'>
            <div className='grid grid-cols-5  h-full text-base items-center justify-items-center'>
                <Link className="hover:underline" href="#">Contact Us</Link>
                <Link className="hover:underline" href="#">University</Link>
                <Link className="hover:underline" href="#">Website</Link>
                <Link className="hover:underline" href="#">Terms of Service</Link>
                <Link className="hover:underline" href="#">Privacy Policy</Link>
            </div>
        </div>
    )
}

export default FooterLinks;