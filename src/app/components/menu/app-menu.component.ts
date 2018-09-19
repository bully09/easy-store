import { Component, OnInit } from '@angular/core';
import { Menu } from '../../dto/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList: Menu[] = new Array();

  ngOnInit() {
    this.menuList.push(new Menu('Inventario', 'fa fa-home', 'inventory', 'Aquí podrás agregar, modificar y eliminar productos para su compra/venta'));
    this.menuList.push(new Menu('Venta', 'fa fa-shopping-basket', '', 'Seleccione esta opción para vender sus productos'));
    this.menuList.push(new Menu('Más...', 'fa fa-dollar', '', 'Próximamente agregaremos más funcionalidades para administrar y ayudar a su negocio'));
  }

}