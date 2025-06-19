
import ProfileHeader from '@/components/profile-header';
import SkillsShowcase from '@/components/skills-showcase';
import AboutSection from '@/components/about-section';
import SocialLinks from '@/components/social-links';
import ContactForm from '@/components/contact-form';

import {
  Accordion
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="pt-8 md:pt-12 pb-0 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProfileHeader />
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-12">
        <Accordion type="single" defaultValue="about" collapsible className="w-full">
          <AboutSection />
          <SkillsShowcase />
          <ContactForm />
        </Accordion>
      </main>

      <footer className="py-8 bg-card border-t border-border mt-12 md:mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SocialLinks />
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Arman Didandeh. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
