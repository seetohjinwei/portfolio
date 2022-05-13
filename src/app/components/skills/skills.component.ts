import { Component, OnInit } from '@angular/core';

export interface Skill {
  display: string;
  altText: string;
  imageLink: string;
  // preferably out of 5
  rating: number;
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
      rating: 5,
    },
    {
      display: 'Ruby on Rails',
      altText: 'Ruby on Rails',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg',
      rating: 4,
    },
    {
      display: 'Go',
      altText: 'Go Language',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
      rating: 4,
    },
    {
      display: 'Angular',
      altText: 'Angular',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
      rating: 4,
    },
    {
      display: 'Typescript/Javasript',
      altText: 'Typescript',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
      rating: 5,
    },
    {
      display: 'HTML',
      altText: 'HTML5',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg',
      rating: 5,
    },
    {
      display: 'CSS',
      altText: 'CSS3',
      imageLink:
        'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
      rating: 4,
    },
    {
      display: 'Java',
      altText: 'Java',
      imageLink: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
      rating: 5,
    },
  ];
}
