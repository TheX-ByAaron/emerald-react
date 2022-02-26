import ImageCheckBox from "../components/ImageCheckBox";
import Image from "../assets/images/image.jpg";
import { useState } from "react";

const Home = ()=>{
    const [checked, setChecked] = useState(false);

    function replaceCheck(){
        setChecked(isChecked => isChecked = !checked);
    }

    return (
        <div className="w-full h-screen grid content-center justify-items-center 
        bg-primary-surface">
            <ImageCheckBox 
                src={Image} 
                EmeraldStyle="h-[150px] w-[300px]"
                checked={checked}
                onCheckChange={replaceCheck}
            />
        </div>
    )
}

export default Home;