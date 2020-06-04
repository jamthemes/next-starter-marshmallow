import React from "react"
import Head from "next/head"

import Menu from "../components/Menu"
import Hero from "../components/Hero"
import Services from "../components/Services"
import WorkProcess from "../components/WorkProcess"
import Projects from "../components/Projects"
import Testimonials from "../components/Testimonials"
import ClientLogos from "../components/ClientLogos"
import Pricing from "../components/Pricing"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Index() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Modern GatsbyJS landing page template provided by JamThemes.io"
        />
        <title>Marshmallow - A modern GatsbyJS Landing Page</title>
        <link rel="shortcut icon" href="images/favicon.png" />
      </Head>

      <div>
        <Menu />
        <div className="page-body-wrapper">
          <Hero />
          <Services />
          <WorkProcess />
          <Projects />
          <Testimonials />
          <ClientLogos />
          <Pricing />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  )
}
