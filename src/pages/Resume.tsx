import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Briefcase, Code, ExternalLink, FlaskConical, Presentation } from "lucide-react";
import { CV_PDF_URL, CV_DOWNLOAD_NAME, research, teaching, experience, skills } from "@/data/cv";

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

const Experience = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">Experience</h1>
            <p className="text-lg text-foreground">
              Research, teaching, and industry experience. The full CV is available as a PDF.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={CV_PDF_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View CV (PDF)
                </Button>
              </a>
              <a href={CV_PDF_URL} download={CV_DOWNLOAD_NAME}>
                <Button size="lg" variant="outline" className="group">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* Embedded, scrollable CV */}
          <Card>
            <CardHeader>
              <CardTitle>CV Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full aspect-[8.5/11] rounded-lg overflow-hidden border border-border">
                <iframe src={CV_PDF_URL} className="w-full h-full" title="CV PDF Preview" />
              </div>
            </CardContent>
          </Card>

          <Section icon={FlaskConical} title="Research Experience">
            {research.map((r, i) => <Entry key={i} title={r.title} org={r.org} location={r.location} period={r.period} note={r.advisor} bullets={r.bullets} />)}
          </Section>

          <Section icon={Presentation} title="Teaching Experience">
            {teaching.map((t, i) => <Entry key={i} {...t} />)}
          </Section>

          <Section icon={Briefcase} title="Professional Experience">
            {experience.map((e, i) => <Entry key={i} {...e} />)}
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

export default Experience;
