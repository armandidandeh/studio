import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Database, Cloud } from 'lucide-react';

const skillsData = [
  { name: 'JavaScript', icon: <Code className="w-5 h-5" /> },
  { name: 'React', icon: <Code className="w-5 h-5" /> },
  { name: 'Next.js', icon: <Code className="w-5 h-5" /> },
  { name: 'TypeScript', icon: <Code className="w-5 h-5" /> },
  { name: 'Node.js', icon: <Code className="w-5 h-5" /> },
  { name: 'Tailwind CSS', icon: <Palette className="w-5 h-5" /> },
  { name: 'Firebase', icon: <Database className="w-5 h-5" /> },
  { name: 'UI/UX Design', icon: <Palette className="w-5 h-5" /> },
  { name: 'Cloud Computing', icon: <Cloud className="w-5 h-5" /> },
];

export default function SkillsShowcase() {
  return (
    <Card className="shadow-lg animate-fade-in" style={{animationDelay: '0.3s'}}>
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary">Skills & Technologies</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {skillsData.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-sm px-4 py-2 rounded-full shadow-sm transition-transform hover:scale-105 bg-accent/20 text-accent-foreground hover:bg-accent/40 cursor-default flex items-center gap-2"
            >
              {skill.icon}
              {skill.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
