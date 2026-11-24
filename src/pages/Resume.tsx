import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Briefcase, GraduationCap, Code, Trophy, Mail, Phone, Linkedin, Github, ExternalLink, FlaskConical, BookOpen, Presentation, Lightbulb } from "lucide-react";
import { CV_PDF_URL, CV_DOWNLOAD_NAME, education, researchInterests, publicationGroups, publicationNote, research, teaching, experience, honors, skills } from "@/data/cv";

function Entry({ title, org, location, period, note, bullets }: { title: string; org: string; location: string; period: string; note?: string; bullets: string[] }) {
  return (
    <div className="border-l-2 border-accent pl-4 pb-6 last:pb-0">
      <h3 className="text-xl font-heading font-semibold text-foreground">{title}</h3>
      <p className="text-foreground font-medium">{org}</p>
      <p className="text-sm text-foreground">{location}</p>
      {period && <p className="text-sm text-foreground">{period}</p>}
      {note && <p className="text-sm text-foreground italic mt-1">{note}</p>}
      <ul className="space-y-2 list-disc list-inside mt-3">
        {bullets.map((b, i) => <li key={i} className="text-foreground leading-relaxed">{b}</li>)}
      </ul>
    </div>
  );
}

function Section({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Icon className="h-5 w-5" />{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">{children}</CardContent>
    </Card>
  );
}

const Resume = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">Resume / CV</h1>
            <p className="text-lg text-foreground">
              A comprehensive overview of my professional journey
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={CV_PDF_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View PDF in Browser
                </Button>
              </a>
              <a href={CV_PDF_URL} download={CV_DOWNLOAD_NAME}>
                <Button size="lg" variant="outline" className="group">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </a>
            </div>
          </div>

          {/* Embedded PDF Preview */}
          <Card>
            <CardHeader>
              <CardTitle>CV Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full aspect-[8.5/11] rounded-lg overflow-hidden border border-border">
                <iframe
                  src={CV_PDF_URL}
                  className="w-full h-full"
                  title="CV PDF Preview"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:sushmita.rai387@gmail.com" className="hover:text-secondary transition-smooth">
                    sushmita.rai387@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (423) 773-7048</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <a href="https://linkedin.com/in/sushmita-rai-906b06157" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-smooth">
                    linkedin.com/in/sushmita-rai-906b06157
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <a href="https://github.com/sushmitaraii1" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-smooth">
                    github.com/sushmitaraii1
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Section icon={GraduationCap} title="Education">
            {education.map((edu, i) => (
              <div key={i} className="border-l-2 border-accent pl-4 pb-4 last:pb-0">
                <h3 className="text-xl font-heading font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-foreground font-medium">{edu.institution}</p>
                <p className="text-sm text-foreground">{edu.location}</p>
                <p className="text-sm text-foreground mt-1">{edu.period}</p>
                {edu.thesis && <p className="text-foreground mt-2"><span className="font-semibold">Master’s Thesis:</span> {edu.thesis}</p>}
                {edu.coursework && <p className="text-foreground mt-2"><span className="font-semibold">Relevant Graduate Coursework:</span> {edu.coursework}</p>}
              </div>
            ))}
          </Section>

          <Section icon={Lightbulb} title="Research Interests">
            <div className="flex flex-wrap gap-2">
              {researchInterests.map((r) => (
                <span key={r} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm">{r}</span>
              ))}
            </div>
          </Section>

          <Section icon={BookOpen} title="Publications and Manuscripts">
            {(() => { let n = 0; return publicationGroups.map((g) => (
              <div key={g.heading} className="space-y-4">
                <h4 className="font-heading font-semibold text-lg text-foreground">{g.heading}</h4>
                <ol className="space-y-4">
                  {g.items.map((p) => { n += 1; return (
                    <li key={p.title} className="border-l-2 border-accent pl-4">
                      <p className="text-foreground leading-relaxed">
                        <span className="font-medium">[{n}]</span> {p.authors}, {p.venue ? <>“{p.title},” <em>{p.venue}</em></> : <>“{p.title}.”</>}
                      </p>
                      <p className="text-sm text-foreground mt-1">
                        <span className="font-semibold">Status:</span> {p.status}
                        {p.tags.map((t) => <span key={t} className="ml-2 px-2 py-0.5 rounded bg-secondary text-secondary-foreground text-xs">{t}</span>)}
                      </p>
                    </li>
                  ); })}
                </ol>
              </div>
            )); })()}
            <p className="text-sm text-foreground">{publicationNote}</p>
          </Section>

          <Section icon={FlaskConical} title="Research Experience">
            {research.map((r, i) => <Entry key={i} title={r.title} org={r.org} location={r.location} period={r.period} note={r.advisor} bullets={r.bullets} />)}
          </Section>

          <Section icon={Presentation} title="Teaching Experience">
            {teaching.map((t, i) => <Entry key={i} {...t} />)}
          </Section>

          <Section icon={Briefcase} title="Professional Experience">
            {experience.map((e, i) => <Entry key={i} {...e} />)}
          </Section>

          <Section icon={Trophy} title="Honors, Awards, and Research Funding">
            {honors.map((h, i) => (
              <div key={i} className="border-l-2 border-accent pl-4 pb-3 last:pb-0">
                <h3 className="text-lg font-semibold text-foreground">{h.title}</h3>
                <p className="text-sm text-foreground">{h.period}</p>
                {h.subtitle && <p className="text-foreground italic mt-1">{h.subtitle}</p>}
                <p className="text-foreground mt-1">{h.detail}</p>
              </div>
            ))}
          </Section>

          <Section icon={Code} title="Technical Skills">
            {Object.entries(skills).map(([cat, list]) => (
              <div key={cat}>
                <h4 className="font-semibold text-foreground mb-2">{cat}:</h4>
                <p className="text-foreground">{list}</p>
              </div>
            ))}
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
