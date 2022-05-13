import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../skills/skills.component';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css'],
})
export class SkillCardComponent implements OnInit {
  @Input() skill!: Skill;

  isFlipped: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
