import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TechTags } from 'src/app/enums/enums';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('img') image: ElementRef;
  isAbout: boolean;
  isSkills: boolean;
  isExperience: boolean;
  TechTags = TechTags
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.isAbout = true;

    this.calculateExperience()
    this.renderer.listen(window, 'load', ($event) => {
      if(window.screen.availWidth > 769) {
        const screenHeight = window.screen.availHeight
        const image  = this.image.nativeElement.offsetHeight;
        const finalSize = screenHeight - image;
        const aboutSection = document.getElementById('about');
        aboutSection.style.height = `calc(100vh - ${finalSize}px)`;
      }
   })

  }

  showAbout(event): void {
    this.isAbout = true
    this.isSkills = false
    this.isExperience = false
    this.checkForActiveClass(event);
  }
  showSkills(event): void {
    this.isAbout = false
    this.isSkills = true
    this.isExperience = false
    this.checkForActiveClass(event);
  }
  showExperience(event): void {
    this.isAbout = false
    this.isSkills = false
    this.isExperience = true
    this.checkForActiveClass(event);
  }

  checkForActiveClass(event: any): void {
    const items: HTMLCollection = document.getElementsByClassName('section-title');
    for(let i = 0; i < items.length; i++) {
      if(items[i].classList.contains('active')) {
        items[i].classList.remove('active')
        event.target.classList.add('active')
      } else {
        event.target.classList.add('active')
      }
    }
  }


  calculateExperience(): string {
    const joiningDate = new Date('06-15-2021');
    const currentDate = new Date()
    var startMonth = joiningDate.getFullYear() * 12 + joiningDate.getMonth();  
    var endMonth = currentDate.getFullYear() * 12 + currentDate.getMonth();
    var monthInterval = (endMonth - startMonth);

    var yearsOfExperience = Math.floor (monthInterval / 12);
    var monthsOfExperience = monthInterval % 12;

    return `${yearsOfExperience}.${monthsOfExperience}`
  }

  downloadCV(): void{
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../../assets/files/Keval-Vadhiya-AngularDev-1.9Years.pdf');
    link.setAttribute('download', 'Keval-Vadhiya-AngularDev-1.9Years.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
