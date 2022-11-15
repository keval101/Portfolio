import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit, OnDestroy {
  loading: boolean;
  constructor() {
    // this.loading = true
    const loadingValueFromSessionStorage = JSON.parse(sessionStorage.getItem('loading'));
    if(loadingValueFromSessionStorage !== true) {
      this.loading = true;
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  ngOnDestroy(): void {
    // sessionStorage.setItem('loading', 'true');
    sessionStorage.setItem('loading', 'true');
  }

}