import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
  category: 'mobile' | 'web' | 'fullstack';
}

export interface NavItem {
  label: string;
  href: string;
}

export type SkillLevel = 'Expert' | 'Advanced' | 'Proficient';
export type SkillCategory = 'Frontend' | 'Backend' | 'Mobile' | 'Languages' | 'Tools & Platforms';

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  level: SkillLevel;
  invertDark?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  type: 'work' | 'education';
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}