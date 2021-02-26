import React from "react"

const ButtonSecondary = ({children}) => {
    return (
        <button className="text-2.5xl font-bold text-purple-700 border-4 border-purple-700 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition duration-300 py-2 px-8 m-4 rounded-lg">
            {children}
        </button>
    )
}

export default ButtonSecondary