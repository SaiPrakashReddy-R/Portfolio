import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Breast Cancer segmentation and classification',
      description: 'Classified memogram to benign and malignant and segmented the cancer.',
      imageUrl: '../../assets/images/breastcancerproject.png',
      githubRepo: 'https://github.com/user/project1',
      technologies: ['Python', 'Machine Learning']
    },
    {
      title: 'Building Cable Network using Algorithms',
      description: 'Found the minimal path to lay a cable network across a city using Minimal spanning tree algorithms Prims and kruskals',
      imageUrl: '../../assets/images/algorithms.png',
      githubRepo: 'https://github.com/user/project1',
      technologies: ['Python', 'Minimal Spanning tree Algorithm']
    },
    {
      title: 'Portfolio',
      description: 'Built a portfolio to showcase professional information and achievements',
      imageUrl: '../../assets/images/portfolio.png',
      githubRepo: 'https://github.com/user/project1',
      technologies: ['Angular','Typescript','HTML', 'CSS', 'Bootstrap']
    },
    {
      title: 'Breast Cancer segmentation and classification',
      description: 'Classified memogram to benign and malignant and segmented the cancer.',
      imageUrl: '../../assets/images/breastcancerproject.png',
      githubRepo: 'https://github.com/user/project1',
      technologies: ['Python', 'Machine Learning']
    },
    {
      title: 'Building Cable Network using Algorithms',
      description: 'Found the minimal path to lay a cable network across a city using Minimal spanning tree algorithms Prims and kruskals',
      imageUrl: '../../assets/images/algorithms.png',
      githubRepo: 'https://github.com/user/project1',
      technologies: ['Python', 'Minimal Spanning tree Algorithm']
    },
    {
      title: 'Portfolio',
      description: 'Built a portfolio to showcase professional information and achievements',
      imageUrl: '../../assets/images/portfolio.png',
      githubRepo: 'https://github.com/user/project1',
      technologies: ['Angular','Typescript','HTML', 'CSS', 'Bootstrap']
    }
  ];

  page = 1;
}
