import Link from 'next/link';
import React from 'react'

let FooterLinks = function(props){
    return (
        <div className='md:flex hidden bg-black text-white h-[72px] justify-center items-center w-full font-Jakarta font-light'>
            {/* <div className='p-32'> */}
                <Link className="hover:underline mx-4" href="#">Contact Us</Link>
                <Link className="hover:underline mx-4" href="#">University</Link>
                <Link className="hover:underline mx-4" href="#">Website</Link>
                <Link className="hover:underline mx-4" href="#">Terms of Service</Link>
                <Link className="hover:underline mx-4" href="#">Privacy Policy</Link>
            {/* </div> */}
        </div>
    )
}

export default FooterLinks;