import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  path = '/assets/mock-data/data.json'

  constructor(private readonly http: HttpClient) { }

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      return throwError(`Client-Side error: ${error.error.message}`);
    } else {
      return throwError(`Backend returned code ${error.status} (body was omitted)`);
    }
  }
  //to get all projects
  getProjects(): Observable<any> {
    return this.http.get(this.path)
    .pipe(
      catchError(FetchDataService.handleError))
  }

  //to get project-detail
  getProject(id: string): Observable<any> {
    return this.http.get(this.path)
    .pipe(
      map((res: any) => {
        return res.projects.find(item => id === item.id);
      }),
      catchError(FetchDataService.handleError))
  }
}
