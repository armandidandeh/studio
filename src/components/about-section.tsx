
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
                View My Professional Experience & Resume
              </InnerAccordionTrigger>
              <InnerAccordionContent className="pt-4 pb-2 text-md text-foreground/80 space-y-6">
                <p>
                  Due to security policies on some file hosting services, direct embedding of PDFs can be unreliable.
                  Please use the button below to download and view my full resume.
                </p>
                
                <div className="my-4">
                  <Button 
                    asChild
                    className="bg-slate-700 text-primary-foreground hover:bg-slate-600 shadow-sm transition-transform hover:scale-105"
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
