import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchDataService } from '../service/fetch-data.service';

interface project {
  id: string,
  title: string,
  image: string
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  projects: project[] = [];

  constructor(private route: Router, private dataService: FetchDataService) { }

  ngOnInit(): void {
    this.dataService.getProjects().subscribe(response => {
      this.projects = response.projects
    })
  }

  routeToDetail(id): void {
    this.route.navigate(['project-detail', id]);
  }

}
