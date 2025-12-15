import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Kasun Bandara</title>
        <meta name="description" content="Learn more about Kasun Bandara" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="main-container">
        <div className="about-container">
          <div className="about-header">
            <h1 className="about-title">About Me</h1>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                I am <strong>Kasun Bandara</strong>, a Lead Software Engineer at IFS working on enterprise CRM and ERP systems. 
                My role involves designing and implementing scalable backend features for platforms used by global customers, 
                while leading technical decisions and mentoring other engineers.
              </p>
              
              <p className="about-description">
                I like building systems that feel simple on the surface, even when they are complex underneath. 
                I enjoy solving problems calmly and thinking long-term about maintainability and impact. 
                Before software, I trained as a musician—learning rhythm, structure, and how small details shape the whole. 
                That discipline influences how I approach code. I value clarity, focus, and depth over noise.
              </p>

              <div className="skills-section">
                <h2 className="skills-title">Skills</h2>
                <div className="skills-grid">
                  <div className="skill-card">
                    <h3>Development</h3>
                    <p className="skill-detail">Java, SQL, REST APIs, Enterprise Backend Systems, CRM/ERP Platforms</p>
                  </div>
                  <div className="skill-card">
                    <h3>AI & Automation</h3>
                    <p className="skill-detail">AI Agents, LLM Workflows, Intelligent Features, System-Assisted Decision-Making</p>
                  </div>
                  <div className="skill-card">
                    <h3>Leadership</h3>
                    <p className="skill-detail">Technical Decision-Making, Mentoring Engineers, Cross-Team Collaboration</p>
                  </div>
                  <div className="skill-card">
                    <h3>System Design</h3>
                    <p className="skill-detail">Large-Scale Features, Performance, Correctness, Long-Term Stability</p>
                  </div>
                  <div className="skill-card">
                    <h3>Creative</h3>
                    <p className="skill-detail">Music Composition, Audio Production, Creative Thinking, Storytelling</p>
                  </div>
                  <div className="skill-card">
                    <h3>Product Thinking</h3>
                    <p className="skill-detail">UX Collaboration, Feature Design, User-Centered Systems</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image">
              <Image 
                src="images/profile/kasunprofile.png" 
                alt="Kasun Bandara" 
                width={400} 
                height={400}
                className="about-profile-image"
              />
            </div>
          </div>

          <div className="footer-tagline">
            <h3>&quot;I believe good work doesn&apos;t need to be loud. Whether in code or music, I try to build things that feel balanced, intentional, and human.&quot;</h3>
          </div>
        </div>
      </main>

      <style jsx>{`
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 0;
        }

        .about-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .about-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #1F1F1F;
          margin-bottom: 1rem;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 4rem;
          align-items: start;
          margin-bottom: 4rem;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .about-intro,
        .about-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4A4A4A;
        }

        .about-intro strong {
          color: #1F1F1F;
          font-weight: 700;
        }

        .skills-section {
          margin-top: 2rem;
        }

        .skills-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1F1F1F;
          margin-bottom: 1.5rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .skill-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .skill-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1F1F1F;
          margin-bottom: 0.75rem;
        }

        .skill-detail {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #4A4A4A;
          margin: 0;
        }

        .about-image {
          position: sticky;
          top: 2rem;
        }

        .about-profile-image {
          width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .footer-tagline {
          text-align: center;
          padding: 3rem 0;
          border-top: 2px solid #E0E0E0;
        }

        .footer-tagline h3 {
          font-size: 1.5rem;
          font-weight: 500;
          color: #1F1F1F;
          font-style: italic;
          line-height: 1.7;
          max-width: 900px;
          margin: 0 auto;
        }

        @media (max-width: 968px) {
          .about-title {
            font-size: 2.5rem;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-image {
            order: -1;
            max-width: 350px;
            margin: 0 auto;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .about-title {
            font-size: 2rem;
          }

          .footer-tagline h3 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  );
}
