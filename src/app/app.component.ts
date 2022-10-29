import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMenuOpen = false;
  isMobileScreen = false;
  title = 'portfolio';
  isScrollClicked: boolean;
  scroll: number;
  isScrollDown: boolean;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.listen(window, 'scroll', ($event) => {
      // const scroll = (window.scrollY / this.sections);
      this.scroll = window.scrollY;
      if(window.scrollY > 0){
        this.isScrollDown = true;
      } else {
        this.isScrollDown = false;
        this.isScrollClicked = false;
      }
   })
   
    if( /Android|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.isMobileScreen = true;
    } else {
      this.isMobileScreen = false;
    }
  }

  openMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  }

  backToTop(): void {
    this.isScrollClicked = true;
    window.scrollTo(0,0);
  }
}
