import React from 'react'

let FooterLinks = function(props){
    return (
        <div className='grid bg-black text-white h-[72px] justify-center w-full font-Jakarta font-light'>
            <div className='grid grid-cols-5 w-[692px] h-full text-base items-center justify-items-center'>
                <a className="hover:underline" href="#">Contact Us</a>
                <a className="hover:underline" href="#">University</a>
                <a className="hover:underline" href="#">Website</a>
                <a className="hover:underline" href="#">Terms of Service</a>
                <a className="hover:underline" href="#">Privacy Policy</a>
            </div>
        </div>
    )
}

export default FooterLinks;