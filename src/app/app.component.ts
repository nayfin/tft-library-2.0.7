import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  
  searchConfig = {

    appId: 'K3CROWK8OK',
    apiKey: '6939af36b945c8a8e94c95984b4b9ce6',
    indexName: 'ingredients',
    urlSync: true
  };

  sortIndices = [
    {
      name: 'ingredients/name',
      label: 'Ingredients'
    },
  ];

  logItem(item: any) {
    console.log("logItem",item);
    return item;
  }
}
