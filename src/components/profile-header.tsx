
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeToggleButton } from '@/components/theme-toggle-button';

export default function ProfileHeader() {
  return (
    <Card className="overflow-hidden shadow-xl animate-fade-in" style={{animationDelay: '0.1s'}}>
      <CardContent className="relative p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
          <ThemeToggleButton />
        </div>
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg">
          <Image
            src="https://www.dropbox.com/scl/fi/0i3e2ail91qm82tcm8swz/DSC_0278.JPG?rlkey=ba5bzu6r9f7wierykax5leo0f&st=ybcexcsn&dl=1"
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
            Building AI products, one data pipeline at a time.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
