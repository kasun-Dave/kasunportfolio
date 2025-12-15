import Head from 'next/head';
import NavBar from '@/components/NavBar';

export default function Highlights() {
  return (
    <>
      <Head>
        <title>Highlights - Kavindu Vikum</title>
        <meta name="description" content="Watch my gaming and sports highlights" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="main-container">
        <div className="highlights-container">
          <div className="highlights-header">
            <h1 className="highlights-title">Watch Highlights</h1>
            <p className="highlights-subtitle">Top moments from Free Fire matches and cricket games</p>
          </div>

          <div className="highlights-content">
            <div className="highlight-placeholder">
              <div className="placeholder-icon">🎥</div>
              <h3>Coming Soon!</h3>
              <p>Epic gameplay moments and cricket highlights will be featured here.</p>
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

        .highlights-content {
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .highlight-placeholder {
          text-align: center;
          background: white;
          padding: 4rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .placeholder-icon {
          font-size: 5rem;
          margin-bottom: 1.5rem;
        }

        .highlight-placeholder h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #1F1F1F;
          margin-bottom: 1rem;
        }

        .highlight-placeholder p {
          font-size: 1.1rem;
          color: #4A4A4A;
          line-height: 1.7;
        }

        @media (max-width: 968px) {
          .highlights-title {
            font-size: 2.5rem;
          }

          .highlight-placeholder {
            padding: 3rem 2rem;
          }
        }

        @media (max-width: 640px) {
          .highlights-title {
            font-size: 2rem;
          }

          .highlight-placeholder {
            padding: 2rem 1.5rem;
          }

          .placeholder-icon {
            font-size: 3.5rem;
          }

          .highlight-placeholder h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}

