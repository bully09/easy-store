import { Component, OnInit } from '@angular/core';
import { Menu } from '../../dto/menu';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class HeaderComponent implements OnInit {

  menuList: Menu[] = new Array();

  ngOnInit() {
    this.menuList.push(new Menu('Inicio', 'fa fa-home', ''));
    this.menuList.push(new Menu('Inventario', 'fa fa-shopping-basket', 'inventory'));
    this.menuList.push(new Menu('Venta', 'fa fa-dollar', ''));
  }

}