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
import Uxui from "../components/Uxui"


const uxui = () => (
  <Layout>
    <SEO title="Portfolio Template" />
    <Uxui></Uxui>
    <Footer></Footer> 
  </Layout>
)


export default uxui
