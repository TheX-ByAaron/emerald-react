import { useState } from "react";
import LoadingDialog from "../components/LoadingDialog";
import animation from "../assets/animations/crazed_rabbit.json";

const Home = ()=>{

    const [isOpen, setIsOpen] = useState(true);

    // function OpenHandler(){
    //     setIsOpen(false);
    // }

    function closeHandler(){
        setIsOpen(false);
    }
    return (
        <div className="w-full h-screen grid content-center justify-items-center 
        bg-primary-surface">
            <LoadingDialog
                loop={true}
                play={true}
                animationData={animation}
                isOpen={isOpen}
                onRequestClose={closeHandler}
                height={60}
                width={60}
                />
        </div>
    )
}

export default Home;