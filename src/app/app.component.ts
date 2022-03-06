import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tab';
  tabs: any = 'home';
  ontabchange(ids: any) {
    this.tabs = ids;
  }
}
