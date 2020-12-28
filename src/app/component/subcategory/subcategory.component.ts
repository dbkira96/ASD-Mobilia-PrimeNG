import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/domain/Category';
import { Subcategory } from 'src/app/domain/Subcategory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  subcategories: Subcategory[];
  category:Category; 
  responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; }[];
  error;
  constructor(
    private activatedRouted: ActivatedRoute,
    private categoryService: CategoryService) {
      this.responsiveOptions = [
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
      ];
  }

  getAllSubcategoryByCategory(id) {

    this.categoryService.getAllSubcategoryByCategory(id)
      .subscribe(res => {
        this.subcategories = res;
      }, err => this.error = err
      );
  }

  ngOnInit(): void {

    const id = +this.activatedRouted.snapshot.params.id;
    this.category={id: id, name:""};
    this.getAllSubcategoryByCategory(id);
  }


}

