import React from 'react';
import { FiUsers, FiCode, FiAlertCircle, FiDatabase, FiPieChart } from 'react-icons/fi';

export interface Agent {
  title: string;
  description: string;
  iconName: string;
}

export const agents: Agent[] = [
  {
    title: 'Rules Validator',
    description: 'Automatically validates rule consistency and identifies conflicts',
    iconName: 'FiAlertCircle'
  },
  {
    title: 'Code Generator',
    description: 'Generates implementation code for rules in multiple programming languages',
    iconName: 'FiCode'
  },
  {
    title: 'Impact Analyzer',
    description: 'Analyzes how rule changes might affect your applications',
    iconName: 'FiPieChart'
  },
  {
    title: 'Data Integrator',
    description: 'Connects rules to your data sources for context-aware operations',
    iconName: 'FiDatabase'
  },
  {
    title: 'Collaboration Assistant',
    description: 'Facilitates team collaboration on rule development and review',
    iconName: 'FiUsers'
  }
];

// Map of icon components for rendering
export const iconMap = {
  FiAlertCircle,
  FiCode,
  FiPieChart, 
  FiDatabase,
  FiUsers
}; 