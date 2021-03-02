import React from "react"

const ButtonPrimary = (props) => {
    return (
        <button click={props.click} className="text-xl md:text-2xl lg:text-2.5xl font-bold text-white border-4 border-purple-700 hover:border-purple-600 bg-purple-700 hover:bg-purple-600 transition duration-300 py-2 px-4 md:px-6 lg:px-8 m-3 lg:m-4 rounded-lg">
            {props.children}
        </button>
    )
}

export default ButtonPrimary