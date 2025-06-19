
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Linkedin } from 'lucide-react';

export default function ReachOutSection() {
  const linkedInUrl = "https://www.linkedin.com/in/arman-didandeh/";

  return (
    <AccordionItem value="reach-out" className="border-none">
      <Card className="shadow-lg mb-4 overflow-hidden">
        <AccordionTrigger className="p-6 text-left w-full hover:no-underline focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-1 rounded-md [&[data-state=open]>svg]:text-accent">
          <div className="flex flex-row items-center gap-3">
            <MessageSquare className="w-8 h-8 text-primary" />
            <h2 className="font-headline text-3xl text-primary">Get In Touch</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-6 pt-0 text-lg text-foreground/80 leading-relaxed">
          <p className="mb-6">
            Have a project in mind or just want to say hi? Feel free to reach out to me on LinkedIn.
          </p>
          <Button
            asChild
            className="bg-slate-700 text-primary-foreground hover:bg-slate-600 shadow-sm transition-transform hover:scale-105 text-md py-3 px-4"
          >
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" /> Visit my LinkedIn Profile
            </a>
          </Button>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
