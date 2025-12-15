import Head from 'next/head';
import NavBar from '@/components/NavBar';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Kasun Bandara</title>
        <meta name="description" content="Get in touch with Kasun Bandara" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="main-container">
        <div className="contact-container">
          <div className="contact-header">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">Open to interesting conversations and collaborations</p>
          </div>

          <div className="contact-content">
            <div className="contact-card">
              <h2>Work & Projects</h2>
              <p>Interested in discussing enterprise systems, AI automation, or technical architecture? I enjoy talking about systems that scale and last.</p>
            </div>

            <div className="contact-card">
              <h2>Creative Collaborations</h2>
              <p>Exploring projects that blend technology and creativity—music software, audio tools, or experiments at the intersection of sound and code.</p>
            </div>

            <div className="contact-card">
              <h2>Mentoring & Learning</h2>
              <p>Always open to discussions about software craftsmanship, career growth, or sharing experiences from building large-scale systems.</p>
            </div>
          </div>

          <div className="contact-info">
            <p className="tagline">&quot;Good work doesn&apos;t need to be loud.&quot;</p>
          </div>
        </div>
      </main>

      <style jsx>{`
        .contact-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 3rem 0;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #1F1F1F;
          margin-bottom: 1rem;
        }

        .contact-subtitle {
          font-size: 1.2rem;
          color: #4A4A4A;
          font-weight: 400;
        }

        .contact-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .contact-card {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .contact-card h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1F1F1F;
          margin-bottom: 1rem;
        }

        .contact-card p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #4A4A4A;
        }

        .contact-info {
          text-align: center;
          padding: 3rem 0;
          border-top: 2px solid #E0E0E0;
        }

        .tagline {
          font-size: 1.8rem;
          font-weight: 600;
          color: #1F1F1F;
          font-style: italic;
        }

        @media (max-width: 968px) {
          .contact-title {
            font-size: 2.5rem;
          }

          .contact-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .contact-title {
            font-size: 2rem;
          }

          .contact-card {
            padding: 2rem;
          }

          .tagline {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  );
}

