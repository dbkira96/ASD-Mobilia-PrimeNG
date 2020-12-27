import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{Product} from '../../domain/Product'
import{ProductDataService}from '../../services/data/ProductData.service'
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FilterService} from 'primeng/api';

@Component({
  selector: 'app-storehouse',
  templateUrl: './storehouse.component.html',
  styleUrls: ['./storehouse.component.scss']
})
export class StorehouseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
