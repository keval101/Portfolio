import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() closeSidebar = new EventEmitter();
  @Input() scroll: number;

  getScreenWidth: number;
  isScrollDown: boolean;
  isScrollClicked: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  
  checkForActiveClass(event: any): void {
    // event.preventDefault();
    const items: HTMLCollection = document.getElementsByClassName('navbar__item');
    for(let i = 0; i < items.length; i++) {
      if(items[i].classList.contains('active')) {
        items[i].classList.remove('active')
        event.target.classList.add('active')
      } else {
        event.target.classList.add('active')
      }
    }

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      setTimeout(() => {
        this.closeSidebar.emit();
      }, 0);
     }
  }

}
