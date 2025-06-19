
import {
  Accordion as InnerAccordion,
  AccordionContent as InnerAccordionContent,
  AccordionItem as InnerAccordionItem,
  AccordionTrigger as InnerAccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Download } from 'lucide-react';

export default function ResumeDisplay() {
  const downloadUrl = "https://www.dropbox.com/scl/fi/05w2cjuv2twjy5giibge6/Short-Resume-Arman-Didandeh-2025.PDF?rlkey=q7nfw7m4d4lkuk36yw5m3fl6i&st=pptaoxgq&dl=1";

  return (
    <AccordionItem value="resume" className="border-none">
      <Card className="shadow-lg mb-4 overflow-hidden">
        <AccordionTrigger className="p-6 text-left w-full hover:no-underline focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-1 rounded-md [&[data-state=open]>svg]:text-accent">
          <div className="flex flex-row items-center gap-3">
            <FileText className="w-8 h-8 text-primary" />
            <h2 className="font-headline text-3xl text-primary">My Resume</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-6 pt-0">
          <InnerAccordion type="single" collapsible className="w-full">
            <InnerAccordionItem value="item-1">
              <InnerAccordionTrigger className="text-xl font-medium hover:text-accent transition-colors py-4">
                View My Professional Experience
              </InnerAccordionTrigger>
              <InnerAccordionContent className="pt-4 pb-2 text-md text-foreground/80 space-y-6">
                <p>
                  A concise summary of my professional background, skills, and achievements. 
                  Due to security policies on some file hosting services, direct embedding of PDFs can be unreliable.
                  Please use the button below to download and view my resume.
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
