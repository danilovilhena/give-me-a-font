import React from "react"
import { Link } from "gatsby"

const Layout = ({children}) => {
    return (
    <>
    <header className="max-w-6xl w-4/5 mx-auto flex justify-center mt-4 mb-12">
        <Link to="/" className="transition duration-300 font-bold text-4xl text-purple-700 hover:text-purple-600" style={{fontFamily: ['Pacifico', 'sans-serif']}}>Give me a font!</Link>
    </header>
    {children}
    <footer className="max-w-6xl w-4/5 mx-auto flex justify-center mb-4 mt-12">
        <p className="text-xl text-purple-700">Developed by <a className="hover:text-purple-600 hover:underline transition duration-300" href="https://danilovilhena.com/en">Danilo Vilhena</a></p>
    </footer>
    </>
    )
}

export default Layout