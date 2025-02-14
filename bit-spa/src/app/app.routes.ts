import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component"
import { FoundationsComponent } from './components/foundations/foundations.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: "inicio", component: HomeComponent },
    { path: "fundamentos", component: FoundationsComponent },
];
