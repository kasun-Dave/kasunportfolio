import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import HireMe from '@/components/HireMe';
import LightBulb from '@/components/LightBulb';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kasun Bandara - Developer, Musician, Builder</title>
        <meta name="description" content="Lead Software Engineer building thoughtful enterprise systems with a background in music and creative thinking" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="main-container">
        <div className="hero-section">
          {/* Profile Image */}
          <div className="profile-image-container">
            <Image 
              src="images/profile/kasunprofile.png" 
              alt="Kasun Bandara" 
              width={550} 
              height={550}
              priority
              className="profile-image"
            />
          </div>

          {/* Hero Content */}
          <div className="hero-content">
            <h1 className="hero-title">
              Where Code, Creativity, and Craft Meet.
            </h1>
            <p className="hero-description">
              I&apos;m <strong>Kasun Bandara</strong>, a Lead Software Engineer working on large-scale enterprise systems at IFS. I design and build CRM and ERP platforms used by global customers, exploring AI-powered automation and intelligent features. As a trained musician, I understand rhythm, structure, and creativity—principles that shape how I approach software. I build systems carefully, not rushed, with a focus on clarity and long-term impact.
            </p>
            <div className="hero-buttons">
              <a href="/dummy.pdf" download className="btn-primary">
                Resume 
                <Image 
                  src="images/svgs/external-link.svg" 
                  alt="Download" 
                  width={20} 
                  height={20}
                  className="btn-icon"
                />
              </a>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Join Squad Badge */}
        <HireMe />

        {/* Trophy */}
        <LightBulb />
      </main>
    </>
  );
}
