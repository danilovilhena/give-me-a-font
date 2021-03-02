import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ButtonPrimary from "../components/ButtonPrimary"
import ButtonSecondary from "../components/ButtonSecondary"
import FontJson from "../assets/display.json"

const buildFontAndArrayString = (font) => {
    let str = "https://fonts.googleapis.com/css2?family=" + encodeURIComponent(font.family)
    let arr = [[],[]]
    if(Object.keys(font.files).toString().includes('italic')){
        str += ":ital,wght@"
        Object.keys(font.files).forEach((file) => {
            if(file === 'regular') arr[0].push('400')
            else if(file === 'italic') arr[1].push('400')
            else {
                if(file.includes('italic')) arr[1].push(file.replace(/\D/g, ""))
                else arr[0].push(file)
            }
        })
        arr[0].sort(function(a, b) { return a - b })
        arr[1].sort(function(a, b) { return a - b })

        arr[0].forEach(el => {
            str += "0," + el + ";"
        })

        arr[1].forEach(el => {
            str += "1,"+ el + ";"
        })

        str = str.slice(0, -1)
    } else {
        str += ":wght@"
        Object.keys(font.files)[Object.keys(font.files).indexOf('regular')] = '400'
        Object.keys(font.files).forEach((file) => {
            if(file === 'regular') arr[0].push(400)
            else arr[0].push(file)
        })
        arr[0].map(el => { return +el })
        arr[0].sort(function(a, b) { return a - b })
        str += arr[0].toString().replaceAll(',', ';')
    }

    str += "&display=swap"

    return [str, arr]
}

const DisplayPage = () => {
    const selectedFont = FontJson.items[Math.floor(Math.random() * FontJson.items.length)]
    let result = buildFontAndArrayString(selectedFont)
    selectedFont['str'] = result[0]
    selectedFont['arr'] = result[1]

    return (
    <Layout>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href={selectedFont.str} rel="stylesheet"></link>

        <main className="max-w-6xl w-4/5 mx-auto flex flex-col">
            <section className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <div>
                    <h2>Here is your font:</h2>
                    <p className="mt-2 text-purple-700 text-4xl" style={{fontFamily: [selectedFont.family, 'cursive']}}>{selectedFont.family}</p>
                </div>
                <div className="mt-4 hidden md:block">
                    <a className="text-xl font-bold text-white border-4 border-blue-600 hover:border-blue-500 bg-blue-600 hover:bg-blue-500 transition duration-300 py-2 px-4 rounded-lg" href={"https://fonts.google.com/specimen/" + encodeURIComponent(selectedFont.family)}>
                        Google Fonts
                    </a>
                </div>
            </section>
            <section className="mb-12">
                <h2 className="mb-2">Font weights available:</h2>
                <div className="flex flex-wrap flex-col mb-4">
                    <h3 className="text-3xl mb-2 font-bold">Regular</h3>
                    <div className="flex flex-wrap justify-start">
                        {selectedFont.arr[0].map((variant) => {
                            return (
                                <div className="mr-12" key={variant}>
                                    <h4 className="text-2xl">{variant}</h4>
                                    <p className="text-purple-700 text-3xl" style={{fontFamily: [selectedFont.family, 'cursive'], fontWeight: variant, fontStyle: 'normal'}}>{selectedFont.family}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-wrap flex-col">
                    {selectedFont.arr[1].length !== 0 && <h3 className="text-3xl mb-2 font-bold">Italic</h3>}
                    <div className="flex flex-wrap justify-start">
                        {selectedFont.arr[1].length !== 0 && selectedFont.arr[1].map((variant) => {
                            return (
                                <div className="mr-12" key={variant}>
                                    <h4 className="text-2xl">{variant}</h4>
                                    <p className="text-purple-700 text-3xl" style={{fontFamily: [selectedFont.family, 'cursive'], fontWeight: variant, fontStyle: 'italic'}}>{selectedFont.family}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="flex flex-col-reverse md:flex-row items-center justify-center">
                <Link to="/"><ButtonSecondary>Return</ButtonSecondary></Link>
                <Link to="/display"><ButtonPrimary>Generate another</ButtonPrimary></Link>
                <a className="text-xl font-bold text-white border-4 border-blue-600 hover:border-blue-500 bg-blue-600 hover:bg-blue-500 transition duration-300 py-2 px-4 mb-3 rounded-lg md:hidden" href={"https://fonts.google.com/specimen/" + encodeURIComponent(selectedFont.family)}>
                    Google Fonts
                </a>
            </section>
        </main>
    </Layout>
    )
}

export default DisplayPage