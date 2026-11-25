import type React from "react";
import { ExternalLink } from "lucide-react";
import PublicationList, { AuthorNames } from "@/components/PublicationList";
import { researchFunding } from "@/data/cv";
import {
  mastersThesis,
  primaryResearchAreas,
  researchInterests,
  researchTimeline,
} from "@/data/research";

function ResearchSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-8 space-y-6">
      <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

const Research = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">Research</h1>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Academic research, publications, collaborations, and funding across autonomous perception and AI-driven drug delivery
            </p>
          </div>

          <ResearchSection title="Research Interests">
            <div className="flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <span key={interest} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm">{interest}</span>
              ))}
            </div>
          </ResearchSection>

          <ResearchSection title="Master’s Thesis">
            <div className="border-l-2 border-accent pl-4 space-y-2">
              <h3 className="text-xl font-heading font-semibold text-foreground leading-relaxed">{mastersThesis.title}</h3>
              <p className="text-foreground"><span className="font-semibold">Research Advisor:</span> Dr. Mohammad S. Khan.</p>
              <p className="text-foreground"><span className="font-semibold">Institution:</span> East Tennessee State University.</p>
            </div>
          </ResearchSection>

          <ResearchSection title="Primary Research Areas">
            <div className="space-y-8">
              {primaryResearchAreas.map((area) => (
                <article key={area.title} className="border-l-2 border-accent pl-4 space-y-2">
                  <h3 className="text-xl font-heading font-semibold text-foreground">{area.title}</h3>
                  <p className="text-foreground font-medium">{area.advisor}</p>
                  <p className="text-foreground leading-relaxed">{area.description}</p>
                </article>
              ))}
            </div>
          </ResearchSection>

          <ResearchSection title="Year-Wise Research Timeline">
            <p className="text-foreground">Completed and ongoing work is listed separately from upcoming milestones.</p>
            <div className="space-y-10">
              {researchTimeline.map((year) => (
                <section key={year.year} aria-labelledby={`research-year-${year.year}`}>
                  <h3 id={`research-year-${year.year}`} className="text-2xl font-heading font-semibold text-foreground">
                    {year.year} — {year.heading}
                  </h3>
                  <div className="mt-5 border-l border-border pl-6 space-y-8">
                    {year.entries.map((entry) => (
                      <article key={`${year.year}-${entry.title}`} className="relative">
                        <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-lg font-heading font-semibold text-foreground leading-relaxed">{entry.title}</h4>
                          {entry.upcoming && (
                            <span className="px-2 py-0.5 rounded border border-border text-xs font-medium text-foreground">Upcoming</span>
                          )}
                        </div>
                        <p className="text-sm text-foreground mt-1">
                          {entry.date && <span>{entry.date} · </span>}
                          <span>{entry.category}</span>
                        </p>
                        {entry.authors && (
                          <p className="text-sm text-foreground mt-2">
                            <span className="font-semibold">Authors and collaborators:</span> <AuthorNames authors={entry.authors} />
                          </p>
                        )}
                        {entry.status && !entry.upcoming && (
                          <p className="text-sm text-foreground mt-2"><span className="font-semibold">Status:</span> {entry.status}</p>
                        )}
                        <p className="text-foreground leading-relaxed mt-2">{entry.description}</p>
                        {entry.links && entry.links.length > 0 && (
                          <div className="flex flex-wrap gap-4 mt-3">
                            {entry.links.map((link) => (
                              <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-secondary underline transition-smooth"
                              >
                                {link.label}
                                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                              </a>
                            ))}
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </ResearchSection>

          <ResearchSection title="Publications and Manuscripts">
            <PublicationList />
          </ResearchSection>

          <ResearchSection title="Research Funding, Honors, and Awards">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="border-l-2 border-accent pl-4 space-y-2">
                <h3 className="text-xl font-heading font-semibold text-foreground">{researchFunding.ovpr.title}</h3>
                <p className="text-foreground font-medium">{researchFunding.ovpr.amountLabel}</p>
                <p className="text-foreground"><span className="font-semibold">Funding period:</span> {researchFunding.ovpr.period}.</p>
                <p className="text-foreground"><span className="font-semibold">Funding organization:</span> {researchFunding.ovpr.organization}.</p>
                <p className="text-foreground"><span className="font-semibold">Funded proposal:</span> {researchFunding.ovpr.proposal}.</p>
                <p className="text-foreground"><span className="font-semibold">Principal Investigator:</span> {researchFunding.ovpr.principalInvestigator}.</p>
                <p className="text-foreground"><span className="font-semibold">My role:</span> {researchFunding.ovpr.role}.</p>
                <p className="text-foreground italic">{researchFunding.ovpr.clarification}</p>
              </article>

              <article className="border-l-2 border-accent pl-4 space-y-2">
                <h3 className="text-xl font-heading font-semibold text-foreground">{researchFunding.travel.title}</h3>
                <p className="text-foreground font-medium">Total amount: {researchFunding.travel.totalAmount}</p>
                <p className="text-foreground">Awarded in {researchFunding.travel.awarded}.</p>
                <p className="text-foreground">{researchFunding.travel.purpose}</p>
                <div>
                  <p className="font-semibold text-foreground">Funding breakdown:</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    {researchFunding.travel.breakdown.map((item) => (
                      <li key={item.organization} className="text-foreground">{item.organization}: {item.amount}.</li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </ResearchSection>
        </div>
      </div>
    </div>
  );
};

export default Research;
