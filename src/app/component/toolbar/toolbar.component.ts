import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RouteGuardServiceService } from '../../services/RouteGuard.service';
import { MenuItem } from 'primeng/api';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[];

  constructor(private authService: AuthService,
    private route: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.items = [

      { label: 'Products', routerLink: ['/products'] },
      { label: 'Categories', routerLink: ['/home'] },
      { label: 'Users', routerLink: ['/users'] },

    ]
  }

  logout() {
    this.authService.clearAll();
    this.route.navigate(['login']);
  }
  
  redirect(target: string) {
    this.route.navigate([target]);
  }
}
