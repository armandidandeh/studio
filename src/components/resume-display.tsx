import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from 'lucide-react';

export default function ResumeDisplay() {
  const downloadUrl = "https://www.dropbox.com/scl/fi/05w2cjuv2twjy5giibge6/Short-Resume-Arman-Didandeh-2025.PDF?rlkey=q7nfw7m4d4lkuk36yw5m3fl6i&st=pptaoxgq&dl=1";
  const embedUrl = "https://www.dropbox.com/scl/fi/05w2cjuv2twjy5giibge6/Short-Resume-Arman-Didandeh-2025.PDF?rlkey=q7nfw7m4d4lkuk36yw5m3fl6i&st=pptaoxgq&raw=1";

  return (
    <Card className="shadow-lg animate-fade-in" style={{animationDelay: '1.0s'}}>
      <CardHeader className="flex flex-row items-center gap-3">
         <FileText className="w-8 h-8 text-primary" />
        <CardTitle className="font-headline text-3xl text-primary">My Resume</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-medium hover:text-accent transition-colors py-4">
              View My Professional Experience
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2 text-md text-foreground/80 space-y-6">
              <p>
                A concise summary of my professional background, skills, and achievements. 
                My resume is displayed below, or you can download it directly.
              </p>
              
              <div className="my-4">
                <Button 
                  asChild 
                  variant="outline" 
                  className="bg-accent/10 hover:bg-accent/20 text-accent-foreground border-accent hover:border-accent/80"
                >
                  <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </a>
                </Button>
              </div>

              <div className="aspect-[8.5/11] w-full rounded-md overflow-hidden border border-border shadow-inner">
                <iframe
                  src={embedUrl}
                  title="Arman Didandeh Resume"
                  width="100%"
                  height="100%"
                  className="border-0"
                />
              </div>
              
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
