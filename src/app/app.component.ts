import { Component, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';

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
  loading = true;

  constructor(private renderer: Renderer2, private meta: Meta) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500);

    sessionStorage.setItem('loading', 'false');
    
    this.renderer.listen(window, 'scroll', ($event) => {
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

    this.addSEOtags();
  }

  openMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  }

  backToTop(): void {
    this.isScrollClicked = true;
    window.scrollTo(0,0);
  }

  addSEOtags(): void  {
    const description = "Discover the expertise of Keval Vadhiya, a seasoned Angular Developer who specializes in crafting responsive web applications with a strong foundation in component-based architecture. With a passion for Angular development, Keval Vadhiya excels in API integration, state management, and code optimization, ensuring high-performance applications that work seamlessly across devices and browsers. As a dedicated Angular expert, Keval Vadhiya is committed to continuous learning and delivering top-notch solutions. Explore the portfolio to witness Keval Vadhiya's proficiency in Angular and the remarkable user experiences created through mobile-responsive design and cross-browser compatibility.";

    this.meta.addTags([
      { name: "description", content: description },
      { name: 'keywords', content: 'Angular Developer, Angular Development, Responsive Web Applications, Component-Based Architecture, API Integration in Angular, State Management in Angular, Front-End Excellence, Code Optimization, Testing and Debugging, Mobile-Responsive Design, Cross-Browser Compatibility, Angular Expert, Web Application Developer, UI/UX Design in Angular, NgRx, RxJS, Front-End Collaboration, Continuous Learning, Performance Optimization, Angular Portfolio, Keval, Keval Vadhiya, Keval Vadhiya Angular Developer, Angular Freelancer, Keval Freelancer' },
      { name: 'author', content: 'Keval Vadhiya' },
      { name: "image", content: '	https://kevalvadhiyaa.netlify.app/assets/images/logofav.png'},
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://kevalvadhiyaa.netlify.app'},
      { property: 'og:title', content: 'Keval Vadhiya' },
      { property: 'og:description', content: description },
      { name: 'twitter:site', content: `@KevalVadhiya`},
      { name: 'twitter:title', content: 'Keval Vadhiya'},
      { name: 'twitter:description', content: description},
      { name: 'twitter:image', content: `	https://kevalvadhiyaa.netlify.app/assets/images/logofav.png`},
      { name: 'twitter:card', content: 'summary_large_image'},
    ])
  }
}
