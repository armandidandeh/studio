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
          Experienced technologist, with hands-on roots in back-end dev and research background in machine learning (semi-supervised learning, specifically), who is very interested in AI-enabled data products and as a result, data pipelines, data/MLOps, and Human-centred AI.
        </p>
      </CardContent>
    </Card>
  );
}
