function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LinkIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L10.7 5.23" />
      <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 1 0 7.07 7.07L13.3 18.77" />
    </svg>
  );
}

function FileTextIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}

function CheckCircleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

type CaseStudy = {
  title: string;
  label?: string;
  summary: string;
  details: string[];
};

type Principle = {
  title: string;
  text: string;
};

export default function KedarPortfolio() {
  const caseStudies: CaseStudy[] = [
    {
      title: "Cross-functional Program Execution",
      label: "TPM / Execution Leadership / Program Delivery",
      summary:
        "Owned execution across distributed teams by converting fragmented updates into structured plans, clear ownership, and measurable progress across program milestones.",
      details: [
        "Managed ~$1M+ program portfolio across multiple client implementations",
        "Led 5 cross-functional teams across engineering, QA, and client stakeholders",
        "Drove alignment across time zones to unblock delivery and maintain execution momentum",
        "Improved visibility through structured tracking, reporting, and prioritization",
        "Sustained delivery in high-dependency environments with minimal escalations",
      ],
    },
    {
      title: "Enterprise OMS Implementations (Williams-Sonoma)",
      label: "B2B SaaS / Order Management",
      summary:
        "Drove post-sales implementations of Sterling OMS across 3–4 month cycles, aligning engineering, QA, and client stakeholders to deliver stable, production-ready releases impacting order lifecycle operations.",
      details: [
        "Led execution across 9 QA engineers spanning 3+ parallel workstreams",
        "Reduced production risk via SQL and API-level validation across critical order flows",
        "Improved release predictability through tight coordination across onsite, offshore, and client teams",
      ],
    },
    {
      title: "PushCrew (Startup) – End-to-End QA & Support Foundations",
      label: "Startup / Product Quality",
      summary:
        "Built QA and support processes from scratch for a B2B marketing automation platform, improving product reliability, customer response efficiency, and release confidence.",
      details: [
        "Established end-to-end QA workflows in a fast-paced startup environment",
        "Validated product behavior through JavaScript and API-level testing",
        "Improved support efficiency via structured ticketing, documentation, and response workflows",
      ],
    },
  ];

  const strengths: string[] = [
    "Technical Program Management",
    "Cross-functional Delivery",
    "Stakeholder Alignment",
    "Release Coordination",
    "End-to-End QA Strategy",
    "Risk and Blocker Management",
    "Automation Testing",
    "Offshore Coordination",
  ];

  const principles: Principle[] = [
    {
      title: "Create structure from ambiguity",
      text: "I break complex, cross-team work into clear priorities, owners, dependencies, and visible next steps.",
    },
    {
      title: "Keep execution grounded",
      text: "My QA and delivery background helps me surface risks early and connect planning to operational reality.",
    },
    {
      title: "Drive alignment with clarity",
      text: "I simplify communication across technical, business, client, and offshore stakeholders so work moves forward with less friction.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#f8fafc] text-slate-900"
      style={{
        fontFamily:
          '"SF Pro Text","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
      }}
    >
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-10">
        <header className="sticky top-4 z-50 flex items-center justify-between rounded-full border border-slate-200 bg-white/90 px-5 py-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
            Kedar Tiwaskar
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#work" className="transition hover:text-slate-900">
              Work
            </a>
            <a href="#approach" className="transition hover:text-slate-900">
              Approach
            </a>
            <a href="#skills" className="transition hover:text-slate-900">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              Contact
            </a>
          </nav>
        </header>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
              Technical Program Manager
            </div>
            <h1 className="mt-6 max-w-2xl text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              Technical Program Manager delivering predictable execution across complex, cross-functional programs.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              I lead complex programs by aligning teams, de-risking execution, and ensuring consistent, high-quality delivery across stakeholders.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
              >
                View portfolio <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Experience</p>
                <p className="mt-2 text-3xl font-semibold">12+ years</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Quality engineering, delivery coordination, enterprise systems, and cross-team execution.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Programs</p>
                  <p className="mt-2 text-lg font-semibold">$1M+ portfolio</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Scale</p>
                  <p className="mt-2 text-lg font-semibold">4000+ concurrent users</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Leadership</p>
                  <p className="mt-2 text-lg font-semibold">Led 5 teams</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Strength</p>
                  <p className="mt-2 text-lg font-semibold">Execution clarity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:px-10" id="approach">
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10" id="work">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Selected Work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Programs and execution stories
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            A few examples that reflect how I lead through coordination, delivery discipline, and stakeholder alignment.
          </p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study) => (
            <div key={study.title} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
                <div>
                  {study.label ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{study.label}</p>
                  ) : null}
                  <h3 className="mt-3 text-2xl font-semibold">{study.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-slate-600">{study.summary}</p>
                </div>
                <div className="grid gap-4">
                  {study.details.map((detail) => (
                    <div key={detail} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                      <p className="text-sm leading-7 text-slate-700">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:px-10" id="skills">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Profile</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Built for high-dependency environments</h2>
            <p className="mt-5 text-sm leading-8 text-slate-600">
              My experience spans QA, automation, delivery management, and enterprise coordination, helping bridge strategy with execution.
            </p>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Core Skills</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {strengths.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-10" id="contact">
        <div className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Open to TPM opportunities</h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600">
                Interested in roles focused on technical program management, enterprise delivery, and cross-functional execution.
              </p>
            </div>
            <a
              href="mailto:kedar.tiwaskar@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
            >
              <MailIcon className="h-4 w-4" /> Email me
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="https://www.linkedin.com/in/kstiwaskar/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100"
            >
              <LinkIcon className="h-5 w-5 text-slate-700" />
              <p className="mt-3 text-sm font-semibold">LinkedIn</p>
              <p className="mt-1 text-sm text-slate-600">View profile</p>
            </a>
            <a
              href="https://drive.google.com/file/d/1wyPv2bxuBUVdtBi2Vxzd_llFXQ8wu8oE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:bg-slate-100"
            >
              <FileTextIcon className="h-5 w-5 text-slate-700" />
              <p className="mt-3 text-sm font-semibold">Resume</p>
              <p className="mt-1 text-sm text-slate-600">View resume (PDF)</p>
            </a>
            <a
              href="mailto:kedar.tiwaskar@gmail.com"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100"
            >
              <MailIcon className="h-5 w-5 text-slate-700" />
              <p className="mt-3 text-sm font-semibold">Email</p>
              <p className="mt-1 text-sm text-slate-600">kedar.tiwaskar@gmail.com</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
