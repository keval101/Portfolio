import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {
  loading: boolean;
  constructor() {
    this.loading = true
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

}
