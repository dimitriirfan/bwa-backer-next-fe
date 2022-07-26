const Button = (props) => {

    let button
    const defaultStyle = 'rounded-3xl py-3 px-6 rounded cursor-pointer font-semibold'
    if (props.type == 'primary' || props.type == "") {
        button = (
            <div className={`${props.className} ${defaultStyle} bg-orange-400`}>
                {props.children}
            </div>
        )
    } 
    else if (props.type == 'hollow') {
        button = (
            <div className={`${props.className} ${defaultStyle} border border-white hover:bg-orange-400 hover:border-orange-400` }>
                {props.children}
            </div>
        )
    } 
    else if (props.type == 'primary-rounded') {
        button = (
            <div className={`${props.className} ${defaultStyle} rounded-full bg-orange-400 hover:bg-orange-500 `}>
                {props.children}
            </div>
        )    
    }
    else {
        button = (
            <div className={`${props.className}  ${defaultStyle} bg-orange-400`}>
                {props.children}
            </div>
        )
    }
    
    return (
        <>
            {button}
        </>
    )
}

export default Button