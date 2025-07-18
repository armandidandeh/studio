
import type { ReactNode } from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import {
  Accordion as InnerAccordion,
  AccordionContent as InnerAccordionContent,
  AccordionItem as InnerAccordionItem,
  AccordionTrigger as InnerAccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Briefcase, Download, Building, CalendarDays, FileText, CheckCircle } from 'lucide-react';

interface Role {
  title: string;
  dates: string;
  description: string;
}

interface Experience {
  id: string;
  company: string | ReactNode;
  isContractor?: boolean;
  isPartTime?: boolean;
  roles: Role[];
  timelineDateLabel: string;
}

const workExperiencesData: Experience[] = [
  {
    id: 'naya-labs',
    company: "Naya Labs",
    isContractor: true,
    isPartTime: true,
    timelineDateLabel: "May 2022 - Dec 2022",
    roles: [
      { title: "AI/ML Strategist", dates: "May 2022 - Dec 2022", description: "Advised on building data and AI products; identified product-market fit." },
    ],
  },
  {
    id: 'fgc-health',
    company: "FGC Health",
    isContractor: true,
    isPartTime: true,
    timelineDateLabel: "May 2022 - Aug 2022",
    roles: [
      { title: "Data Strategist", dates: "May 2022 - Aug 2022", description: "Advised the CTO/CIO with a data strategy to enable data-driven decisions as the company made mergers and acquisitions and required accurate reporting across locations." },
    ],
  },
  {
    id: 'predictnow-ai',
    company: "PredictNow.ai",
    isContractor: true,
    isPartTime: true,
    timelineDateLabel: "Aug 2021 - Dec 2022",
    roles: [
      { title: "Cloud Infrastructure & MLOps Advisor", dates: "Aug 2022 - Dec 2022", description: "Stayed on as an advisor to expand the product." },
      { title: "Fractional CTO", dates: "Aug 2021 - May 2022", description: "Hired and expanded the development team; removed tech debt; scaled product to more clients; reduced cloud bill." },
    ],
  },
  {
    id: 'mightyhive-monks',
    company: (
      <>
        MightyHive <span className="text-xs font-normal text-muted-foreground">(pre-merger);</span> Monks <span className="text-xs font-normal text-muted-foreground">(post-merger)</span>
      </>
    ),
    timelineDateLabel: "Feb 2021 - Present",
    roles: [
      { title: "VP, Data & AI Products", dates: "Jan 2025 - Present", description: "Built a global product team; Overseeing product development from ideation to deployment." },
      { title: "Sr. Director, Data & Machine Learning Systems", dates: "Jan 2022 - Dec 2024", description: "Owned enterprise client engagements from scoping, pricing, staffing, to delivery." },
      { title: "Director, Data Solutions", dates: "Aug 2021 - Jan 2022", description: "Owned North American client engagements from scoping, pricing, staffing, to delivery." },
      { title: "Director, Data Solutions", dates: "Feb 2021 - Aug 2021", description: "Built a Canada Data team; Owned Canadian client engagements from scoping, pricing, staffing, to delivery." },
    ],
  },
  {
    id: 'linggo',
    company: "Linggo",
    isContractor: true,
    isPartTime: true,
    timelineDateLabel: "Nov 2019 - Apr 2020",
    roles: [
      { title: "Fractional CTO", dates: "Nov 2019 - Apr 2020", description: "Hired and expanded the development team; built an MVP; deployed the product to the first set of clients; planned for a scalable cloud strategy." },
    ],
  },
  {
    id: 'sharpestminds',
    company: "SharpestMinds",
    isPartTime: true,
    timelineDateLabel: "Nov 2018 - Dec 2021",
    roles: [
      { title: "Mentor, Data Science-Data Engineering-MLOps", dates: "Nov 2018 - Dec 2021", description: "Mentored junior and senior practitioners in building a portfolio and making a career path." },
    ],
  },
  {
    id: 'deloitte-canada',
    company: "Deloitte Canada",
    timelineDateLabel: "Sep 2017 - Nov 2020",
    roles: [
      { title: "Sr. Manager, Data Science Innovation & AI Strategy", dates: "Feb 2020 - Nov 2020", description: "Hired and trained 12-20 co-op students every quarter; built new MVPs and scaled previous ones within the blockchain, AI, and cloud domain; deployed solutions to Deloitte or client cloud infrastructures; co-led ideation sessions with key internal and external stakeholder to assess product-market fit and define future products." },
      { title: "Manager, Data Science Innovation", dates: "Sep 2018 - Feb 2020", description: "Hired and trained 12-15 co-op students every quarter; rapidly built prototypes and MVPs to assess the readiness of emerging technologies within the blockchain, AI, and cloud domain; ideated with key internal and external stakeholder to assess product-market fit and define future products." },
      { title: "Sr. Consultant, Data Science", dates: "May 2018 - Sep 2018", description: "Rapidly prototyped an MVP for a supermarket shelf monitoring system that used machine learning and state-of-the-art sensors." },
      { title: "Consultant, Data Science", dates: "Sep 2017 - May 2018", description: "Built an MVP for a system that scarped 10Q/10K reports from SEC.gov and saved up-to-date information in an internal database for the M&A and Consulting teams." },
    ],
  },
  {
    id: 'sport-travel',
    company: "Sport-Travel",
    isContractor: true,
    isPartTime: true,
    timelineDateLabel: "May 2017 - May 2018",
    roles: [
      { title: "Manager, Analytics & Software Solutions", dates: "May 2017 - May 2018", description: "Hired and mentored an in-house development team; built a sports competition management system with integrations into an existing accommodations system, allowing team owners to register their teams’ full roster, plan for leagues, manage trips’ transportation and hotels, and get key notifications." },
    ],
  },
  {
    id: 'freelance',
    company: "Freelance",
    isContractor: true,
    isPartTime: true,
    timelineDateLabel: "May 2012 - Dec 2016",
    roles: [
      { title: "Cloud & Data Consultant", dates: "May 2012 - Present", description: "Worked as an Independent Contributor, designing and implementing data pipelines and ML models on major public cloud vendors for clients in different industries and sectors." },
    ],
  },
];

