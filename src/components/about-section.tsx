
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { UserCircle2, CheckCircle } from 'lucide-react';

const services = [
  'Data & AI Strategy',
  'Enterprise Cloud Strategy',
  'Technical Advisory',
  'Product Management',
  'In-house Team Building',
  'C-Level Mentorship',
];

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
          <p className="mb-6">
            Experienced technologist, with hands-on roots in back-end dev and research background in machine learning (semi-supervised learning, specifically), who is very interested in AI-enabled data products and as a result, data pipelines, data/MLOps, and Human-centred AI.
          </p>

          <div className="mt-6 pt-6 border-t border-border/50">
            <h3 className="font-headline text-xl text-primary mb-4">Available Services</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-base">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
