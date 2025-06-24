
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import {
  Accordion as InnerAccordion,
  AccordionContent as InnerAccordionContent,
  AccordionItem as InnerAccordionItem,
  AccordionTrigger as InnerAccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';
import { Briefcase, Download, Building, CalendarDays } from 'lucide-react';

interface Role {
  title: string;
  dates: string;
  description: string;
}

interface Experience {
  company: string;
  isContractor?: boolean;
  isPartTime?: boolean;
  roles: Role[];
  timelineDateLabel: string;
}

interface TimelineRole {
  company: string;
  isContractor?: boolean;
  isPartTime?: boolean;
  title: string;
  dates: string;
  description: string;
  type: 'full-time' | 'part-time';
}

const workExperiencesData: Experience[] = [
  {
    company: "Naya Labs",
    isContractor: true,
    isPartTime: true,
    timelineDateLabel: "May 2022 - Dec 2022",
    roles: [
      { title: "AI/ML Strategist", dates: "May 2022 - Dec 2022", description: "Advised on building data and AI products; identified product-market fit." },
    ],
  },
  {
    company: "FGC Health",
    isContractor: true,
    isPartTime: true,
    timelineDateLabel: "May 2022 - Aug 2022",
    roles: [
      { title: "Data Strategist", dates: "May 2022 - Aug 2022", description: "Advised the CTO/CIO with a data strategy to enable data-driven decisions as the company made mergers and acquisitions and required accurate reporting across locations." },
    ],
  },
  {
    company: "PredictNow.ai",
    isContractor: true,
    isPartTime: true,
    timelineDateLabel: "Aug '21 - Dec 2022",
    roles: [
      { title: "Cloud Infrastructure & MLOps Advisor", dates: "Aug 2022 - Dec 2022", description: "Stayed on as an advisor to expand the product." },
      { title: "Fractional CTO", dates: "Aug '21 - May 2022", description: "Hired and expanded the development team; removed tech debt; scaled product to more clients; reduced cloud bill." },
    ],
  },
  {
    company: "MightyHive (pre-merger); Monks (post-merger)",
    timelineDateLabel: "Feb '21 - Present",
    roles: [
      { title: "VP, Data & AI Products", dates: "Jan '25 - Present", description: "Built a global product team; Overseeing product development from ideation to deployment." },
      { title: "Sr. Director, Data & Machine Learning Systems", dates: "Jan 2022 - Dec '24", description: "Owned enterprise client engagements from scoping, pricing, staffing, to delivery." },
      { title: "Director, Data Solutions", dates: "Aug '21 - Jan 2022", description: "Owned North American client engagements from scoping, pricing, staffing, to delivery." },
      { title: "Director, Data Solutions", dates: "Feb '21 - Aug '21", description: "Built a Canada Data team; Owned Canadian client engagements from scoping, pricing, staffing, to delivery." },
    ],
  },
  {
    company: "Linggo",
    isContractor: true,
    isPartTime: true,
    timelineDateLabel: "Nov '19 - Apr '20",
    roles: [
      { title: "Fractional CTO", dates: "Nov '19 - Apr '20", description: "Hired and expanded the development team; built an MVP; deployed the product to the first set of clients; planned for a scalable cloud strategy." },
    ],
  },
  {
    company: "SharpestMinds",
    isPartTime: true,
    timelineDateLabel: "Nov '18 - Dec '21",
    roles: [
      { title: "Mentor, Data Science-Data Engineering-MLOps", dates: "Nov '18 - Dec '21", description: "Mentored junior and senior practitioners in building a portfolio and making a career path." },
    ],
  },
  {
    company: "Deloitte Canada",
    timelineDateLabel: "Sep '17 - Nov '20",
    roles: [
      { title: "Senior Manager, Data Science Innovation & AI Strategy", dates: "Feb '20 - Nov '20", description: "Hired and trained 12-20 co-op students every quarter; built new MVPs and scaled previous ones within the blockchain, AI, and cloud domain; deployed solutions to Deloitte or client cloud infrastructures; co-led ideation sessions with key internal and external stakeholder to assess product-market fit and define future products." },
      { title: "Manager, Data Science Innovation", dates: "Sep '18 - Feb '20", description: "Hired and trained 12-15 co-op students every quarter; rapidly built prototypes and MVPs to assess the readiness of emerging technologies within the blockchain, AI, and cloud domain; ideated with key internal and external stakeholder to assess product-market fit and define future products." },
      { title: "Senior Consultant, Data Science", dates: "May '18 - Sep '18", description: "Rapidly prototyped an MVP for a supermarket shelf monitoring system that used machine learning and state-of-the-art sensors." },
      { title: "Consultant, Data Science", dates: "Sep '17 - May '18", description: "Built an MVP for a system that scarped 10Q/10K reports from SEC.gov and saved up-to-date information in an internal database for the M&A and Consulting teams." },
    ],
  },
  {
    company: "Sport-Travel",
    isContractor: true,
    isPartTime: true,
    timelineDateLabel: "May '17 - May '18",
    roles: [
      { title: "Manager, Analytics & Software Solutions", dates: "May '17 - May '18", description: "Hired and mentored an in-house development team; built a sports competition management system with integrations into an existing accommodations system, allowing team owners to register their teams’ full roster, plan for leagues, manage trips’ transportation and hotels, and get key notifications." },
    ],
  },
  {
    company: "Freelance",
    isContractor: true,
    isPartTime: true,
    timelineDateLabel: "May '12 - Dec '16",
    roles: [
      { title: "Cloud & Data Consultant", dates: "May '12 - Dec '16", description: "Worked as an Independent Contributor, designing and implementing data pipelines and ML models on major public cloud vendors for clients in different industries and sectors." },
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

  const formatPresentDate = (dateString: string): string => {
    if (dateString.endsWith("Present")) {
      const today = new Date();
      const month = today.toLocaleString('default', { month: 'short' });
      const year = String(today.getFullYear()).slice(2);
      return dateString.replace("Present", `${month} '${year}`);
    }
    return dateString;
  };

  const allRoles: TimelineRole[] = workExperiencesData.flatMap(exp => 
    exp.roles.map(role => ({
      company: exp.company,
      isContractor: exp.isContractor,
      isPartTime: exp.isPartTime,
      ...role,
      type: (exp.isPartTime || exp.isContractor) ? 'part-time' : 'full-time'
    }))
  );

  allRoles.sort((a, b) => {
    const dateA = parseRoleStartDate(a.dates);
    const dateB = parseRoleStartDate(b.dates);
    if (!dateA || !dateB) return 0;
    return dateB.getTime() - dateA.getTime();
  });

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
          <InnerAccordion type="single" collapsible className="w-1/3 mx-auto space-y-2">
            {allRoles.map((role, index) => (
              <InnerAccordionItem value={`role-${index}`} key={index} className="border rounded-lg overflow-hidden bg-card/50">
                <InnerAccordionTrigger className="p-4 text-left hover:no-underline [&[data-state=open]]:bg-accent/10 transition-colors">
                  <div className="w-full text-left space-y-1">
                    <h4 className="text-md font-semibold text-primary truncate">{role.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building className="w-4 h-4" />
                      <span>{role.company}</span>
                      {(role.isContractor || role.isPartTime) && (
                        <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                          {role.isContractor && "Contract"}{role.isContractor && role.isPartTime && " / "}{role.isPartTime && "Part-time"}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                       <CalendarDays className="w-4 h-4" />
                       <span>{formatPresentDate(role.dates)}</span>
                    </div>
                  </div>
                </InnerAccordionTrigger>
                <InnerAccordionContent className="p-4 pt-0 text-base text-foreground/70 leading-relaxed border-t border-border bg-background">
                  <p className="pt-4">{role.description}</p>
                </InnerAccordionContent>
              </InnerAccordionItem>
            ))}
          </InnerAccordion>
          
          <InnerAccordion type="single" collapsible className="w-1/3 mx-auto mt-8 pt-0 border-t border-border">
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
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
