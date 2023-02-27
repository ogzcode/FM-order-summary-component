import avatar from "../images/hero.svg";
import Content from "./Content";

function OrderMain() {
    return (
        <div className='bg-white w-[400px] z-[1] rounded-2xl shadow-xl'>
            <img src={avatar} alt='avatar' className='rounded-t-2xl' />
            <Content/>
        </div>
    );
}

export default OrderMain;