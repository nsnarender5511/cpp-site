import React from 'react';
import { FiUsers, FiCode, FiAlertCircle, FiDatabase, FiPieChart, FiZap, FiTool, FiPlay, FiBook, FiEye, FiGitCommit } from 'react-icons/fi';

export interface Agent {
  id?: string;
  title: string;
  description: string;
  iconName: string;
  emoji?: string;
  version?: string;
}

export const agents: Agent[] = [
  {
    id: 'wizard',
    title: 'Technical Wizard',
    description: 'High-level guidance and coordination for project planning, architecture decisions and technology selection',
    iconName: 'FiZap',
    emoji: '🧙‍♂️',
    version: '1.0'
  },
  {
    id: 'feature-planner',
    title: 'Feature Planner', 
    description: 'Creates detailed step-by-step implementation plans for new features',
    iconName: 'FiPieChart',
    emoji: '✨',
    version: '1.0'
  },
  {
    id: 'fix-planner',
    title: 'Fix Planner',
    description: 'Analyzes bugs and creates detailed plans to diagnose and resolve issues',
    iconName: 'FiAlertCircle', 
    emoji: '🔍',
    version: '1.0'
  },
  {
    id: 'implementer',
    title: 'Implementer',
    description: 'Translates plans into working code with clean implementation',
    iconName: 'FiCode',
    emoji: '🛠️',
    version: '1.0'
  },
  {
    id: 'runner',
    title: 'Runner',
    description: 'Tests and verifies implementations to ensure they work as expected',
    iconName: 'FiPlay',
    emoji: '🏃',
    version: '1.0'
  },
  {
    id: 'doc-agent',
    title: 'Documentation Agent',
    description: 'Creates and maintains clear documentation for code and features',
    iconName: 'FiBook',
    emoji: '📚',
    version: '1.0'
  },
  {
    id: 'code-reviewer',
    title: 'Code Reviewer',
    description: 'Reviews code for quality, patterns and potential improvements',
    iconName: 'FiEye',
    emoji: '👁️',
    version: '1.0'
  },
  {
    id: 'git-committer',
    title: 'Git Committer',
    description: 'Assists with version control operations and commit message creation',
    iconName: 'FiGitCommit',
    emoji: '📝',
    version: '1.0'
  },
  {
    id: 'arch-planner',
    title: 'Architecture Planner',
    description: 'Plans system architecture and infrastructure design',
    iconName: 'FiDatabase',
    emoji: '🏗️',
    version: '1.0'
  },
  {
    id: 'refactor-guru',
    title: 'Refactoring Guru',
    description: 'Provides guidance for code refactoring and improvements',
    iconName: 'FiTool',
    emoji: '🔧',
    version: '1.0'
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
