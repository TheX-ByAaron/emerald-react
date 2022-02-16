import { useState } from "react";
import { PasswordInput } from "../components/Input";
import Icon from "../assets/icons/user.svg";

const Home = ()=>{

    const [value, setValue] = useState("");

    return (
        <div className="w-full h-screen bg-primary-surface">
            <PasswordInput 
                EmeraldStyle="w-full"
                icon={Icon}
                disabled={true}
                type="text"
                placeholder="Input a text please..."
                value={value}
                onValueChange={(event) => {
                    setValue(event.target.value);
                }}/>
        </div>
    )
}

export default Home;