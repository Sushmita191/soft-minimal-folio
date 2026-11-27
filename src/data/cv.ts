// Single source for CV content. To replace the CV, overwrite public/cv/Sushmita_Rai_CV.pdf (or change CV_PDF_URL here).
export const CV_PDF_URL = "/cv/Sushmita_Rai_CV.pdf";
export const CV_DOWNLOAD_NAME = "Sushmita_Rai_CV.pdf";

export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "East Tennessee State University",
    location: "Johnson City, Tennessee, USA",
    period: "Aug 2025 – May 2027 (Expected)",
    thesis: "Multi-Modal Sensor Fusion Architecture for Real-Time Cooperative 3D Object Detection in Connected Urban Environments.",
    coursework: "Artificial Intelligence, Machine Learning, Research Methods, Natural Language Processing, Analysis of Algorithms, Applied Mathematics II (Spring 2027).",
  },
  {
    degree: "Bachelor’s in Computer Engineering",
    institution: "Tribhuvan University",
    location: "Kathmandu, Nepal",
    period: "Dec 2016 – Sept 2021",
  },
];

export const researchInterests = [
  "Artificial Intelligence and Machine Learning", "Robotics and Autonomous Systems", "Computer Vision",
  "Multi-Sensor Fusion and 3D Perception", "Multimodal Learning", "Cooperative Perception", "Graph Neural Networks",
  "Molecular Representation Learning", "Computational Chemistry", "AI-Driven Drug Delivery",
];

export type PublicationLink = {
  label: string;
  url: string;
};

export type Publication = {
  authors: string;
  title: string;
  venue: string;
  status: string;
  tags: string[];
  links?: PublicationLink[];
};

export type PublicationGroup = {
  heading: string;
  items: Publication[];
};

export const publicationGroups: PublicationGroup[] = [
  {
    heading: "Accepted Conference Papers",
    items: [
      {
        authors: "S. Rai, M. Prajapati, and M. S. Khan",
        title: "CoTriBEV: Cooperative Tri-Modal BEV Fusion of LiDAR, Camera, and 4D Radar for Robust Roadside-Assisted 3D Object Detection",
        venue: "2026 IEEE 1st Annual Integrated Sensing and Communication Conference (IEEE ISAC), November 2026.",
        status: "Accepted October 2026; publication forthcoming.",
        tags: ["Conference"],
        links: [{ label: "Conference", url: "https://www.comsoc.org/conferences-events/ieee-conference-integrated-sensing-and-communications-2026" }],
      },
      {
        authors: "M. Prajapati, S. Rai, and M. S. Khan",
        title: "DRIVE: Deadline-aware Roadside Intersection View Exchange for Networked Cooperative Perception",
        venue: "2027 IEEE Consumer Communications & Networking Conference (CCNC) Workshops, Las Vegas, Nevada, January 2027.",
        status: "Accepted November 2026; publication forthcoming.",
        tags: ["Conference", "Code"],
        links: [
          { label: "Conference", url: "https://ccnc2027.ieee-ccnc.org/" },
          { label: "Code", url: "https://github.com/Nuvine-World/drive" },
        ],
      },
    ],
  },
  {
    heading: "Journal Manuscripts and Book Chapters",
    items: [
      { authors: "S. Rai†, M. Prajapati†, and M. Rasoulianboroujeni", title: "Integrating Graph Neural Network Representations with Morgan Fingerprints for Ionizable Lipid Transfection Prediction", venue: "Applied Sciences (MDPI).", status: "Invited submission; under revision.", tags: [] },
      { authors: "S. Rai, M. Prajapati, and M. S. Khan", title: "Multi-Sensor Fusion for Autonomous Vehicle Perception: Principles, Algorithms, and Cooperative Sensing", venue: "Wiley Encyclopedia of Electrical and Electronics Engineering.", status: "Book chapter under review.", tags: [] },
    ],
  },
  {
    heading: "Research in Progress",
    items: [
      { authors: "S. Rai", title: "ContextLNP: Evaluating Formulation and Cell Context for Cross-Publication mRNA Transfection Prediction", venue: "", status: "Research in progress.", tags: [] },
    ],
  },
];
export const publicationNote = "† Equal contribution (co-first authorship).";

