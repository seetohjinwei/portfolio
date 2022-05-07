import { Component, OnInit } from '@angular/core';
import Project from 'src/app/interfaces/IProject';
import { projects } from '../../data/Projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  projects: Project[] = projects;

  ngOnInit(): void {}

  formatTech(tech: string[]): string {
    const prefix: string = 'built with';
    const length: number = tech.length;
    if (length == 1) {
      return `${prefix} ${tech[0]}`;
    }
    const front: string[] = tech.slice(0, -1);
    return `${prefix} ${front.join(', ')} and ${tech[length - 1]}`;
  }
}
