import React from "react"

const ButtonPrimary = ({children}) => {
    return (
        <button className="text-2.5xl font-bold text-white bg-purple-700 hover:bg-purple-600 transition duration-300 py-3 px-8 m-4 rounded-lg">
            {children}
        </button>
    )
}

export default ButtonPrimary