import Head from 'next/head';
import NavBar from '@/components/NavBar';

export default function Achievements() {
  return (
    <>
      <Head>
        <title>Experience - Kasun Bandara</title>
        <meta name="description" content="Professional experience building enterprise systems" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="main-container">
        <div className="achievements-container">
          <div className="achievements-header">
            <h1 className="achievements-title">Experience</h1>
            <p className="achievements-subtitle">Building enterprise systems that scale</p>
          </div>

          <div className="achievements-grid">
            <div className="achievement-card">
              <h3>Lead Software Engineer — IFS</h3>
              <p className="role-period">Present</p>
              <p>Working on enterprise CRM and ERP systems used by global customers. Designing and implementing scalable backend features while leading technical decisions and mentoring engineers. Collaborating across product, UX, and platform teams to deliver intelligent automation and AI-powered features.</p>
            </div>

            <div className="achievement-card">
              <h3>Senior Software Engineer — IFS</h3>
              <p className="role-period">Previous</p>
              <p>Built and maintained core business logic in large-scale systems. Worked extensively with Java, SQL, REST APIs, and enterprise frameworks. Focused on correctness, performance, and long-term stability in systems that serve mission-critical business operations.</p>
            </div>

            <div className="achievement-card">
              <h3>Enterprise System Design</h3>
              <p>Architecting features for CRM and ERP platforms that handle complex workflows, data integrity, and performance at scale. Building systems where reliability matters and mistakes are expensive.</p>
            </div>

            <div className="achievement-card">
              <h3>AI & Intelligent Automation</h3>
              <p>Exploring AI agents, LLM workflows, and system-assisted decision-making. Experimenting with intelligent scoring and automation features that make enterprise software more capable and intuitive.</p>
            </div>

            <div className="achievement-card">
              <h3>Technical Leadership</h3>
              <p>Leading architectural discussions, mentoring engineers, and making decisions that affect long-term system health. Helping teams balance moving fast with building things that last.</p>
            </div>

            <div className="achievement-card">
              <h3>Music & Creative Work</h3>
              <p>Trained musician with experience in composition and audio production. Music teaches discipline, structure, and how small details combine into something cohesive—principles that translate directly to software.</p>
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

        .achievement-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1F1F1F;
          margin-bottom: 0.5rem;
        }

        .role-period {
          font-size: 0.95rem;
          font-weight: 600;
          color: #666;
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

