const Input = (props) => {

    return (
        <div className="flex flex-col gap-2">
            {props.children}
            <input 
                style={props.style}
                disabled={props.disabled}
                value={props.value} 
                onChange={props.onChange} 
                className={`w-full rounded-full h-12 pl-6 text-gray-900 ${props.errorMessage && 'text-red-500 border-2 border-red-500 '}`}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
            />
            {props.errorMessage && <p className="font-light text-red-500 text-sm">{props.errorMessage}</p>}
        </div>
    )
}

export default Input