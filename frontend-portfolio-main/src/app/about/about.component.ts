import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about1: any
  about2: any
  ngOnInit() {
    this.about1 = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
    // this.about2 =  `Software Developer with 2.5+ years of experience .
    // Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
    // Expertise in Angular 2+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
    // Have good understanding of Python, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL`
  }
}
