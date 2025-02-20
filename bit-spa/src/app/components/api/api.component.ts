import { Component } from '@angular/core';

@Component({
  selector: 'app-api',
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {

}

function getCharacters(done) {
  const results = fetch("https://rickandmortyapi.com/api/character");

  results.then( Response => Response.json()).then(data => {
    done(data)
  });
}

getCharacters(data => {
  data.results.forEach(personaje => {
    const article = document.createRange().createContextualFragment(/*html*/ `
      <article>
        <div class="imagen-container">
            <img src="${personaje.image}" alt="Persoanje">
        </div>
        <h2>${personaje.name}</h2>
        <span>${personaje.status}</span>
    </article>
      `);

      const main = document.querySelector("main");

      main.append(article);

  });
});