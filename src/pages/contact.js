import Head from 'next/head';
import NavBar from '@/components/NavBar';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Join / Contact - Kavindu Vikum</title>
        <meta name="description" content="Get in touch with Kavindu Vikum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="main-container">
        <div className="contact-container">
          <div className="contact-header">
            <h1 className="contact-title">Join / Contact</h1>
            <p className="contact-subtitle">Let&apos;s connect and play together!</p>
          </div>

          <div className="contact-content">
            <div className="contact-card">
              <h2>🎮 Gaming</h2>
              <p>Looking for squad members or want to team up in Free Fire? Let&apos;s coordinate and dominate!</p>
              <a href="https://www.youtube.com/@ZABIFF-ue3ot/videos" target="_blank" rel="noopener noreferrer" className="youtube-btn">
                🎥 Watch My Gameplay Videos
              </a>
            </div>

            <div className="contact-card">
              <h2>🏏 Cricket</h2>
              <p>Interested in cricket discussions or training sessions at Vidyaratha College, Kandy? Reach out!</p>
            </div>

            <div className="contact-card">
              <h2>📧 Get in Touch</h2>
              <p>For collaborations, tournaments, or just to chat about gaming and sports strategy.</p>
            </div>
          </div>

          <div className="contact-info">
            <p className="tagline">&quot;Play with purpose. Compete with discipline.&quot;</p>
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
          margin-bottom: 1.5rem;
        }

        .youtube-btn {
          display: inline-block;
          background-color: #FF0000;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .youtube-btn:hover {
          background-color: #CC0000;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 0, 0, 0.3);
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

