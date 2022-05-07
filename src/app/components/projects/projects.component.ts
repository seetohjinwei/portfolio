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
}
