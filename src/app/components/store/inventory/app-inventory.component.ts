import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inventory',
  templateUrl: './app-inventory.component.html',
  styleUrls: ['./app-inventory.component.css']
})
export class InventoryComponent implements OnInit {

  page: number = 0;

  ngOnInit() { }

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

}