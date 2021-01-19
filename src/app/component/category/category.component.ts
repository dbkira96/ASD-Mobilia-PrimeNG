import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../domain/Category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; }[];
  error;
  category: Category = {};
  imageSrc: string;
  constructor(private categoryService: CategoryService) {
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

  getAll() {

    this.categoryService.getAll()
      .subscribe(res => {
        this.categories = res;
      }, err => this.error = err
      );
  }

  readUrl(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      if (this.category) {
        reader.onload = () =>
          this.category.photo = reader.result as string;

      }
      else {
        reader.onload = () =>
          this.imageSrc = reader.result as string;
      }
    }

  }

  ngOnInit(): void {
    this.getAll();
  }

}
