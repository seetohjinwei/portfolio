import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

const height: number = 50;

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css'],
})
export class ScrollToTopComponent implements OnInit {
  constructor(private ref: ElementRef) {}

  hasScrolled: boolean = false;
  onContact: boolean = false;

  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.hasScrolled = window.scrollY > 100;
    const scrollRect: DOMRect | undefined =
      this.ref.nativeElement?.getBoundingClientRect();
    if (scrollRect !== undefined) {
      // transitions the scroller background colour when reaching the contact section
      // target is a magic number
      // 1.5 for halfway across the contact section
      const target: number =
        window.scrollY + scrollRect.top - window.innerHeight + height * 1.5;
      this.onContact = window.scrollY > target;
    }
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
