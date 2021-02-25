import React from "react"
import { Link } from "gatsby"
import ButtonPrimary from "../components/ButtonPrimary"
import Illustration from "../images/illustration.svg"

const IndexPage = () => {
  return (
  <>
    <header className="max-w-6xl w-4/5 mx-auto flex justify-center mt-4 mb-12">
      <Link to="/" className="transition duration-300 font-bold text-4xl text-purple-700 hover:text-purple-600" style={{fontFamily: ['Pacifico', 'sans-serif']}}>Give me a font!</Link>
    </header>
    <main className="max-w-6xl w-4/5 mx-auto flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl mb-2" style={{fontFamily: ['Poppins', 'sans-serif']}}>An easy way to get your next font!</h1>
      <section className="flex flex-col items-center mb-12">
        <p className="text-2.5xl mb-4">Choose a font style and we will give you an awesome free font.</p>
        <div className="flex justify-center items-center flex-wrap w-2/3 mb-4">
          <ButtonPrimary>Sans-serif</ButtonPrimary>
          <ButtonPrimary>Serif</ButtonPrimary>
          <ButtonPrimary>Display</ButtonPrimary>
          <ButtonPrimary>Handwritten</ButtonPrimary>
          <ButtonPrimary>Monospace</ButtonPrimary>
        </div>
        <img className="max-w-md"src={Illustration} alt="Person using a desktop computer"></img>
      </section>
      <section>
        <article className="w-full">
          <h2>How does it work?</h2>
          <p className="mb-4">We have a database of all a bunch of free fonts and based on the style you choose, we randomly selected a font that fits in that category.</p>
          <p>If you don’t like the chosen one, you have the option to generate another font in same style or return and pick a different one.</p>
        </article>
        <article className="w-full mt-12">
          <h2>I have no clue what a font style is, what do I do?</h2>
          <p className="mb-4">Don’t worry about it! Here are some examples of each font style to help you start out:</p>
          <div className="flex">
            <p className="mr-8 text-purple-700 text-3xl" style={{fontFamily: ['Raleway', 'sans-serif']}}>Sans-serif</p>
            <p className="mr-8 text-purple-700 text-3xl" style={{fontFamily: ['Cormorant', 'serif']}}>Serif</p>
            <p className="mr-8 text-purple-700 text-3xl" style={{fontFamily: ['Amatic SC', 'serif']}}>Display</p>
            <p className="mr-8 text-purple-700 text-3xl" style={{fontFamily: ['Dancing Script', 'serif']}}>Handwritten</p>
            <p className="text-purple-700 text-3xl" style={{fontFamily: ['Space Mono', 'sans-serif']}}>Monospace</p>
          </div>
        </article>
        <article className="w-full mt-12">
          <h2>Why would I use this website?</h2>
          <p className="mb-4">In my designs, I had a hard time chossing a good font, I would always spent a great amount of time comparing small differences between fonts.</p>
          <p>So, this website leaves it up to fate and lets the computer pick one for me after choosing only the style.</p>
        </article>
        <article className="w-full mt-12">
          <h2>Are all the fonts actually free?</h2>
          <p className="mb-4">Yes! That’s was a huge concern when developing this, because for new designers it can be tough having the financial condition to pay for fonts.</p>
          <p>That way, all the fonts are either from Google Fonts or from another free source.</p>
        </article>
      </section>
    </main>
    <footer className="max-w-6xl w-4/5 mx-auto flex justify-center mb-4 mt-12">
      <p className="text-xl text-purple-700">Developed by <a className="hover:text-purple-600 hover:underline transition duration-300" href="https://danilovilhena.com/en">Danilo Vilhena</a></p>
    </footer>
  </>
  )
}

export default IndexPage
