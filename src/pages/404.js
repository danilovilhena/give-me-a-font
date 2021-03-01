import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ButtonSecondary from "../components/ButtonSecondary"
import Illustration from '../images/404.svg'

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <main className="flex items-center justify-center flex-col">
        <img style={{height: '50vh'}} src={Illustration} alt="Character holding the numbers 404"></img>
        <h2>Page not found! </h2>
        <p className="mb-12">Please return to the website with the button below.</p>
        <Link to="/"><ButtonSecondary>Return</ButtonSecondary></Link>
      </main>

    </Layout>
  )
}

export default NotFoundPage
