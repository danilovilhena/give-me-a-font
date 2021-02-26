import React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout"
import ButtonPrimary from "../components/ButtonPrimary"
import ButtonSecondary from "../components/ButtonSecondary"

const SansSerifPage = () => {
    return (
    <Layout>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>

        <main className="max-w-6xl w-4/5 mx-auto flex flex-col">
            <section className="flex flex-row justify-between align-start mb-12">
                <div>
                    <h2>Here is your font: </h2>
                    <p className="mt-2 text-purple-700 text-5xl" style={{fontFamily: ['Pacifico', 'display']}}>Pacifico</p>
                </div>
                <div>
                    <button className="text-xl font-bold text-white border-4 border-blue-600 hover:border-blue-500 bg-blue-600 hover:bg-blue-500 transition duration-300 py-2 px-4 m-4 rounded-lg">
                        Google Fonts
                    </button>
                </div>
            </section>
            <section className="mb-12">
                <h2 className="mb-2">Font weights available:</h2>
                <div className="flex">
                    <div className="mr-12">
                        <h3 className="text-2xl">Regular 400</h3>
                        <p className="text-purple-700 text-5xl" style={{fontFamily: ['Pacifico', 'display']}}>Pacifico</p>
                    </div>
                    <div>
                        <h3 className="text-2xl">Bold 700</h3>
                        <p className="text-purple-700 text-5xl" style={{fontFamily: ['Pacifico', 'display']}}>Pacifico</p>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center">
                <Link to="/"><ButtonSecondary>Return</ButtonSecondary></Link>
                <ButtonPrimary onClick={() => window.location.reload()}>Generate another</ButtonPrimary>
            </section>
        </main>
    </Layout>
    )
}

export default SansSerifPage