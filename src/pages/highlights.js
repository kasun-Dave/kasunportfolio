import Head from 'next/head';
import NavBar from '@/components/NavBar';

export default function Highlights() {
  return (
    <>
      <Head>
        <title>Work - Kasun Bandara</title>
        <meta name="description" content="Projects and systems I have built" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="main-container">
        <div className="highlights-container">
          <div className="highlights-header">
            <h1 className="highlights-title">Work</h1>
            <p className="highlights-subtitle">Building systems that matter</p>
          </div>

          <div className="highlights-grid">
            <div className="highlight-card">
              <h3>Enterprise CRM Features</h3>
              <p>Designed and implemented core features for customer relationship management systems used by global enterprises. Built workflows that handle complex business logic while staying maintainable.</p>
            </div>

            <div className="highlight-card">
              <h3>ERP Platform Development</h3>
              <p>Contributed to large-scale ERP systems where performance, data integrity, and correctness are critical. Worked on features that process thousands of transactions while maintaining system stability.</p>
            </div>

            <div className="highlight-card">
              <h3>AI-Powered Automation</h3>
              <p>Exploring intelligent features that make enterprise software more capable. Experimenting with AI agents, scoring systems, and automation that assists rather than replaces human judgment.</p>
            </div>

            <div className="highlight-card">
              <h3>Internal Tools & Productivity</h3>
              <p>Built tools that help teams move faster without breaking things. Created developer utilities, testing frameworks, and automation scripts that reduce friction and improve reliability.</p>
            </div>

            <div className="highlight-card">
              <h3>System Architecture & Design</h3>
              <p>Led architectural discussions for features that need to scale and last. Made decisions about data models, API design, and system boundaries that balance immediate needs with long-term maintainability.</p>
            </div>

            <div className="highlight-card">
              <h3>Creative & Music Projects</h3>
              <p>Side projects that blend technology and creativity. Audio production tools, music composition software, and experiments that explore the intersection of sound and code.</p>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .highlights-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 0;
        }

        .highlights-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .highlights-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #1F1F1F;
          margin-bottom: 1rem;
        }

        .highlights-subtitle {
          font-size: 1.2rem;
          color: #4A4A4A;
          font-weight: 400;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .highlight-card {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .highlight-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .highlight-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1F1F1F;
          margin-bottom: 1rem;
        }

        .highlight-card p {
          font-size: 1rem;
          line-height: 1.7;
          color: #4A4A4A;
        }

        @media (max-width: 968px) {
          .highlights-title {
            font-size: 2.5rem;
          }

          .highlights-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .highlights-title {
            font-size: 2rem;
          }

          .highlight-card {
            padding: 2rem;
          }
        }
      `}</style>
    </>
  );
}

