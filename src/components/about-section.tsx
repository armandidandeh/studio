
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { 
  Accordion as InnerAccordion,
  AccordionContent as InnerAccordionContent,
  AccordionItem as InnerAccordionItem,
  AccordionTrigger as InnerAccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';
import { UserCircle2, Download } from 'lucide-react';

export default function AboutSection() {
  const downloadUrl = "https://www.dropbox.com/scl/fi/05w2cjuv2twjy5giibge6/Short-Resume-Arman-Didandeh-2025.PDF?rlkey=q7nfw7m4d4lkuk36yw5m3fl6i&st=pptaoxgq&dl=1";

  return (
    <AccordionItem value="about" className="border-none">
      <Card className="shadow-lg mb-4 overflow-hidden">
        <AccordionTrigger className="p-6 text-left w-full hover:no-underline focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-1 rounded-md [&[data-state=open]>svg]:text-accent">
          <div className="flex flex-row items-center gap-3">
            <UserCircle2 className="w-8 h-8 text-primary" />
            <h2 className="font-headline text-3xl text-primary">About Me</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-6 pt-0 text-lg text-foreground/80 leading-relaxed">
          <p className="mb-6">
            Experienced technologist, with hands-on roots in back-end dev and research background in machine learning (semi-supervised learning, specifically), who is very interested in AI-enabled data products and as a result, data pipelines, data/MLOps, and Human-centred AI.
          </p>
          <InnerAccordion type="single" collapsible className="w-full">
            <InnerAccordionItem value="professional-experience" className="border-t pt-4">
              <InnerAccordionTrigger className="text-xl font-medium hover:text-accent transition-colors py-3 text-foreground/90">
                Recent Work Experience
              </InnerAccordionTrigger>
              <InnerAccordionContent className="pt-4 pb-2 text-md text-foreground/80">
                
                <div className="mb-4">
                  <h4 className="font-semibold text-md text-foreground/90">MightyHive‌ (pre-merger); Monks‌‌ (post-merger)</h4>
                  <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">VP, Data & AI Products</strong> [Jan 25-Present]: Built a global product team; Overseeing product development from ideation to deployment.
                    </li>
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">Sr. ‌Director, ‌Data & Machine Learning Systems</strong> [Jan 22-Dec 24]: Owned enterprise client engagements from scoping, pricing, staffing, to delivery.
                    </li>
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">Director, Data‌ Solutions‌</strong> [Aug 21-Jan 22]: Owned North American client engagements from scoping, pricing, staffing, to delivery.
                    </li>
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">Director, Data Solutions</strong> [Feb 21‌-Aug 21]: Built a Canada Data team; Owned Canadian client engagements from scoping, pricing, staffing, to delivery.
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-md text-foreground/90">PredictNow.ai (part-time; contractor)</h4>
                  <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">Cloud Infrastructure & MLOps Advisor</strong> [Aug 22-Dec 22]: Stayed on as an advisor to expand the product.
                    </li>
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">Fractional‌ ‌CTO</strong> [Aug 21-May 22]: Hired and expanded the development team; removed tech debt; scaled product to more clients; reduced cloud bill.
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-md text-foreground/90">Naya Labs (part-time; contractor)</h4>
                  <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">AI/ML Strategist</strong> [May 22-Dec 22]: Advised on building data and AI products; identified product-market fit.
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-md text-foreground/90">FGC Health (part-time; contractor)</h4>
                  <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">Data Strategist</strong> [May 22-Aug 22]: Advised the CTO/CIO with a data strategy to enable data-driven decisions as the company made mergers and acquisitions and required accurate reporting across locations.
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-md text-foreground/90">Linggo (part-time; contractor)</h4>
                  <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">Fractional CTO</strong> [Nov 19-Apr 20]: Hired and expanded the development team; built an MVP; deployed the product to the first set of clients; planned for a scalable cloud strategy.
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-md text-foreground/90">SharpestMinds (part-time)</h4>
                  <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">Mentor, Data Science-Data Engineering-MLOps</strong> [Nov 18- Dec 21]: Mentored junior and senior practitioners in building a portfolio and making a career path.
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-md text-foreground/90">Deloitte Canada</h4>
                  <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">Senior Manager, Data Science Innovation & AI Strategy</strong> [Feb 20-Nov 20]: Hired and trained 12-20 co-op students every quarter; built new MVPs and scaled previous ones within the blockchain, AI, and cloud domain; deployed solutions to Deloitte or client cloud infrastructures; co-led ideation sessions with key internal and external stakeholder to assess product-market fit and define future products.
                    </li>
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">Manager, Data Science Innovation</strong> [Sep 18-Feb 20]: Hired and trained 12-15 co-op students every quarter; rapidly built prototypes and MVPs to assess the readiness of emerging technologies within the blockchain, AI, and cloud domain; ideated with key internal and external stakeholder to assess product-market fit and define future products. 
                    </li>
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">Senior Consultant, Data Science</strong> [May 18-Sep 18]: Rapidly prototyped an MVP for a supermarket shelf monitoring system that used machine learning and state-of-the-art sensors.
                    </li>
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">Consultant, Data Science</strong> [Sep 17-May 18]: Built an MVP for a system that scarped 10Q/10K reports from SEC.gov and saved up-to-date information in an internal database for the M&A and Consulting teams.
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-md text-foreground/90">Sport-Travel (part-time; contractor)</h4>
                  <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">Manager, Analytics & Software Solutions</strong> [May 17-May 18]: Hired and mentored an in-house development team; built a sports competition management system with integrations into an existing accommodations system, allowing team owners to register their teams’ full roster, plan for leagues, manage trips’ transportation and hotels, and get key notifications.
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-md text-foreground/90">Freelance (part-time; contractor)</h4>
                  <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                    <li className="text-sm text-foreground/80">
                      <strong className="font-medium">Cloud & Data Consultant</strong> [May 12-Dec 16]: Worked as an Independent Contributor, designing and implementing data pipelines and ML models on major public cloud vendors for clients in different industries and sectors.
                    </li>
                  </ul>
                </div>

                <InnerAccordion type="single" collapsible className="w-full mt-6 border-t pt-4">
                  <InnerAccordionItem value="download-resume">
                    <InnerAccordionTrigger className="text-md font-medium hover:text-accent transition-colors py-2 text-foreground/90">
                      Download My Resume
                    </InnerAccordionTrigger>
                    <InnerAccordionContent className="pt-4 pb-2 text-md text-foreground/80">
                      <div className="flex items-center justify-center">
                        <Button 
                          asChild
                          className="bg-slate-700 text-primary-foreground hover:bg-slate-600 shadow-sm transition-transform hover:scale-105 flex-shrink-0"
                        >
                          <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" /> Download PDF
                          </a>
                        </Button>
                      </div>
                    </InnerAccordionContent>
                  </InnerAccordionItem>
                </InnerAccordion>

              </InnerAccordionContent>
            </InnerAccordionItem>
          </InnerAccordion>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
