import ImageCheckBox from "../components/ImageCheckBox";
import Image from "../assets/images/image.jpg";
import { useState } from "react";
import SideNav from "../components/SideNav";
import SideScaffold from "../components/SideScaffold";

const Home = ()=>{
    const [activeItem, setActiveItem] = useState(0);

    function replaceIndex(index){
        setActiveItem(currentIndex => currentIndex = index);
    }

    let header = (
        <img src={Image} alt="main logo" className="h-4/5 m-auto" />
    )

    let sideNav = (
        <SideNav 
                header={header}
                navItems={[{
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>,
                    title: "Hello"
                },
                {
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>,
                    title: "music"
                },
                {
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>,
                    title: "kero"
                },
                {
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>,
                    title: "more than that"
                }]}
                
                onItemClick={(index) => { replaceIndex(index)}}
                activeItemIndex={activeItem}/>
    )

    return (
        <div className="w-full min-h-screen bg-primary-surface">
            
            <SideScaffold sideNav={sideNav} >

                <div className="p-4">
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
            </SideScaffold>
            
        </div>
    )
}

export default Home;