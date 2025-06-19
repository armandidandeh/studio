
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinksData: { id: string; name: string; url: string; icon: JSX.Element }[] = [
  // LinkedIn link removed as per user request
];

export default function SocialLinks() {
  if (socialLinksData.length === 0) {
    return null; 
  }

  return (
    <div className="flex justify-center space-x-4 py-6 animate-fade-in" style={{animationDelay: '1.2s'}}>
      {socialLinksData.map((link) => (
        <Button key={link.id} variant="outline" size="icon" asChild className="rounded-full w-12 h-12 hover:bg-accent/20 transition-colors duration-300_transform hover:scale-110">
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  );
}
