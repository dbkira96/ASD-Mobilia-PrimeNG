import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../domain/Category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[];
  responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; }[];
  error;
  constructor(private categoryService:CategoryService) {  this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];}
  
getAll(){

  this.categoryService.getAll()
  .subscribe(res=>{
    this.categories=res;
  },err=>this.error=err
  );
}

  ngOnInit(): void {
    this.getAll(); 
  }

}
