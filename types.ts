import { ReactNode } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: ReactNode;
  date: string;
  category: 'Pipeline' | 'Research Profiles' | 'Predictive Modeling' | 'AI Strategy' | 'Case Study' | 'Grant Writing';
  readTime: string;
  imageUrl: string;
}

export interface AudioTrack {
  id: string;
  title: string;
  description: string;
  platform: 'SoundCloud' | 'NotebookLLM';
  date: string;
  embedUrl?: string;
  resources?: { title: string; url: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export enum PageState {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  BLOG = 'BLOG',
  AUDIO = 'AUDIO',
  TOOLS = 'TOOLS'
}