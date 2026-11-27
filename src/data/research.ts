import {
  education,
  publicationGroups,
  research,
  researchFunding,
  researchInterests,
  type Publication,
  type PublicationLink,
} from "@/data/cv";

export { researchInterests };

const thesisTitle = education[0].thesis;
if (!thesisTitle) {
  throw new Error("Missing master's thesis in CV data");
}

export const mastersThesis = {
  title: thesisTitle,
  advisor: "Research Advisor: Dr. Mohammad S. Khan.",
  institution: "Institution: East Tennessee State University.",
};

export const primaryResearchAreas = [
  {
    title: "Robotics, Computer Vision, and Cooperative Perception",
    advisor: research[0].advisor.replace("Advisor:", "Research Advisor:"),
    description: "Research focuses on multimodal sensor fusion, LiDAR, camera and 4D radar perception, cooperative 3D object detection, vehicle-to-infrastructure perception, and robust autonomous systems.",
  },
  {
    title: "Computational Chemistry and Machine Learning for Drug Delivery",
    advisor: research[1].advisor.replace("Collaborator:", "Research Collaborator:"),
    description: "Research focuses on molecular representation learning, computational chemistry, lipid nanoparticle-based RNA drug delivery, molecular structure–activity relationships, transfection efficacy prediction, and virtual screening.",
  },
];

export type ResearchTimelineEntry = {
  title: string;
  category: string;
  date?: string;
  description: string;
  authors?: string;
  status?: string;
  links?: PublicationLink[];
  upcoming?: boolean;
};

export type ResearchTimelineYear = {
  year: string;
  heading: string;
  entries: ResearchTimelineEntry[];
};

const publications = publicationGroups.flatMap((group) => group.items);

function publicationByTitle(titleStart: string): Publication {
  const publication = publications.find((item) => item.title.startsWith(titleStart));
  if (!publication) {
    throw new Error(`Missing CV publication: ${titleStart}`);
  }
  return publication;
}

function publicationTimelineEntry(
  titleStart: string,
  category: string,
  description: string,
): ResearchTimelineEntry {
  const publication = publicationByTitle(titleStart);
  return {
    title: publication.title,
    category,
    description,
    authors: publication.authors,
    status: publication.status,
    links: publication.links,
  };
}

export const researchTimeline: ResearchTimelineYear[] = [
  {
    year: "2025",
    heading: "Beginning Graduate Research",
    entries: [
      {
        title: "Beginning graduate studies at East Tennessee State University",
        category: "Education",
        date: "Aug 2025",
        description: "Beginning graduate studies at East Tennessee State University.",
      },
      {
        title: "Graduate research in artificial intelligence, multimodal learning, and autonomous systems",
        category: "Graduate Research",
        date: research[0].period,
        description: "Graduate research in artificial intelligence, multimodal learning, and autonomous systems.",
        status: "Ongoing",
      },
      {
        title: thesisTitle,
        category: "Master’s Thesis",
        date: research[0].period,
        description: "Master's thesis research.",
        authors: "Advisor: Dr. Mohammad S. Khan",
        status: "Ongoing",
      },
    ],
  },
  {
    year: "2026",
    heading: "Research Development and Academic Milestones",
    entries: [
      publicationTimelineEntry("CoTriBEV:", "Accepted Conference Paper", research[0].bullets[0]),
      publicationTimelineEntry("DRIVE:", "Accepted Conference Paper", research[0].bullets[1]),
      {
        title: "DopSync: Training-free delay compensation for cooperative perception",
        category: "Graduate Research",
        description: research[0].bullets[2],
        status: "Ongoing",
      },
      publicationTimelineEntry("Integrating Graph Neural Network", "Journal Manuscript", research[1].bullets[1]),
      publicationTimelineEntry("ContextLNP:", "Research in Progress", research[1].bullets[2]),
      publicationTimelineEntry("Multi-Sensor Fusion for Autonomous", "Book Chapter", research[0].bullets[3]),
      {
        title: researchFunding.ovpr.title,
        category: "Research Project Funding",
        date: researchFunding.ovpr.period,
        description: `${researchFunding.ovpr.amountLabel}. Funding organization: ${researchFunding.ovpr.organization}. Funded proposal: ${researchFunding.ovpr.proposal}. Principal Investigator: ${researchFunding.ovpr.principalInvestigator}. My role: ${researchFunding.ovpr.role}. ${researchFunding.ovpr.clarification}`,
        status: "Awarded",
      },
      {
        title: researchFunding.travel.title,
        category: "Conference Travel Funding",
        date: researchFunding.travel.awarded,
        description: `Total amount: ${researchFunding.travel.totalAmount}. Awarded in ${researchFunding.travel.awarded}. ${researchFunding.travel.purpose} Funding breakdown: ${researchFunding.travel.breakdown.map((item) => `${item.organization}: ${item.amount}`).join("; ")}.`,
        status: "Awarded",
      },
    ],
  },
  {
    year: "2027",
    heading: "Upcoming Research Milestones",
    entries: [
      {
        title: "IEEE CCNC 2027 conference",
        category: "Conference",
        date: "January 2027",
        description: "IEEE CCNC 2027 conference in Las Vegas, Nevada.",
        status: "Upcoming",
        links: [{ label: "Conference", url: "https://ccnc2027.ieee-ccnc.org/" }],
        upcoming: true,
      },
      {
        title: "Expected master's thesis completion",
        category: "Master’s Thesis",
        date: "May 2027",
        description: thesisTitle,
        status: "Upcoming",
        upcoming: true,
      },
      {
        title: "Additional research milestones as they occur",
        category: "Future Research",
        description: "Additional research milestones as they occur.",
        status: "Upcoming",
        upcoming: true,
      },
    ],
  },
];
