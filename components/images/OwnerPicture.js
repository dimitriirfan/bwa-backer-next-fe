const OwnerPicture = (props) => {
    return (
        <div className={`${props.className} border-purple-800 border rounded-full p-1.5`}>
            <img alt="" src={`${props.src}`}></img>
        </div>
    )
}

export default OwnerPicture