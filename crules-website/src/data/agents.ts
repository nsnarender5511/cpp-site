import React from 'react';
import { FiUsers, FiCode, FiAlertCircle, FiDatabase, FiPieChart } from 'react-icons/fi';

export const agents = [
  {
    title: 'Rules Validator',
    description: 'Automatically validates rule consistency and identifies conflicts',
    icon: <FiAlertCircle size={24} />
  },
  {
    title: 'Code Generator',
    description: 'Generates implementation code for rules in multiple programming languages',
    icon: <FiCode size={24} />
  },
  {
    title: 'Impact Analyzer',
    description: 'Analyzes how rule changes might affect your applications',
    icon: <FiPieChart size={24} />
  },
  {
    title: 'Data Integrator',
    description: 'Connects rules to your data sources for context-aware operations',
    icon: <FiDatabase size={24} />
  },
  {
    title: 'Collaboration Assistant',
    description: 'Facilitates team collaboration on rule development and review',
    icon: <FiUsers size={24} />
  }
]; 