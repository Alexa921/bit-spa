import { Component } from '@angular/core';
import { ApirickyService } from '../../services/apiricky.service';

@Component({
  selector: 'app-api',
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
})
export class ApiComponent {
  personajes: any;
  constructor(private servicericky: ApirickyService) {}

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.servicericky.getPersonajes().subscribe((response: any) => {
      console.log(response.results);
      this.personajes = response.results;
    });
  }
}
