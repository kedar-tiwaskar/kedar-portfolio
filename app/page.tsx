function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LinkIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L10.7 5.23" />
      <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 1 0 7.07 7.07L13.3 18.77" />
    </svg>
  );
}

function FileTextIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
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
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
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
        "Managed a $1M+ program portfolio across multiple client implementations",
        "Led 5 cross-functional teams spanning engineering, QA, and client stakeholders",
        "Drove alignment across time zones to unblock delivery and maintain execution momentum",
        "Improved visibility through structured tracking, reporting, and prioritization",
        "Sustained delivery in high-dependency environments with minimal escalations",
      ],
    },
    {
      title: "Enterprise OMS Implementations\n(Williams-Sonoma)",
      label: "",
      summary:
        "Served as QA POC and QA Lead for Sterling OMS post-sales implementations, owning end-to-end quality and establishing QA processes that enabled faster, more efficient execution across 3–4 month delivery cycles.",
      details: [
        "Scaled QA execution across multiple workstreams by leading a 9-member team and driving alignment across priorities",
        "Reduced production risk by validating critical order flows at SQL and API levels",
        "Improved release predictability through structured coordination across onsite, offshore, and client teams",
      ],
    },
    {
      title: "PushCrew (Startup) – End-to-End QA & Support Foundations",
      label: "Startup / Product Quality",
      summary:
        "Built QA and support processes from scratch for a B2B marketing automation platform, improving product reliability, customer response efficiency, and release confidence.",
      details: [
        "Validated platform behavior through JavaScript and API-level testing",
        "Supported performance validation for 4000+ concurrent users",
        "Improved support efficiency through structured ticketing, documentation, and response workflows",
      ],
    },
  ];

  const strengths: string[] = [
    "Technical Program Management",
    "Program Execution",
    "Cross-functional Delivery",
    "Stakeholder Alignment",
    "Dependency Management",
    "Release Coordination",
    "Release Readiness",
    "End-to-End QA Strategy",
    "API & Integration Testing",
    "SQL Data Validation",
    "Defect Triage & Root Cause Analysis",
    "CI/CD Pipeline Integration",
    "Risk and Blocker Management",
    "Agile / Scrum Execution",
    "Offshore Coordination",
  ];

  const approachCards: Principle[] = [
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
    {
      title: "Chrome Enterprise & ChromeOS redesign",
      text: "Led a cross-functional redesign effort across 5 distributed teams spanning platform, UX, and infrastructure workstreams.",
    },
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#0a0f1c] text-slate-100"
      style={{
        fontFamily:
          '"SF Pro Text","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
      }}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(148,163,184,0.12),_transparent_22%),linear-gradient(to_bottom,_#0a0f1c,_#0f172a)]" />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-10">
        <header className="sticky top-4 z-50 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-300">
            Kedar Tiwaskar
          </div>

          <nav className="hidden gap-6 text-sm font-bold text-slate-400 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#approach" className="transition hover:text-white">
              Approach
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-blue-200">
              Technical Program Manager
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Turning complexity into
              <span className="block text-slate-300">business impact</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              I lead cross-functional programs by aligning teams, guiding execution,
              and driving business impact across high-dependency environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                View portfolio <ArrowRightIcon className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Experience
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">13+ years</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Quality Engineering | Delivery Leadership | Enterprise Systems |
                  Cross-Functional Execution
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5 text-center sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Program Impact
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    $1M+ portfolio delivered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10" id="approach">
        <div className="grid gap-6 md:grid-cols-2">
          {approachCards.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-[28px] p-7 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl ${
                index === 3
                  ? "border border-blue-400/15 bg-gradient-to-br from-blue-500/10 to-white/[0.03]"
                  : "border border-white/10 bg-white/5"
              }`}
            >
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10" id="work">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Selected Work
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Programs and execution stories
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            A few examples that reflect how I lead through coordination, delivery
            discipline, and stakeholder alignment.
          </p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            >
              <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
                <div>
                  {study.label ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {study.label}
                    </p>
                  ) : null}

                  <h3 className="mt-3 whitespace-pre-line text-2xl font-semibold text-white">
                    {study.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-slate-400">
                    {study.summary}
                  </p>
                </div>

                <div className="grid gap-4">
                  {study.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.04] p-4"
                    >
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                      <p className="text-sm leading-7 text-slate-300">{detail}</p>
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
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Profile
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Execution leadership grounded in engineering depth
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-400">
              I combine quality engineering rigor with program management discipline
              to drive predictable delivery across complex, high-dependency systems.
              With hands-on experience in API validation, SQL-level troubleshooting,
              and cross-team coordination, I bridge technical execution with program
              leadership — ensuring risks are surfaced early and releases stay stable.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Core Skills
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {strengths.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-10" id="contact">
        <div className="rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-blue-500/[0.06] p-8 shadow-[0_14px_50px_rgba(0,0,0,0.32)] backdrop-blur-xl md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Open to TPM opportunities
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400">
                Interested in roles focused on technical program management,
                enterprise delivery, and cross-functional execution.
              </p>
            </div>

            <a
              href="mailto:kedar.tiwaskar@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              <MailIcon className="h-4 w-4" /> Email me
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="https://www.linkedin.com/in/kstiwaskar/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.08]"
            >
              <LinkIcon className="h-5 w-5 text-slate-300" />
              <p className="mt-3 text-sm font-semibold text-white">LinkedIn</p>
              <p className="mt-1 text-sm text-slate-400">View profile</p>
            </a>

            <a
              href="https://drive.google.com/file/d/1wyPv2bxuBUVdtBi2Vxzd_llFXQ8wu8oE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:bg-white/[0.08]"
            >
              <FileTextIcon className="h-5 w-5 text-slate-300" />
              <p className="mt-3 text-sm font-semibold text-white">Resume</p>
              <p className="mt-1 text-sm text-slate-400">View resume (PDF)</p>
            </a>

            <a
              href="mailto:kedar.tiwaskar@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.08]"
            >
              <MailIcon className="h-5 w-5 text-slate-300" />
              <p className="mt-3 text-sm font-semibold text-white">Email</p>
              <p className="mt-1 text-sm text-slate-400">kedar.tiwaskar@gmail.com</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}