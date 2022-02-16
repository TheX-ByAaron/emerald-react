
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
            className="h-[60px] m-3 py-2 px-5 inline-flex flex-row items-center bg-primary hover:bg-primary-dark 
            disabled:bg-disabled disabled:text-disabled-dark text-primary-screen 
            rounded-lg transition-all"
            onClick={()=> handleOnClick()}>
            {props.children}
        </button>
    )
}

export const ButtonIcon = (props) => {
    const icon = props.icon;

    return (
        <img src={icon} alt="icon" className="h-[25px]" />
    )
}
