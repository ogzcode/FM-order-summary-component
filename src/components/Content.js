import Payment from "./Payment";

function Content() {
    return (
        <div className='text-center px-10 py-6'>
            <h1 className='text-2xl font-black text-[#1f2f56]'>Order Summary</h1>
            <p className='text-sm mt-4 text-[#7280a7] font-light'>
                You can now listen to millions of songs, audiobooks, and podcasts on any
                device anywhere you like!
            </p>
            <Payment />
            <button
                className='
                    w-full bg-[#3829e0] py-3 text-white 
                    rounded-lg font-bold mb-6 
                    shadow-xl hover:opacity-80'
            >
                Proceed to Payment
            </button>
            <a href='/' className='text-[#7280a7] font-bold hover:text-[#1f2f56]'>Cancel Order</a>
        </div>
    );
}

export default Content;