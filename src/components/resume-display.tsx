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
            <AccordionContent className="pt-4 pb-2 text-md text-foreground/80 space-y-4">
              <p>
                A concise summary of my professional background, skills, and achievements. 
                This one-page resume highlights my journey and contributions in various roles.
              </p>
              <div className="bg-muted p-6 rounded-lg shadow-inner min-h-[200px] flex flex-col items-center justify-center text-center">
                <FileText className="w-16 h-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">Resume preview will be embedded here.</p>
                <Button variant="outline" className="bg-accent/10 hover:bg-accent/20 text-accent-foreground border-accent hover:border-accent/80">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                For a detailed view, please download the PDF version.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
