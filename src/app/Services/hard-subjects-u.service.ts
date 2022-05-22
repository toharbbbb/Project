import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardSubjectsUService {
  url = 'https://localhost:44317/api/hardSubjects_u'; 

  constructor() { }
}
