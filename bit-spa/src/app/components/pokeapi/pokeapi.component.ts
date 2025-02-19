import { Component, inject, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-pokeapi',
  imports: [],
  templateUrl: './pokeapi.component.html',
  styleUrl: './pokeapi.component.css',
})
export class PokeapiComponent implements OnInit {
  pokeapiService = inject(PokeApiService);

  pokemons: any;

  ngOnInit(): void {
    this.obtenerPokemons();
  }

  obtenerPokemons() {
    this.pokeapiService.getPokemons().subscribe((respuesta: any) => {
      this.pokemons = respuesta.results;
      console.log(this.pokemons);
    });
  }
}
