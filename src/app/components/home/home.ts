import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home  {
  
// Project Data
  project = {
    title: 'TechInnovate',
    subtitle: 'MEAN Stack Marketing Deck',
    description: 'Professional static web page demonstrating MEAN stack capabilities for startup marketing presentation.',
    postedDate: '18-12-2025',
    deadline: '30-12-2025',
    budget: '$5 USD',
    status: 'In Progress',
    
    deliverables: [
      'Single page MEAN stack application',
      'Static content display',
      'Responsive design',
      'Clean professional UI',
      'No backend required'
    ],
    
    milestones: [
      { name: 'Project Setup', status: 'Completed' },
      { name: 'UI Development', status: 'Completed' },
      { name: 'Content Integration', status: 'In Progress' },
      { name: 'Final Review', status: 'Pending' },
      { name: 'Delivery', status: 'Pending' }
    ],
    
    techStack: [
      { name: 'Angular', color: '#DD0031' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'HTML5', color: '#E34F26' },
      { name: 'CSS3', color: '#1572B6' },
      { name: 'Node.js', color: '#339933' }
    ]
  };

  // Get status color
  getStatusColor(status: string): string {
    switch(status) {
      case 'Completed': return '#10B981';
      case 'In Progress': return '#F59E0B';
      case 'Pending': return '#6B7280';
      default: return '#3B82F6';
    }
  }
}
