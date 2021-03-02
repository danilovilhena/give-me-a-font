import React from "react"
import {Link} from "gatsby"
import SEO from "../components/SEO"
import ButtonPrimary from "../components/ButtonPrimary"
import Layout from "../components/Layout"
import Illustration from "../images/illustration.svg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO 
        lang="en"
        title="Home" 
        description="Home page"/>

      <main className="max-w-6xl w-10/12 sm:w-4/5 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-2" style={{fontFamily: ['Poppins', 'sans-serif']}}>An easy way to get your next font!</h1>
        <section className="flex flex-col items-center mb-12 w-full">
          <p className="text-center text-xl md:text-2xl lg:text-2.5xl mb-4">Choose a font style and we will give you an awesome free font.</p>
          <div className="flex justify-center items-center flex-wrap w-full md:w-2/3 mb-4">
            <Link to="/sans-serif"><ButtonPrimary>Sans-serif</ButtonPrimary></Link>
            <Link to="/serif"><ButtonPrimary>Serif</ButtonPrimary></Link>
            <Link to="/display"><ButtonPrimary>Display</ButtonPrimary></Link>
            <Link to="/handwriting"><ButtonPrimary>Handwriting</ButtonPrimary></Link>
            <Link to="/monospace"><ButtonPrimary>Monospace</ButtonPrimary></Link>
          </div>
          <img className="w-11/12 lg:w-full max-w-md"src={Illustration} alt="Person using a desktop computer"></img>
        </section>
        <section className="w-full">
          <article className="w-full">
            <h2 className="mb-2">How does it work?</h2>
            <p className="mb-4">We have a database of a bunch of free fonts and based on the style you choose, we randomly selected a font that fits in that category.</p>
            <p>If you don’t like the chosen one, you have the option to generate another font in same style or return and pick a different one.</p>
          </article>
          <article className="w-full mt-8 lg:mt-12">
            <h2 className="mb-2">I have no clue what a font style is, what do I do?</h2>
            <p className="mb-4">Don’t worry about it! Here are some examples of each font style to help you start out:</p>
            <div className="flex flex-wrap">
              <p className="mr-8 text-purple-700 text-3xl" style={{fontFamily: ['Raleway', 'sans-serif']}}>Sans-serif</p>
              <p className="mr-8 text-purple-700 text-3xl" style={{fontFamily: ['Cormorant', 'serif']}}>Serif</p>
              <p className="mr-8 text-purple-700 text-3xl" style={{fontFamily: ['Amatic SC', 'serif']}}>Display</p>
              <p className="mr-8 text-purple-700 text-3xl" style={{fontFamily: ['Dancing Script', 'serif']}}>Handwriting</p>
              <p className="text-purple-700 text-3xl" style={{fontFamily: ['Space Mono', 'sans-serif']}}>Monospace</p>
            </div>
          </article>
          <article className="w-full mt-8 lg:mt-12">
            <h2 className="mb-2">Why would I use this website?</h2>
            <p className="mb-4">In my designs, I had a hard time chossing a good font, I would always spent a great amount of time comparing small differences between fonts.</p>
            <p>So, this website leaves it up to fate and lets the computer pick one for me after choosing only the style.</p>
          </article>
          <article className="w-full mt-8 lg:mt-12">
            <h2 className="mb-2">Are all the fonts actually free?</h2>
            <p className="mb-4">Yes! That’s was a huge concern when developing this, because for new designers it can be tough having the financial condition to pay for fonts.</p>
            <p>That way, all the fonts are either from Google Fonts or from another free source.</p>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
