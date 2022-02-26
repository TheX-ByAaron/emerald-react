import ImageCheckBox from "../components/ImageCheckBox";
import musicNote from "../assets/icons/eye.svg";
import Image from "../assets/images/image.jpg";
import { useState } from "react";
import TopNav from "../components/TopNav";

const Home = ()=>{
    const [checked, setChecked] = useState(false);

    function replaceCheck(){
        setChecked(isChecked => isChecked = !checked);
    }

    return (
        <div className="w-full min-h-screen grid content-center justify-items-center 
        bg-primary-surface">
            <TopNav mainLogo={Image}
                navItems={[{
                    icon: musicNote,
                    title: "Hello"
                },
                {
                    icon: musicNote,
                    title: "music"
                },
                {
                    icon: musicNote,
                    title: "kero"
                },
                {
                    icon: musicNote,
                    title: "more than that"
                }]}
                
                onItemClick={(index) => { alert(index)}}
                onMainLogoClick={() => alert("logo")}/>
            
        </div>
    )
}

export default Home;