const monthMap: { [key: string]: number } = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

const parseRoleStartDate = (dateString: string): Date | null => {
  const parts = dateString.split(' - ');
  if (!parts[0]) return null;
  const startPart = parts[0].trim();
  if (startPart.toLowerCase() === 'present') return new Date();
  
  let match = startPart.match(/(\w{3,})\s(\d{4})/);
  if (match && match[1] && match[2]) {
    const month = monthMap[match[1].substring(0,3)];
    const year = parseInt(match[2], 10);
     if (month !== undefined && !isNaN(year)) {
      return new Date(year, month, 1);
    }
  }

  match = startPart.match(/(\w{3})\s'(\d{2})/);
  if (match && match[1] && match[2]) {
    const month = monthMap[match[1]];
    const year = parseInt(match[2], 10) + 2000;
    if (month !== undefined && !isNaN(year)) {
      return new Date(year, month, 1);
    }
  }
  return null;
};

export default function WorkExperienceSection() {
  const downloadUrl = "https://www.dropbox.com/scl/fi/05w2cjuv2twjy5giibge6/Short-Resume-Arman-Didandeh-2025.PDF?rlkey=q7nfw7m4d4lkuk36yw5m3fl6i&st=pptaoxgq&dl=1";

  const freelanceExperienceData = workExperiencesData.find(exp => exp.id === "freelance");
  const mentorshipExperienceData = workExperiencesData.find(exp => exp.id === "sharpestminds");
  const otherExperiencesData = workExperiencesData.filter(exp => exp.id !== "freelance" && exp.id !== "sharpestminds");

  const contractExperiences = otherExperiencesData.filter(exp => exp.isContractor || exp.isPartTime);
  const fullTimeExperiences = otherExperiencesData.filter(exp => !exp.isContractor && !exp.isPartTime);

  const getExperienceSortDate = (exp: Experience): Date => {
    if (exp.roles.length > 0 && exp.roles[0]) {
      const date = parseRoleStartDate(exp.roles[0].dates);
      if (date) return date;
    }
    return new Date(0); 
  };
  
  contractExperiences.sort((a, b) => getExperienceSortDate(b).getTime() - getExperienceSortDate(a).getTime());
  fullTimeExperiences.sort((a, b) => getExperienceSortDate(b).getTime() - getExperienceSortDate(a).getTime());

  const renderExperienceColumn = (experiences: Experience[]) => (
    <div className="flex flex-col gap-4">
      {experiences.map((exp) => (
        <Card key={exp.id} className="flex flex-col bg-card/50">
          <CardHeader className="p-4">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-primary">{exp.company}</h3>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex-grow">
            <InnerAccordion type="single" collapsible className="w-full flex flex-col gap-2">
              {exp.roles.map((role, roleIndex) => (
                <InnerAccordionItem
                  key={`${exp.id}-role-${roleIndex}`}
                  value={`role-${exp.id}-${roleIndex}`}
                  className="border rounded-md overflow-hidden bg-background/50"
                >
                  <InnerAccordionTrigger className="p-3 text-left hover:no-underline [&[data-state=open]]:bg-accent/10 transition-colors">
                    <div className="w-full space-y-1">
                      <h4 className="text-md font-semibold text-primary/90">{role.title}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        {role.dates}
                        {(exp.isContractor || exp.isPartTime) && (
                          <span className="ml-2 text-xs font-normal">
                            (Contract / Part-Time)
                          </span>
                        )}
                      </p>
                    </div>
                  </InnerAccordionTrigger>
                  <InnerAccordionContent className="p-3 pt-0 text-base text-foreground/70 leading-relaxed border-t border-border bg-background/20">
                    <p className="pt-3">{role.description}</p>
                  </InnerAccordionContent>
                </InnerAccordionItem>
              ))}
            </InnerAccordion>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <AccordionItem value="work-experience" className="border-none">
      <Card className="shadow-lg mb-4 overflow-hidden">
        <AccordionTrigger className="p-6 text-left w-full hover:no-underline focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-1 rounded-md [&[data-state=open]>svg]:text-accent">
          <div className="flex flex-row items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="font-headline text-3xl text-primary">Work Experience</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pt-2 pb-6 text-lg text-foreground/80 leading-relaxed">
          {freelanceExperienceData && (
            <div className="mb-8">
              <Card key={freelanceExperienceData.id} className="flex flex-col bg-card/50">
                <CardHeader className="p-4">
                   <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-primary">{freelanceExperienceData.company}</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow">
                  <InnerAccordion type="single" collapsible className="w-full flex flex-col gap-2">
                    {freelanceExperienceData.roles.map((role, roleIndex) => (
                      <InnerAccordionItem
                        key={`${freelanceExperienceData.id}-role-${roleIndex}`}
                        value={`role-${freelanceExperienceData.id}-${roleIndex}`}
                        className="border rounded-md overflow-hidden bg-background/50"
                      >
                        <InnerAccordionTrigger className="p-3 text-left hover:no-underline [&[data-state=open]]:bg-accent/10 transition-colors">
                          <div className="w-full space-y-1">
                            <h4 className="text-md font-semibold text-primary/90">{role.title}</h4>
                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                              <CalendarDays className="w-4 h-4" />
                              {role.dates}
                              {(freelanceExperienceData.isContractor || freelanceExperienceData.isPartTime) && (
                                <span className="ml-2 text-xs font-normal">(Contract / Part-Time)</span>
                              )}
                            </p>
                          </div>
                        </InnerAccordionTrigger>
                        <InnerAccordionContent className="p-3 pt-0 text-base text-foreground/70 leading-relaxed border-t border-border bg-background/20">
                          <p className="pt-3">{role.description}</p>
                        </InnerAccordionContent>
                      </InnerAccordionItem>
                    ))}
                  </InnerAccordion>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {renderExperienceColumn(fullTimeExperiences)}
            {renderExperienceColumn(contractExperiences)}
          </div>
          
          {mentorshipExperienceData && (
            <div className="my-8">
              <Card key={mentorshipExperienceData.id} className="flex flex-col bg-card/50">
                <CardHeader className="p-4">
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-primary">{mentorshipExperienceData.company}</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow">
                  <InnerAccordion type="single" collapsible className="w-full flex flex-col gap-2">
                    {mentorshipExperienceData.roles.map((role, roleIndex) => (
                      <InnerAccordionItem
                        key={`${mentorshipExperienceData.id}-role-${roleIndex}`}
                        value={`role-${mentorshipExperienceData.id}-${roleIndex}`}
                        className="border rounded-md overflow-hidden bg-background/50"
                      >
                        <InnerAccordionTrigger className="p-3 text-left hover:no-underline [&[data-state=open]]:bg-accent/10 transition-colors">
                          <div className="w-full space-y-1">
                            <h4 className="text-md font-semibold text-primary/90">{role.title}</h4>
                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                              <CalendarDays className="w-4 h-4" />
                              {role.dates}
                              {(mentorshipExperienceData.isContractor || mentorshipExperienceData.isPartTime) && (
                                <span className="ml-2 text-xs font-normal">
                                  (Contract / Part-Time)
                                </span>
                              )}
                            </p>
                          </div>
                        </InnerAccordionTrigger>
                        <InnerAccordionContent className="p-3 pt-0 text-base text-foreground/70 leading-relaxed border-t border-border bg-background/20">
                          <p className="pt-3">{role.description}</p>
                        </InnerAccordionContent>
                      </InnerAccordionItem>
                    ))}
                  </InnerAccordion>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="flex justify-start mt-8 pt-4 border-t border-border">
            <InnerAccordion type="single" collapsible className="w-full md:w-2/3 lg:w-1/3">
              <InnerAccordionItem value="download-resume" className="border-none">
                <InnerAccordionTrigger className="text-md font-medium hover:text-accent transition-colors py-3 text-foreground/90 hover:no-underline">
                  Download My Resume
                </InnerAccordionTrigger>
                <InnerAccordionContent className="pt-2 pb-2 text-md text-foreground/80">
                  <div className="flex items-center justify-between">
                    <p className="mb-0 flex-grow mr-4">
                      Please use the button to download and view my full resume.
                    </p>
                    <Button
                      asChild
                      className="bg-slate-700 text-primary-foreground hover:bg-slate-600 shadow-sm transition-transform hover:scale-105 flex-shrink-0 ml-4"
                    >
                      <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" /> Download PDF
                      </a>
                    </Button>
                  </div>
                </InnerAccordionContent>
              </InnerAccordionItem>
            </InnerAccordion>
          </div>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
