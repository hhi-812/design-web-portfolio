import React from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import Kpga from "../components/Kpga"


const kpga = () => (
  <Layout>
    <SEO title="Portfolio Template" />
    <Kpga></Kpga>
    <Footer></Footer> 
  </Layout>
)


export default kpga
