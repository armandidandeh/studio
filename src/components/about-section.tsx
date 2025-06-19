import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { UserCircle2 } from 'lucide-react';

export default function AboutSection() {
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
          <p>
            Experienced technologist, with hands-on roots in back-end dev and research background in machine learning (semi-supervised learning, specifically), who is very interested in AI-enabled data products and as a result, data pipelines, data/MLOps, and Human-centred AI.
          </p>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
