const Button = (props) => {

    let button
    const defaultStyle = 'rounded-3xl py-3 px-6 rounded cursor-pointer font-semibold'
    if (props.type == 'primary' || props.type == "") {
        button = (
            <button onClick={props.onClick} className={`${props.className} ${defaultStyle} bg-orange-400`}>
                {props.children}
            </button>
        )
    } 
    else if (props.type == 'hollow') {
        button = (
            <button onClick={props.onClick} className={`${props.className} ${defaultStyle} border border-white hover:bg-orange-400 hover:border-orange-400` }>
                {props.children}
            </button>
        )
    } 
    else if (props.type == 'primary-rounded') {
        button = (
            <button onClick={props.onClick} className={`${props.className} ${defaultStyle} rounded-r-full rounded-l-full bg-orange-400 hover:bg-orange-500 active:bg-orange-600 focus:ring focus:ring-orange-200`}>
                {props.children}
            </button>
        )    
    }
    else {
        button = (
            <button onClick={props.onClick} className={`${props.className}  ${defaultStyle} bg-orange-400`}>
                {props.children}
            </button>
        )
    }
    
    return (
        <>
            {button}
        </>
    )
}

export default Button