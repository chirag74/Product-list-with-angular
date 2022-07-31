import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ManagmentServiceService } from 'src/app/services/managment-service.service';

@Component({
  selector: 'app-prdouct-list',
  templateUrl: './prdouct-list.component.html',
  styleUrls: ['./prdouct-list.component.css']
})
export class PrdouctListComponent implements OnInit {

  products : Product[]; 
  constructor(private service:ManagmentServiceService) { }

  ngOnInit(): void {
    this.listofProduct()
  }
  listofProduct(){
    this.service.getAllProduct().subscribe(data=>{
      this.products=data;
    })
  }
}
