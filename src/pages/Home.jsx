import { useState } from "react";
import { Input } from "../components/Input";
import Icon from "../assets/icons/user.svg";

const Home = ()=>{

    const [value, setValue] = useState("");

    return (
        <div className="w-full h-screen bg-primary-surface">
            <Input 
                EmeraldStyle="w-3/5"
                icon={Icon}
                disabled={false}
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