import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchDataService } from '../../service/fetch-data.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: FetchDataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      const projectId = res['id']
      this.dataService.getProject(projectId).subscribe(project =>{
        this.project = project
      });
    })
  }

  routerToExternalLink(link: string): void {
    window.open(link, '_blank');
  }

}
