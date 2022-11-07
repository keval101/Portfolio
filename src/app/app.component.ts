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
    const description = "My name is Keval Vadhiya. I graduated from Gujarat Technical Campus with a degree in Computer Science & Engineering. I have been working as Angular Developer for more than 3.5+ years. My objective is to produce excellent final products while writing clear and intelligible code. I have a strong attention to detail and persistence. I am self-motivated, growth-oriented, and eager to learn new things";

    this.meta.addTags([
      { name: "description", content: description },
      { name: 'keywords', content: 'Keval, Keval Vadhiya, Vadhiya, Angular developer, Angular freelancer, Frontend developer, Developer, Keval Vadhiya netlify, Keval Vadhiya portfolio, Portfolio site, Frontend dev portfolio, Angular dev, Angular' },
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
