import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <Card className="shadow-lg animate-fade-in" style={{animationDelay: '0.5s'}}>
      <CardHeader className="flex flex-row items-center gap-3">
        <UserCircle2 className="w-8 h-8 text-primary" />
        <CardTitle className="font-headline text-3xl text-primary">About Me</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-lg text-foreground/80 leading-relaxed">
        <p>
          Hello! I&apos;m Alex Johnson, a passionate and results-driven Full-Stack Developer with a keen eye for UI/UX design. 
          With several years of experience in crafting modern, responsive, and user-friendly web applications, 
          I thrive on turning complex problems into elegant digital solutions.
        </p>
        <p>
          My journey in tech began with a fascination for how software can transform ideas into reality. 
          This led me to master a range of technologies, always eager to learn and adapt to the ever-evolving landscape of web development. 
          I believe in the power of collaboration, continuous improvement, and creating products that not only function flawlessly but also provide delightful user experiences.
        </p>
        <p>
          When I&apos;m not coding, you can find me exploring new design trends, contributing to open-source projects, or hiking in the great outdoors.
        </p>
      </CardContent>
    </Card>
  );
}
