import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css'],
})
export class ScrollToTopComponent implements OnInit {
  constructor() {}

  hasScrolled: boolean = false;

  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.hasScrolled = window.scrollY > 100;
  }

  ngOnInit(): void {}

  jumpTop(): void {
    const element: HTMLElement | null = document.getElementById('about');
    if (element === null) {
      console.log('why is there no about section?');
      return;
    }
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
