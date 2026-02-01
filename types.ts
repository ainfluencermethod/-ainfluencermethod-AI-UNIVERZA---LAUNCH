import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface RoadmapProps {
  name: string;
  points: string[];
}