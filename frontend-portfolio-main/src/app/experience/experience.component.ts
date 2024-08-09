import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  workexp : any;

  ngOnInit() {
   this.workexp = [
      {
        company: 'Tata Consultancy Services',
        role: 'Application Developer (Full stack), Analyst',
        startDate: 'Aug 2022',
        endDate: 'Dec 2023',
        duties: [
          'DBS Paylah Payment Service: Engineered RESTful APIs serving 2 million users, improving transaction efficiency.',
          'Fraud Data Processing System: Implemented changes across 15+ APIs, enhancing data processing efficiency.',
          'AWS Data Storage: Developed a Spring Boot batch job for fraudulent data handling, reducing manual efforts.'

        ]
      },
      {
        company: 'Tata Consultancy Services',
        role: 'Application Developer(Full Stack), Senior Officer',
        startDate: 'Aug 2021',
        endDate: 'Aug 2022',
        duties: [
          'Worked as a full stack developer',
          'Developer Angular components for admin module',
          'Implemented api-automation using Karate for backend service',
          'Worked on developing quality code, code coverage, debugged and fixed issues'
        ]
      }
    ]
  }

}
