import ImageCheckBox from "../components/ImageCheckBox";
import musicNote from "../assets/icons/eye.svg";
import Image from "../assets/images/image.jpg";
import { useState } from "react";
import SideNav from "../components/SideNav";

const Home = ()=>{
    const [checked, setChecked] = useState(false);
    const [activeItem, setActiveItem] = useState(0);

    function replaceIndex(index){
        setActiveItem(currentIndex => currentIndex = index);
    }

    let header = (
        <img src={Image} alt="main logo" className="h-4/5 m-auto" />
    )

    return (
        <div className="w-full min-h-screen bg-primary-screen">
            <SideNav 
                header={header}
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
                
                onItemClick={(index) => { replaceIndex(index)}}
                activeItemIndex={activeItem}/>

            <div className="ml-[25%] p-4">
                <ImageCheckBox 
                checked={false}
                src={Image}
                EmeraldStyle="h-[200px] w-[200px]"/>

                <ImageCheckBox 
                checked={false}
                src={Image}
                EmeraldStyle="h-[200px] w-[200px]"/>

                <ImageCheckBox 
                checked={false}
                src={Image}
                EmeraldStyle="h-[200px] w-[200px]"/>

                <ImageCheckBox 
                checked={false}
                src={Image}
                EmeraldStyle="h-[200px] w-[200px]"/>

                <ImageCheckBox 
                checked={false}
                src={Image}
                EmeraldStyle="h-[200px] w-[200px]"/>

                <ImageCheckBox 
                checked={false}
                src={Image}
                EmeraldStyle="h-[200px] w-[200px]"/>

                <ImageCheckBox 
                checked={false}
                src={Image}
                EmeraldStyle="h-[200px] w-[200px]"/>

                <ImageCheckBox 
                checked={false}
                src={Image}
                EmeraldStyle="h-[200px] w-[200px]"/>
            </div>
            
        </div>
    )
}

export default Home;