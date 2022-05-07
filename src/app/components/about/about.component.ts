import { Component, OnInit } from '@angular/core';
import { aboutMe } from 'src/app/data/AboutMe';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  aboutMe: string = aboutMe;

  ngOnInit(): void {}
}
