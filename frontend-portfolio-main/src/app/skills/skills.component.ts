import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills : any;
  ngOnInit() {


   this.skills = [
      { id: '1', skill: 'Spring Boot', progress: '85%' },
      { id: '2', skill: 'Angular', progress: '85%' },
      { id: '3', skill: 'SQL', progress: '80%' },
      { id: '4', skill: 'Java', progress: '70%' },
      { id: '5', skill: 'Typescript', progress: '90%' },
      { id: '6', skill: 'Bootstrap', progress: '80%' },
      { id: '7', skill: 'Kafka', progress: '75%' },
      { id: '8', skill: 'AWS', progress: '75%' },
      { id: '9', skill: 'Machine Learning', progress: '75%' },
      { id: '10', skill: 'Python', progress: '75%' },
      { id: '11', skill: 'Flask', progress: '75%' },
      {id:'12', skill: 'React', progress: '75%'}

    ];
    
  }
}
