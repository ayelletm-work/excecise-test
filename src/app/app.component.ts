import { Component } from '@angular/core';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './shared/hero/hero.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './shared/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [FooterComponent, HeroComponent, HeaderComponent, MainComponent]
})
export class AppComponent {
  title = 'carebox-app';
}
