import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { invoke } from '@tauri-apps/api/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'boilerplate-tauri-angular';

  async callRustFunction() {
    try {
      const response = await invoke('greet', { name: 'Angular' });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
