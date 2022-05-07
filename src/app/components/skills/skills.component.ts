import { Component, OnInit } from '@angular/core';
import { skills } from 'src/app/data/Skills';
import Skill from 'src/app/interfaces/ISkill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  skills: Skill[] = skills;

  ngOnInit(): void {}
}
