import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Cellular and Radio Coverage Dashboard',
      description: 'A web app to visualize cellular and radio coverage at sea for Trinidad and Tobago.',
      technologies: 'React, Django, Leaflet.js',
      link: 'https://github.com/yourusername/cellular-dashboard'
    },
    {
      title: 'Liquor License Management System',
      description: 'Developed a system for batch processing and managing liquor licenses.',
      technologies: 'React, Django, PostgreSQL',
      link: ''
    },
    {
      title: 'Angular Portfolio Website',
      description: 'Personal portfolio site built with Angular.',
      technologies: 'Angular, Netlify',
      link: 'https://kylejaimungal.netlify.app'
    }
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.projects.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.projects.length) % this.projects.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
