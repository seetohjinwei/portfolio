import { Component, OnInit } from '@angular/core';
import Project from 'src/app/interfaces/IProject';
import { projects } from '../../data/Projects';
import { TransformTechPipe } from './transform-tech.pipe';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  formatTech = new TransformTechPipe();
  projects: Project[] = projects;

  ngOnInit(): void {}
}
