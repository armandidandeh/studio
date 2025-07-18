
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { 
  Code, 
  BarChart3, 
  BrainCircuit, 
  MessagesSquare, 
  Layers, 
  DatabaseZap,
  Cloud, 
  Warehouse, 
  Database, 
  GitMerge,
  Wand2,
  ListTree,
  type LucideIcon
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

const categorizedSkills: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['SQL', 'Python', 'Javascript', 'Java', 'R', 'C++'],
  },
  {
    title: 'BI & Visualization',
    icon: BarChart3,
    skills: ['Looker', 'Tableau', 'Domo', 'Mode', 'D3.js'],
  },
  {
    title: 'Data Science & ML Frameworks',
    icon: BrainCircuit,
    skills: ['scikit-learn', 'BQML', 'PyTorch', 'Keras/TensorFlow', 'Gephi', 'Octave'],
  },
  {
    title: 'AI & NLP Toolsets',
    icon: MessagesSquare,
    skills: ['HuggingFace', 'LLMs (Llama, OpenAI, Anthropic, Cohere)', 'spaCy', 'Gensim', 'Stanford CoreNLP', 'fastText', 'Aylien'],
  },
  {
    title: 'Deep Learning Tools',
    icon: Layers,
    skills: ['LlamaIndex', 'LangChain', 'Gradio', 'W&B', 'Lamini'],
  },
  {
    title: 'Data Engineering',
    icon: DatabaseZap,
    skills: ['Dataform', 'dbt', 'Airflow (Cloud Composer, Astronomer, Dagster)', 'ETL/ELT (Rivery, Matillion, Talend, etc.)', 'Snowpark', 'Apache Spark/Databricks', 'Apache Storm', 'Solr', 'Oozie'],
  },
  {
    title: 'Cloud Services',
    icon: Cloud,
    skills: ['GCP (Compute, GKE, App Engine, IAM, VertexAI, Cloud Run)', 'AWS (EC2, ECS, EKS, S3, Lambda, SageMaker, etc.)', 'Azure', 'Oracle Cloud', 'Databricks'],
  },
  {
    title: 'Data Warehouses & CDPs',
    icon: Warehouse,
    skills: ['BigQuery', 'Snowflake', 'Redshift', 'Data Cleanrooms', 'CDPs'],
  },
  {
    title: 'Database Systems',
    icon: Database,
    skills: ['RDBMS', 'NoSQL', 'GraphDB', 'NewSQL'],
  },
  {
    title: 'CI/CD Tools',
    icon: GitMerge,
    skills: ['GitHub Actions', 'CircleCI', 'GCP Cloud Build', 'AWS CodePipeline'],
  },
  {
    title: 'Code Productivity Tools',
    icon: Wand2,
    skills: ['Cursor', 'GitHub Copilot', 'Firebase Studio', 'OpenAI Codex', 'IntelliSense', 'TabNine'],
  },
];

export default function SkillsShowcase() {
  return (
    <AccordionItem value="skills" className="border-none">
      <Card className="shadow-lg mb-4 overflow-hidden">
        <AccordionTrigger className="p-6 text-left w-full hover:no-underline focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-1 rounded-md [&[data-state=open]>svg]:text-accent">
          <div className="flex flex-row items-center gap-3">
            <ListTree className="w-8 h-8 text-primary" />
            <h2 className="font-headline text-3xl text-primary">Skills & Technologies</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-6 pt-2 text-md text-foreground/80 space-y-6">
          {categorizedSkills.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="font-headline text-xl text-primary mb-3 flex items-center">
                <category.icon className="w-6 h-6 mr-2 text-accent" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm px-3 py-1 rounded-full shadow-sm transition-transform hover:scale-105 bg-slate-700 text-primary-foreground hover:bg-slate-600 cursor-default flex items-center gap-1.5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}
