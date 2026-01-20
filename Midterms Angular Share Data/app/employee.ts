import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {

  constructor() { }

  getEmployees() {
    return [
      {
        id: 101,
        firstname: 'Krisean',
        lastname: 'Tienzo',
        email: 'kgtienzo@hau.edu.ph',
      },
      {
        id: 102,
        firstname: 'Joseph',
        lastname: 'Dizon',
        email: 'jdizon@hau.edu.ph',
      },
      {
        id: 103,
        firstname: 'John',
        lastname: 'Cena',
        email: 'jcena@hau.edu.ph',
      },
      {
        id: 104,
        firstname: 'Robert',
        lastname: 'Quintana',
        email: 'rquintana@hau.edu.ph',
      },
      {
        id: 105,
        firstname: 'Sean',
        lastname: 'Tienzo',
        email: 'stienzo@hau.edu.ph',
      },
    ];
  }
}
