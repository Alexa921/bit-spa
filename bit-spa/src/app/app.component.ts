import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from "./components/home/home.component";
import { FoundationsComponent } from './components/foundations/foundations.component';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, NavComponent, HomeComponent, FooterComponent, FoundationsComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bit-spa';
}
