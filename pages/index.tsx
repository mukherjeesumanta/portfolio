
import { NextPage } from 'next'
import Head from 'next/head'

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BackgroundCircles from '@/components/BackgroundCircles';
import About from '../components/About';

const Home : NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
        {/* Header */}
        <Header />

        {/* Hero */}
        <section id="hero">
          <Hero />
        </section>

        {/* Hero */}
        <section id="about">
          <About />
        </section>
      </div>
      
    </>
  )
}

export default Home;

