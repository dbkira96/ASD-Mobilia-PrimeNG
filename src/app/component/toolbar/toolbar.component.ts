import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RouteGuardServiceService } from '../../services/RouteGuard.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private authService:AuthService,
              private route:Router) { }

  ngOnInit() {
  }
  logout() {
    this.authService.clearAll();
    this.route.navigate(['login']);
  }
}
