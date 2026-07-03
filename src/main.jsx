import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BookOpenCheck, ClipboardCheck, FileSearch, Landmark, LockKeyhole, Radar, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import './styles.css';

const glossary = [
  {
    term: 'AI Governance',
    definition: 'The policies, roles, documentation, and oversight practices an organization uses to make AI adoption safer, more accountable, and easier to audit.'
  },
  {
    term: 'AI Management System (AIMS)',
    definition: 'A structured management system for responsible AI. ISO/IEC 42001 is an emerging global standard for this area.'
  },
  {
    term: 'Algorithmic Impact Assessment (AIA)',
    definition: 'A documented review of an AI system’s purpose, risks, affected users, mitigation steps, and oversight plan before or during deployment.'
  },
  {
    term: 'CBOM',
    definition: 'A Cryptographic Bill of Materials: an inventory of cryptographic assets, algorithms, key lengths, protocols, and implementation details.'
  },
  {
    term: 'Crypto-Agility',
    definition: 'The ability to replace, rotate, or update cryptographic methods without breaking core business operations.'
  },
  {
    term: 'EU AI Act',
    definition: 'A European Union law that regulates AI systems using a risk-based framework, including strict obligations for high-risk AI systems.'
  },
  {
    term: 'High-Risk AI System',
    definition: 'An AI system used in sensitive contexts such as employment, education, critical infrastructure, public benefits, law enforcement, or access to essential services.'
  },
  {
    term: 'Human-in-the-Loop',
    definition: 'A governance and system-design practice that keeps meaningful human review, escalation, and override authority in AI-enabled processes.'
  },
  {
    term: 'ISO/IEC 42001',
    definition: 'An international standard for artificial intelligence management systems, used to organize AI risk management, accountability, and continuous improvement.'
  },
  {
    term: 'NIST AI RMF',
    definition: 'The National Institute of Standards and Technology AI Risk Management Framework, organized around govern, map, measure, and manage functions.'
  },
  {
    term: 'Post-Quantum Cryptography',
    definition: 'Cryptographic algorithms designed to remain secure against future quantum computers capable of breaking today’s public-key encryption.'
  },
  {
    term: 'Sentinel Vault',
    definition: 'QuantumSOP’s working concept for an update-driven compliance vault containing SOPs, templates, readiness kits, briefings, and implementation guidance.'
  }
];

const faqs = [
  {
    q: 'What is QuantumSOP?',
    a: 'QuantumSOP is being built as a compliance documentation and intelligence resource for organizations that need practical AI governance, model accountability, public sector procurement, and quantum readiness materials.'
  },
  {
    q: 'Who is this for?',
    a: 'The primary audience is public sector teams, Chief AI Officers, compliance leaders, grant-funded programs, procurement teams, consultants, and document-heavy organizations that need defensible processes before AI adoption gets messy.'
  },
  {
    q: 'Is this legal advice?',
    a: 'No. QuantumSOP materials are designed for education, planning, and documentation support. Organizations should consult their legal, procurement, privacy, cybersecurity, and compliance professionals before relying on any template.'
  },
  {
    q: 'What will be inside the Compliance Vault?',
    a: 'The planned vault includes SOP templates, AI system intake forms, impact assessment checklists, procurement language, risk registers, briefing archives, readiness roadmaps, and update summaries.'
  },
  {
    q: 'Why combine AI governance and quantum readiness?',
    a: 'Both are emerging compliance problems where public agencies and vendors need inventories, documented decisions, risk classification, audit trails, procurement language, and continuous monitoring.'
  },
  {
    q: 'Can this help with public sector procurement?',
    a: 'Yes. The site is designed to grow into practical procurement support, including AI RFP language, vendor evaluation criteria, pilot design, cooperative purchasing considerations, and documentation checklists.'
  }
];

const products = [
  {
    name: 'AI Governance Starter Kit',
    eyebrow: 'Phase 1 product',
    description: 'A practical pack for documenting AI intake, risk classification, human oversight, vendor review, and executive accountability.',
    items: ['AI use case intake form', 'AI risk register', 'Human oversight checklist', 'Transparency and disclosure worksheet']
  },
  {
    name: 'Quantum Readiness Kit',
    eyebrow: 'Phase 1 product',
    description: 'A plain-language readiness kit for tracking cryptographic inventory, HNDL exposure, CBOM planning, and migration deadlines.',
    items: ['CBOM starter worksheet', 'Crypto-agility checklist', 'Quantum readiness roadmap', 'Deadline tracker']
  },
  {
    name: 'Sentinel Vault',
    eyebrow: 'Subscription concept',
    description: 'A continuously updated library of compliance templates, briefings, checklists, and implementation playbooks.',
    items: ['Weekly intelligence briefings', 'Template library', 'Procurement guidance', 'Case study archive']
  }
];

const intelligence = [
  {
    icon: <ShieldCheck />,
    title: 'AI Governance & Accountability',
    text: 'Track emerging AI rules, ISO/IEC 42001 adoption, AI impact assessments, content labeling, algorithmic bias issues, and public sector deployment guidance.'
  },
  {
    icon: <LockKeyhole />,
    title: 'Quantum Security Readiness',
    text: 'Monitor post-quantum cryptography, HNDL risk, CBOM practices, FIPS 203/204/205 adoption, crypto-agility, and federal migration deadlines.'
  },
  {
    icon: <Landmark />,
    title: 'Public Sector Procurement',
    text: 'Watch AI and quantum procurement trends, public-sector pilots, funding opportunities, Chief AI Officer roles, and vendor evaluation practices.'
  }
];

