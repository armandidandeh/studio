import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function ProfileHeader() {
  return (
    <Card className="overflow-hidden shadow-xl animate-fade-in" style={{animationDelay: '0.1s'}}>
      <CardContent className="p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-primary">
          <Image
            src="https://storage.googleapis.com/genai-studio-public-images/user-provided/f689935b-3126-489a-820d-179a37395a1b.png"
            alt="Arman Didandeh - Professional Headshot"
            fill
            className="object-cover" 
            sizes="(max-width: 640px) 8rem, (max-width: 768px) 9rem, 10rem" 
            data-ai-hint="profile picture man"
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
