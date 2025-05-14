import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,  // <-- Mark it as standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule]  // <-- Add RouterModule to imports for using router-outlet
})
export class AppComponent {
  title = 'my-app';
}
