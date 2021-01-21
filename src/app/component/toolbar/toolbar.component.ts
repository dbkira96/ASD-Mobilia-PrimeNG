import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RouteGuardServiceService } from '../../services/RouteGuard.service';
import { MenuItem } from 'primeng/api';
import { CategoryService } from 'src/app/services/category.service';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[];

  visibleSidebar1;
  constructor(private authService: AuthService,private primengConfig: PrimeNGConfig,
    private route: Router, private categoryService: CategoryService) { }
   

    ngOnInit() {
      this.primengConfig.ripple = true;
      this.items = [

        { label: 'Products', routerLink: ['/products'] },
        { label: 'Categories', routerLink: ['/category'] },
        { label: 'Storage', routerLink: ['/storehouse']},
        { label: 'New Order' , routerLink: ['/newOrder']},
        { label: 'Orders' , routerLink: ['/orders']},
        { label: 'Users', routerLink: ['/users'] },
  
      ]
    }
 /* ngOnInit() {
    
  }*/

  logout() {
    this.authService.clearAll();
    this.route.navigate(['login']);
  }
  
  redirect(target: string) {
    this.route.navigate([target]);
  }
}
