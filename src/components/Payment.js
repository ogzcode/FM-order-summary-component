import icon from "../images/icon-music.svg";

function Payment() {
    return (
        <div className='flex items-center bg-[#f5f7ff] p-4 rounded-md relative my-4'>
            <img src={icon} alt="music icon" />
            <div className='ml-3 text-left'>
                <p className='text-base font-black text-[#1f2f56]'>Annual Plan</p>
                <p className='text-sm  text-[#7280a7] font-light'>$59.99/year</p>
            </div>
            <a
                href="/"
                className='
                    absolute right-0 
                    mr-4 text-sm underline 
                    text-[#3829e0] font-bold 
                    hover:no-underline 
                    hover:opacity-70'
            >
                Change
            </a>
        </div>
    );
}

export default Payment;