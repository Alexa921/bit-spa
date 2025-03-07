import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component"
import { FoundationsComponent } from './components/foundations/foundations.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ApiComponent } from './components/api/api.component';
import { PokeapiComponent } from './components/pokeapi/pokeapi.component';

export const routes: Routes = [
    { path: "api", component: ApiComponent, title: "Api" },
    { path: "pokeapi", component: PokeapiComponent, title: "Poke Api" },
    { path: 'contact', component: ContactComponent, title: "Contacto" },
    { path: "fundamentos", component: FoundationsComponent, title: "Populares" },
    { path: "inicio", component: HomeComponent, title: "Inicio" },
    { path: "", redirectTo: "inicio", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent, title: "Error 404" },
];
