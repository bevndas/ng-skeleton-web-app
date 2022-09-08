import { Component, OnInit } from '@angular/core';
import {ROUTE_PATHS} from '@coremodule/data/route-paths.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routePaths =  ROUTE_PATHS;
  constructor() { }

  ngOnInit(): void {
  }

}
