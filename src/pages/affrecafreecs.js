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
import AfreecaFreecs from "../components/AfreecaFreecs"


const affrecafreecs = () => (
  <Layout>
    <SEO title="Afreeca Freecs" />
    <AfreecaFreecs></AfreecaFreecs>
    <Footer></Footer> 
  </Layout>
)


export default affrecafreecs
