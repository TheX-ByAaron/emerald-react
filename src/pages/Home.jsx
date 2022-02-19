import { useState } from "react";
import { IconifiedButton } from "../components/Button";
import icon from "../assets/icons/musicnote.svg";
import LoadingDialog from "../components/LoadingDialog";
import animation from "../assets/animations/crazed_rabbit.json";
import { RoundCheckBox, SquareCheckBox, SquareLineCheckBox} from "../components/CheckBox";

const Home = ()=>{

    const [isOpen, setIsOpen] = useState(true);

    // function OpenHandler(){
    //     setIsOpen(false);
    // }

    function closeHandler(){
        setIsOpen(!isOpen);
    }
    return (
        <div className="w-full h-screen grid content-center justify-items-center 
        bg-primary-surface">
            {/* <LoadingDialog
                loop={true}
                play={true}
                animationData={animation}
                isOpen={isOpen}
                onRequestClose={closeHandler}
                height={60}
                width={60}
                /> */}
           <RoundCheckBox
                disabled={false}
                name="checkbox"
                value="check me out"
                checked={isOpen}
                onCheckChange={closeHandler}
                />

           <SquareCheckBox 
                disabled={false}
                name="checkbox"
                value="check me out"
                checked={isOpen}
                onCheckChange={closeHandler}
                />

           <SquareLineCheckBox 
                disabled={false}
                name="checkbox"
                value="check me out"
                checked={isOpen}
                onCheckChange={closeHandler}
                />
            
        </div>
    )
}

export default Home;