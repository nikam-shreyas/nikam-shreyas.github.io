import React from 'react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  hoverColor: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}