function App() {
  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="QuantumSOP home">
          <span className="brand-mark">Q</span>
          <span>QuantumSOP</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#vault">Vault</a>
          <a href="#glossary">Glossary</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <p className="eyebrow">AI governance • quantum readiness • audit-friendly SOPs</p>
            <h1>Compliance documentation for the AI and post-quantum era.</h1>
            <p className="hero-text">
              QuantumSOP helps public sector and document-heavy teams turn emerging AI, procurement, and quantum security requirements into practical checklists, SOPs, templates, and defensible documentation.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#vault">Explore the vault concept <ArrowRight size={18} /></a>
              <a className="button secondary" href="#glossary">Start with the glossary</a>
            </div>
          </div>
          <aside className="hero-card" aria-label="QuantumSOP positioning summary">
            <div className="card-icon"><Radar /></div>
            <h2>Built for the gap between guidance and implementation.</h2>
            <p>
              New rules and frameworks are arriving faster than most teams can operationalize them. QuantumSOP turns the moving target into a repeatable documentation system.
            </p>
          </aside>
        </section>

        <section className="trust-strip" aria-label="Core focus areas">
          <span>NIST AI RMF</span>
          <span>ISO/IEC 42001</span>
          <span>EU AI Act</span>
          <span>CBOM</span>
          <span>Crypto-Agility</span>
          <span>Public Sector AI</span>
        </section>

        <section className="section" id="why">
          <div className="section-heading">
            <p className="eyebrow">Why this exists</p>
            <h2>Most organizations do not need more vague AI panic. They need a paper trail.</h2>
            <p>
              AI governance and quantum readiness both start with the same operational questions: What do we use? Who owns it? What risk does it create? What documentation proves we acted responsibly?
            </p>
          </div>
          <div className="feature-grid three">
            <article className="feature-card">
              <ClipboardCheck />
              <h3>Document the decision</h3>
              <p>Create intake forms, approval records, risk classifications, and review logs before systems become invisible infrastructure.</p>
            </article>
            <article className="feature-card">
              <FileSearch />
              <h3>Prepare for the audit</h3>
              <p>Organize evidence, oversight, procurement language, vendor review, and update history in a format that can be reviewed later.</p>
            </article>
            <article className="feature-card">
              <Workflow />
              <h3>Make it repeatable</h3>
              <p>Turn one-time compliance scrambling into operating procedures teams can reuse across departments, tools, and vendors.</p>
            </article>
          </div>
        </section>

        <section className="section alt" id="intelligence">
          <div className="section-heading compact">
            <p className="eyebrow">Intelligence tracks</p>
            <h2>Three monitoring lanes feed the QuantumSOP system.</h2>
          </div>
          <div className="feature-grid three">
            {intelligence.map((item) => (
              <article className="feature-card dark" key={item.title}>
                {item.icon}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="vault">
          <div className="section-heading">
            <p className="eyebrow">Compliance Vault preview</p>
            <h2>Starter offers that can become a recurring compliance library.</h2>
            <p>
              The first version can be simple: a landing page, a waitlist, and a set of high-value downloadable kits. The later version becomes a subscription vault with updates and specialized packs.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <p className="eyebrow">{product.eyebrow}</p>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <ul>
                  {product.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="public-sector">
          <div>
            <p className="eyebrow">Public sector angle</p>
            <h2>Built for agencies, consultants, and vendors whose customer name is on the line.</h2>
            <p>
              Public sector AI adoption is moving through permits, 311 systems, healthcare administration, procurement, emergency management, and internal productivity. Every pilot needs a record of purpose, authority, procurement, privacy, accessibility, oversight, and risk controls.
            </p>
          </div>
          <div className="checklist-card">
            <h3>Use-case packs to add next</h3>
            <ul>
              <li>AI in permitting and licensing</li>
              <li>AI in citizen services and chatbots</li>
              <li>AI in procurement and contracting</li>
              <li>AI in emergency management</li>
              <li>AI in grant-funded programs</li>
              <li>Defense-adjacent AI security documentation</li>
            </ul>
          </div>
        </section>

        <section className="section alt" id="glossary">
          <div className="section-heading compact">
            <p className="eyebrow">Plain-language glossary</p>
            <h2>Terms your team will keep seeing.</h2>
          </div>
          <div className="glossary-grid">
            {glossary.map((item) => (
              <article className="glossary-card" key={item.term}>
                <h3>{item.term}</h3>
                <p>{item.definition}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-heading compact">
            <p className="eyebrow">FAQ</p>
            <h2>Questions this site should answer early.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Join the early list for practical AI governance and quantum readiness tools.</h2>
            <p>
              This placeholder can connect to Systeme.io, Beehiiv, ConvertKit, a Google Form, or a simple email link when the offer is ready.
            </p>
          </div>
          <a className="button primary" href="mailto:hello@quantumsop.com?subject=QuantumSOP%20early%20access">Request early access <Sparkles size={18} /></a>
        </section>
      </main>

      <footer>
        <div className="brand footer-brand">
          <span className="brand-mark">Q</span>
          <span>QuantumSOP</span>
        </div>
        <p>Practical compliance documentation for AI governance, public sector implementation, and quantum readiness.</p>
        <p className="fine-print">Educational information only. Not legal, cybersecurity, procurement, or compliance advice.</p>
      </footer>
    </div>
  );
}

export default App;

createRoot(document.getElementById('root')).render(<App />);
