import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
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
  autoScrollInterval: any;

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    clearInterval(this.autoScrollInterval); // Clean up interval when component is destroyed
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.projects.length;
    this.resetAutoScroll();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.projects.length) % this.projects.length;
    this.resetAutoScroll();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoScroll();
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Auto-scroll every 3 seconds
  }

  resetAutoScroll() {
    clearInterval(this.autoScrollInterval);
    this.startAutoScroll();
  }
}
