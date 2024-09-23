import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {

  @Input()
  public placeholder: string = 'buscar...';

  constructor() { }

  ngOnInit() {
  }

}
