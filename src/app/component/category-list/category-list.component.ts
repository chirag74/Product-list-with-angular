import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/Categroy';
import { ManagmentServiceService } from 'src/app/services/managment-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  category: Category[] 
  constructor(private service:ManagmentServiceService) { }


  ngOnInit(): void {
    this.listofCategory()
  }
  listofCategory(){
    this.service.getAllCategory().subscribe(data=>{
      this.category=data;
    })
  }
}






