import { Component, OnInit } from '@angular/core';
import { sections } from 'src/app/data/Sections';
import Section from 'src/app/interfaces/ISection';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  sections: Section[] = sections;

  ngOnInit(): void {}

  jump(jumpName: string): void {
    const element: HTMLElement | null = document.getElementById(jumpName);
    if (element === null) {
      console.log('Invalid jump point:', jumpName);
      return;
    }
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
