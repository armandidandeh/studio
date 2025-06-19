
import ProfileHeader from '@/components/profile-header';
import SkillsShowcase from '@/components/skills-showcase';
import AboutSection from '@/components/about-section';
import SocialLinks from '@/components/social-links';
import ContactForm from '@/components/contact-form';
import ResumeDisplay from '@/components/resume-display';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-8 md:py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProfileHeader />
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="space-y-8 md:space-y-10 lg:space-y-12">
          <section id="about">
            <AboutSection />
          </section>
          
          <Separator className="my-6 md:my-8 bg-primary/20" />

          <section id="skills">
            <SkillsShowcase />
          </section>

          <Separator className="my-6 md:my-8 bg-primary/20" />
          
          <section id="resume">
            <ResumeDisplay />
          </section>

          <Separator className="my-6 md:my-8 bg-primary/20" />

          <section id="contact">
            <ContactForm />
          </section>
        </div>
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
