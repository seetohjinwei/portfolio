import { Component, OnInit } from '@angular/core';
import { projects } from '../data/Projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  projects = projects;

  ngOnInit(): void {}
}
