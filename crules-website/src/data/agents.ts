import React from 'react';
import { FiUsers, FiCode, FiAlertCircle, FiDatabase, FiPieChart, FiZap, FiTool, FiPlay, FiBook, FiEye, FiGitCommit } from 'react-icons/fi';

export interface Agent {
  title: string;
  description: string;
  iconName: string;
}

export const agents: Agent[] = [
  {
    title: 'Technical Wizard',
    description: 'High-level guidance and coordination for architecture decisions and project planning',
    iconName: 'FiZap'
  },
  {
    title: 'Feature Planner',
    description: 'Breaks down feature requirements into detailed implementation plans',
    iconName: 'FiPieChart'
  },
  {
    title: 'Fix Planner',
    description: 'Analyzes bugs and creates detailed plans to resolve issues',
    iconName: 'FiAlertCircle'
  },
  {
    title: 'Implementer',
    description: 'Translates plans into working code based on specifications',
    iconName: 'FiCode'
  },
  {
    title: 'Runner',
    description: 'Tests and verifies implementations to ensure they work correctly',
    iconName: 'FiPlay'
  },
  {
    title: 'Documentation Agent',
    description: 'Creates and organizes documentation for code and features',
    iconName: 'FiBook'
  },
  {
    title: 'Code Reviewer',
    description: 'Reviews code for quality issues and suggests improvements',
    iconName: 'FiEye'
  },
  {
    title: 'Git Committer',
    description: 'Helps create commit messages and manage version control changes',
    iconName: 'FiGitCommit'
  }
];

// Map of icon components for rendering
export const iconMap = {
  FiAlertCircle,
  FiCode,
  FiPieChart, 
  FiDatabase,
  FiUsers,
  FiZap,
  FiTool,
  FiPlay,
  FiBook,
  FiEye,
  FiGitCommit
}; 