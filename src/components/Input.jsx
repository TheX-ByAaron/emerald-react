

const Input = (props) => {

    let icon;
    let bg;

    if(props.icon){
        icon = <img src={props.icon} alt="icon" className="h-[25px] mr-3"/>
    }else{
        icon = <div></div>
    }

    if(props.disabled){
        bg = `bg-disabled`
    }else{
        bg = `bg-primary-screen`
    }

    return (
        <div className={`h-[60px] px-3 
        inline-flex flex-row items-center rounded-lg ${bg} ${props.EmeraldStyle}`}>

            {icon}
            <input 
                disabled={props.disabled}
                type={props.type} 
                name={props.name} 
                value={props.value}
                placeholder={props.placeholder}
                onChange={event => props.onValueChange(event)}
                className="h-full outline-none disabled:bg-disabled 
                disabled:placeholder:text-disabled-dark rounded-lg"/>
        </div>
    )
}

export default Input;