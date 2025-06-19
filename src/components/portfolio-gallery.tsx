
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Zap } from 'lucide-react';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  imageHint: string;
  tags: string[];
}

const projectsData: Project[] = [
  { 
    id: '1', 
    title: 'Project Alpha: Task Manager', 
    description: 'A revolutionary application designed to streamline task management and boost productivity for individuals and teams.', 
    imageUrl: 'https://placehold.co/600x400.png', 
    projectUrl: '#', 
    imageHint: 'task management',
    tags: ['React', 'Node.js', 'Productivity']
  },
  { 
    id: '2', 
    title: 'Project Beta: Artisan E-Store', 
    description: 'An e-commerce platform that connects artisans with customers, focusing on handmade and unique goods.', 
    imageUrl: 'https://placehold.co/600x400.png', 
    projectUrl: '#', 
    imageHint: 'e-commerce handmade',
    tags: ['Next.js', 'Stripe', 'E-commerce']
  },
  { 
    id: '3', 
    title: 'Project Gamma: DataViz AI', 
    description: 'An AI-powered tool for intuitive data visualization, helping businesses unlock insights from complex datasets.', 
    imageUrl: 'https://placehold.co/600x400.png', 
    projectUrl: '#', 
    imageHint: 'data visualization',
    tags: ['Python', 'D3.js', 'AI/ML']
  },
  { 
    id: '4', 
    title: 'Project Delta: Community Hub', 
    description: 'A social platform for local communities to connect, share events, and support local businesses.', 
    imageUrl: 'https://placehold.co/600x400.png', 
    projectUrl: '#', 
    imageHint: 'social platform',
    tags: ['Firebase', 'Geolocation', 'Community']
  },
];

export default function PortfolioGallery() {
  return (
    <AccordionItem value="portfolio" className="border-none">
      <Card className="shadow-lg mb-4 overflow-hidden">
        <AccordionTrigger className="p-6 text-left w-full hover:no-underline focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-1 rounded-md [&[data-state=open]>svg]:text-accent">
          <div className="flex flex-row items-center gap-3">
            <Zap className="w-8 h-8 text-primary" />
            <h2 className="font-headline text-3xl text-primary">My Portfolio</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-6 pt-0">
          <p className="text-lg text-muted-foreground mb-6 text-center md:text-left">A selection of my recent work and personal projects.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <Card key={project.id} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="p-0">
                  <div className="aspect-video relative">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-headline text-2xl mb-2 text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-md text-foreground/80 mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors">
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
