import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  feedData$ = new BehaviorSubject<any>([]);
  constructor(private httpService: HttpService) {}

}
