import { Component, OnInit } from '@angular/core';

export interface Skill {
  display: string;
  altText: string;
  imageLink: string;
  rating: string;
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
      rating: 'Experienced',
    },
    {
      display: 'TypeScript/JavaScript',
      altText: 'TypeScript',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
      rating: 'Experienced',
    },
    {
      display: 'HTML',
      altText: 'HTML5',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg',
      rating: 'Experienced',
    },
    {
      display: 'CSS',
      altText: 'CSS3',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
      rating: 'Comfortable',
    },
    {
      display: 'Go',
      altText: 'Go Language',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
      rating: 'Experienced',
    },
    {
      display: 'Java',
      altText: 'Java',
      imageLink: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
      rating: 'Experienced',
    },
    {
      display: 'Python',
      altText: 'Python',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      rating: 'Experienced',
    },
    {
      display: 'Ruby on Rails',
      altText: 'Ruby on Rails',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg',
      rating: 'Familiar',
    },
    {
      display: 'Angular',
      altText: 'Angular',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
      rating: 'Some experience',
    },
  ];
}
