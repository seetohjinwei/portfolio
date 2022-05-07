import { Component, OnInit } from '@angular/core';

interface Section {
  shortName: string;
  jumpName: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  sections: Section[] = [
    {
      shortName: 'About',
      jumpName: 'about',
    },
    {
      shortName: 'Education',
      jumpName: 'edu',
    },
    {
      shortName: 'Projects',
      jumpName: 'proj',
    },
    {
      shortName: 'Skills',
      jumpName: 'skills',
    },
  ];

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
