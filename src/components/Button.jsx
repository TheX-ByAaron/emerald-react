
const buttonStyle = `inline-flex flex-row items-center 
            bg-primary hover:bg-primary-dark disabled:bg-disabled 
            disabled:text-disabled-dark text-primary-screen 
            rounded-lg transition-all`


export const Button = (props) => {

    const isDisabled = props.isDisabled;
    
    const handleOnClick = ()=>{
        if(!isDisabled){
            props.onClick();
        }
    };

    return (
        <button 
            disabled={isDisabled}
            className={`h-[60px] m-3 py-2 px-5 ${buttonStyle}`}
            onClick={()=> handleOnClick()}>
            {props.children}
        </button>
    )
}


export const IconifiedButton = (props) => {

    function handleOnClick(){
        if(!props.isDisabled){
            props.onClick()
        }
    }

    return (
        <button 
            className={`h-[60px] w-[60px] m-3 p-5 ${buttonStyle}`}
            disabled={props.isDisabled}
            onClick={handleOnClick}>
            <ButtonIcon icon={props.icon}/>
        </button>
    )
}

export const ButtonIcon = (props) => {
    const icon = props.icon;

    return (
        <img src={icon} alt="icon" className="h-[25px]" />
    )
}
