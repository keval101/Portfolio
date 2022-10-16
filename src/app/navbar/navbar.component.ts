import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  
  checkForActiveClass(event: any): void {
    const items: HTMLCollection = document.getElementsByClassName('navbar__item');
    for(let i = 0; i < items.length; i++) {
      if(items[i].classList.contains('active')) {
        items[i].classList.remove('active')
        event.target.classList.add('active')
      } else {
        event.target.classList.add('active')
      }
    }
  }

}
