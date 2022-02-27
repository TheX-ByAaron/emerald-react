import { useState } from "react";
import menu from "../assets/icons/menu.svg";

const SideScaffold = (props) => {

    const [isExpanded, setIsExpanded] = useState(true); 
    let contentMargin = "ml-[22%]";
    let sideWidth = "opacity-1 pointer-auto"

    function toggleContentMargin(){
        setIsExpanded(expanded => expanded = !isExpanded);
    }

    if(isExpanded){
        contentMargin = "ml-[22%]";
        sideWidth = "!w-fit";
    }else{
        contentMargin = "ml-[0%]";
        sideWidth = "!hidden";
    }

    return (
        <div>
            <div className={`${sideWidth} transition-all`}>
                {props.sideNav}
            </div>
            <div className={`transition-all ${contentMargin}`}>
                <div className="h-fit p-3">
                    <img src={menu} alt="menu" onClick={toggleContentMargin} className="h-7 my-auto"/>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default SideScaffold;