import Head from 'next/head';
import NavBar from '@/components/NavBar';

export default function Achievements() {
  return (
    <>
      <Head>
        <title>Achievements - Kavindu Vikum</title>
        <meta name="description" content="Gaming & Sports Journey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="main-container">
        <div className="achievements-container">
          <div className="achievements-header">
            <h1 className="achievements-title">Gaming & Sports Journey</h1>
            <p className="achievements-subtitle">My competitive experiences in esports and cricket</p>
            <a href="https://www.youtube.com/@ZABIFF-ue3ot/videos" target="_blank" rel="noopener noreferrer" className="youtube-btn">
              🎥 Watch My Gameplay Videos
            </a>
          </div>

          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🎮</div>
              <h3>Free Fire Ranked Matches & Tournaments</h3>
              <p>Competed in various ranked matches and local tournaments, honing strategic gameplay and tactical awareness.</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">👥</div>
              <h3>Competitive Squad Play Experience</h3>
              <p>Led and coordinated with squad members in high-pressure situations, developing leadership and communication skills.</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">🏏</div>
              <h3>School Cricket Matches & Practice</h3>
              <p>Representing Vidyaratha College, Kandy in various cricket matches, showcasing teamwork and discipline.</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">📊</div>
              <h3>Training, Strategy Analysis & Improvement</h3>
              <p>Continuous improvement through gameplay analysis, studying strategies, and dedicated practice sessions.</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3>Competitive Mindset Development</h3>
              <p>Built mental resilience and focus through consistent participation in competitive environments.</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">⚡</div>
              <h3>Performance Under Pressure</h3>
              <p>Thriving in clutch moments, both in virtual battles and on the cricket field, through preparation and composure.</p>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .achievements-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 0;
        }

        .achievements-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .achievements-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #1F1F1F;
          margin-bottom: 1rem;
        }

        .achievements-subtitle {
          font-size: 1.2rem;
          color: #4A4A4A;
          font-weight: 400;
          margin-bottom: 1.5rem;
        }

        .youtube-btn {
          display: inline-block;
          background-color: #FF0000;
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
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

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .achievement-card {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .achievement-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .achievement-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1F1F1F;
          margin-bottom: 1rem;
        }

        .achievement-card p {
          font-size: 1rem;
          line-height: 1.7;
          color: #4A4A4A;
        }

        @media (max-width: 968px) {
          .achievements-title {
            font-size: 2.5rem;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .achievements-title {
            font-size: 2rem;
          }

          .achievement-card {
            padding: 2rem;
          }
        }
      `}</style>
    </>
  );
}

