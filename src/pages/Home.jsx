import { useState } from "react";
import { ActionInput } from "../components/Input";
import Icon from "../assets/icons/send.svg";

const Home = ()=>{

    const [value, setValue] = useState("");

    function handleAction(){
        alert(value);
    }
    return (
        <div className="w-full h-screen grid content-center justify-items-center 
        bg-primary-surface">
            <ActionInput 
                EmeraldStyle="w-3/5"
                actionIcon={Icon}
                disabled={false}
                type="text"
                placeholder="Input a text please..."
                value={value}
                onActionClick={handleAction}
                onValueChange={(event) => {
                    setValue(event.target.value);
                }}/>
        </div>
    )
}

export default Home;