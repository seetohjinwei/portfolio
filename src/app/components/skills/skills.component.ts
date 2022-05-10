import { Component, OnInit } from '@angular/core';

interface Skill {
  display: string;
  altText: string;
  imageLink: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  skills: Skill[] = [
    {
      display: 'React',
      altText: 'React',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      display: 'Ruby on Rails',
      altText: 'Ruby on Rails',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg',
    },
    {
      display: 'Go',
      altText: 'Go Language',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
    },
    {
      display: 'Angular',
      altText: 'Angular',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/c/ca/AngularJS_logo.svg',
    },
    {
      display: 'Typescript/Javasript',
      altText: 'Typescript',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    },
    {
      display: 'HTML',
      altText: 'HTML5',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg',
    },
    {
      display: 'CSS',
      altText: 'CSS3',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    },
    {
      display: 'Java',
      altText: 'Java',
      imageLink: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
    },
  ];
}