export const research = [
  {
    title: "Graduate Researcher – Multi-Modal Sensor Fusion Architecture for Real-Time Cooperative 3D Object Detection in Connected Urban Environments",
    org: "East Tennessee State University", location: "Johnson City, Tennessee", period: "2025 – Present",
    advisor: "Advisor: Dr. Mohammad S. Khan",
    bullets: [
      "Developed CoTriBEV, a transformer-based cooperative 3D detector fusing LiDAR, camera, and 4D radar in shared bird’s-eye-view (BEV) space through per-cell cross-agent attention and a zero-initialized residual. Improved vehicle AP@0.5 from 3.25 to 8.80 on V2X-Radar-C; gains concentrated outside the ego camera field of view. Characterized the accuracy–robustness trade-off under pose errors, feature compression, and packet loss through pose-noise-aware training.",
      "Co-developed DRIVE, combining sparse BEV fusion, age-aware attention, and causal bandwidth allocation with virtual-queue deadline control. Reduced deadline-miss rates from 27% (fixed) and 17.5% (greedy) to 6.9–9.8% at 250 ms in CoInfra network replay, with an availability trade-off.",
      "Designed DopSync, a training-free delay compensation method combining track-history velocity and 4D-radar Doppler via inverse-variance weighting with 14–16 additional bytes per moving object; recovered 88% and 73% of achievable overall AP@0.7 gain at 100 and 300 ms, respectively, with HEAL; evaluated transfer across three fusion architectures at 300 ms and identified radar field-of-view limitations.",
      "Authoring a Wiley encyclopedia chapter on sensing modalities, fusion levels and computational topologies, spatial calibration, temporal synchronization, probabilistic state estimation, deep BEV and transformer architectures, robustness, and cooperative perception.",
    ],
  },
  {
    title: "Graduate Researcher – Computational Chemistry and Machine Learning for Drug Delivery",
    org: "East Tennessee State University", location: "Johnson City, Tennessee", period: "",
    advisor: "Collaborator: Dr. Morteza Rasoulianboroujeni, Pharmaceutical Sciences",
    bullets: [
      "Investigating computational chemistry and machine learning for lipid nanoparticle (LNP)-based RNA drug delivery, focusing on molecular structure–activity relationships, transfection efficacy prediction, and computational prioritization of ionizable lipids.",
      "Integrated Morgan fingerprints with KPGT and Chemprop graph representations for 1,100 ionizable lipids, improving test R² from 0.667 to 0.742 and 0.550 to 0.624, respectively; evaluated ten configurations across ten seeds, achieved top-5% virtual-screening enrichment up to 15.16; evaluated representation reliance using permutation, occlusion, and integrated gradients. External validation on comparable LNPDB data is planned.",
      "Leading ContextLNP, a cross-publication generalization study for mRNA transfection efficacy prediction using 11,008 measurement-context units from 22 LNPDB publications. Compared Ridge, ExtraTrees, MLPs, and Transformers using formulation composition and cell context. Completed 638 model/fold jobs; frozen Uni-Mol embeddings reduced MLP source-macro RMSE from 2.950 to 0.990, while ranking gains remained uncertain.",
    ],
  },
];

export const teaching = [
  {
    title: "Graduate Teaching Assistant", org: "East Tennessee State University", location: "Johnson City, Tennessee", period: "Aug 2025 – Present",
    bullets: [
      "CSCI 1300 – Practical Applications of Artificial Intelligence (Fall 2026): Deliver classroom and online instruction on AI concepts, generative AI, reasoning, and responsible AI; design activities on critical AI evaluation; mentor students in problem formulation, AI solution design, prototyping, and safety planning. Grade assignments and conduct office hours.",
      "CSCI 1150 (Fall 2025 and Spring 2026): Led hands-on computing labs, supported 126 undergraduate students, graded assignments, and provided programming feedback.",
    ],
  },
];

