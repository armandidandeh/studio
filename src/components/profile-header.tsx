import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function ProfileHeader() {
  return (
    <Card className="overflow-hidden shadow-xl animate-fade-in" style={{animationDelay: '0.1s'}}>
      <CardContent className="p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-primary">
          <Image
            src="https://placehold.co/150x150.png"
            alt="Professional Headshot"
            width={150}
            height={150}
            className="object-cover w-full h-full"
            data-ai-hint="professional headshot"
            priority
          />
        </div>
        <div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
            Arman Didandeh
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mt-2">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
