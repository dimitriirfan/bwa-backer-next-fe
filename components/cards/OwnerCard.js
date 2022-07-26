import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import OwnerPicture from "../images/OwnerPicture"

const OwnerCard = (props) => {
    return (
        <div className={`${props.className} bg-white rounded-2xl text-gray-900 p-8 px-12 flex flex-col items-center gap-2`}>
            <OwnerPicture src="/images/sample-owner.png" />
            <p className="text-xl font-bold">Julia Keeva</p>
            <p className="text-gray-400 font-light">Project Manager</p>
            <div className="flex gap-2">
                <FontAwesomeIcon className="text-yellow-300 text-xl" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-300 text-xl" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-300 text-xl" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-300 text-xl" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-300 text-xl" icon={faStar} />
            </div>
            <div className="flex justify-between text-gray-400 gap-8 font-light text-sm">
                <p>5/5</p>
                <p>208 Projects</p>
            </div>
        </div>
    )
}

export default OwnerCard