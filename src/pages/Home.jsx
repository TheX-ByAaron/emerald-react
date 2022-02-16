import {IconifiedButton} from "../components/Button";
import Icon from "../assets/icons/musicnote.svg"

const Home = ()=>{

    function handleOnClick(){
        window.alert('this is a click')
    }

    return (
        <div className="w-full h-screen grid content-center justify-items-center">
            <IconifiedButton
                isDisabled={true}
                icon={Icon}
                onClick={handleOnClick} />
        </div>
    )
}

export default Home;