export const experience = [
  {
    title: "Machine Learning Engineer", org: "Optible AI", location: "Adelaide, Australia (Remote)", period: "Sept 2022 – Jul 2025",
    bullets: [
      "Developed a question answering (QA) and weighted ranking system for grant assessment, achieving 97% accuracy and reducing review time by 90% across six major grant providers. Implemented client-specific scoring aligned with criterion importance and business rules.",
      "Fine-tuned T5 for question answering with confidence-aware inference, achieving 86.34% validation accuracy; improved NER accuracy by 90% through text preprocessing.",
      "Led development of end-to-end ML pipelines for preprocessing, training, and versioning; deployed an AI onboarding agent that reduced client setup time by 96% through automated extraction of criteria from guideline PDFs and generation of sub-criteria and validation questions.",
    ],
  },
  {
    title: "Machine Learning Engineer Associate", org: "Fusemachines Nepal Pvt. Ltd.", location: "Kathmandu, Nepal", period: "Apr 2021 – Aug 2022",
    bullets: [
      "Deployed a COVID-19 virtual QA assistant for TIME Magazine using DistilBERT for passage retrieval, RoBERTa for answer extraction, Haystack for retrieval pipelines, and Rasa for dialogue management; built a Django REST Framework content management API on AWS EC2.",
      "Developed ASR/NLU components for Presto’s voice-based drive-thru ordering system; delivered conversational AI training for 60+ employees and facilitated 100+ AI fellows.",
    ],
  },
];

export const researchFunding = {
  ovpr: {
    title: "OVPR Research Funding Program (RFP) Award",
    amount: "$15,000",
    amountLabel: "$15,000 — Project Funding",
    period: "July 2026 – Sept 2027",
    organization: "Office of the Vice Provost for Research, East Tennessee State University",
    proposal: "Cooperative Edge Intelligence with Multimodal Sensor Fusion for All-Weather Autonomous Perception in Urban Environments",
    principalInvestigator: "Dr. Mohammad S. Khan",
    role: "Research team member",
  },
  travel: {
    title: "IEEE CCNC 2027 Conference Travel Funding",
    totalAmount: "$1,460",
    awarded: "2026",
    breakdown: [
      { organization: "Graduate and Professional Student Association (GPSA), East Tennessee State University", amount: "$700" },
      { organization: "Department of Computing, East Tennessee State University", amount: "$760" },
    ],
    purpose: "Conference travel support for IEEE CCNC 2027 in Las Vegas, Nevada.",
  },
};

export const honors = [
  {
    title: `${researchFunding.ovpr.title}, ${researchFunding.ovpr.amount}`,
    period: researchFunding.ovpr.period,
    subtitle: researchFunding.ovpr.proposal,
    detail: `Research team member on a project funded by the ${researchFunding.ovpr.organization} (PI: ${researchFunding.ovpr.principalInvestigator}).`,
  },
  {
    title: `${researchFunding.travel.title}, ${researchFunding.travel.totalAmount}`,
    period: researchFunding.travel.awarded,
    subtitle: researchFunding.travel.purpose,
    detail: researchFunding.travel.breakdown.map((item) => `${item.organization}: ${item.amount}`).join("; ") + ".",
  },
];

export const skills: Record<string, string> = {
  "Programming and Machine Learning": "Python, C/C++, C#, JavaScript; PyTorch, TensorFlow, Keras, scikit-learn, Hugging Face, XGBoost.",
  "Computer Vision and Autonomous Systems": "LiDAR, camera and 4D radar fusion, BEV representations, 3D object detection, V2X, spatial and temporal alignment, motion estimation, image processing, OpenCV.",
  "Computational Chemistry and Molecular ML": "RDKit, Chemprop, KPGT, Uni-Mol, GNNs, transformers, molecular fingerprints, molecular representation learning, structure–activity relationship modeling, virtual screening, LNP transfection efficacy prediction.",
  "Research Methods": "Experimental design, ablation studies, statistical significance testing, bootstrap analysis, feature attribution, domain generalization, robustness evaluation, model benchmarking, LaTeX.",
  "Natural Language Processing and Generative AI": "LLMs, QA, NER, RAG, agentic AI, spaCy, Rasa, ASR, NLU, information retrieval.",
  "MLOps and Development": "Git, Docker, AWS, GCP, MLflow, Metaflow, Airflow, FastAPI, Django, Flask, Streamlit, PostgreSQL, MySQL, MongoDB, Elasticsearch.",
};
