import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{Product} from '../../domain/Product'
import{ProductDataService}from '../../services/data/ProductData.service'
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FilterService} from 'primeng/api';
import { Shelf } from 'src/app/domain/Shelf';
import { Place } from 'src/app/domain/Place';
import { CategoryService } from 'src/app/services/category.service';
import { VendorService } from 'src/app/services/vendor.service';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-storehouse',
  templateUrl: './storehouse.component.html',
  styleUrls: ['./storehouse.component.scss'],
  providers: [ProductDataService, MessageService, ConfirmationService,PlaceService]
})
export class StorehouseComponent implements OnInit {

  products: Product[] = [];
  shelfs: Shelf[] = [];
  places:Place[] = [];
  s:number[] = [];

  constructor(
    private productData: ProductDataService,
    private messageService: MessageService,
    private placeData:PlaceService,
    private confirmationService: ConfirmationService,
    private categoryService: CategoryService,
    private vendorService: VendorService
  ) {
    
   }

  ngOnInit() {

    this.productData.getAllProducts().subscribe(
      data => {
        this.products = data;
      }
    );

    this.placeData.getAllPlaces().subscribe(
      data=>{
        this.places = data;
        console.log(this.places);
        console.log("shelfs:");

      for(var i = 0; i < this.places.length;i++)
      {
        this.s.push(this.places[i].shelf.id);
        
      }

        
        /* this.shelfs = this.getShelfs(this.places);
        this.shelfs.sort();
        let uniqueshelfs=[...new Set(this.shelfs)]
        this.shelfs = uniqueshelfs; */
        this.s.sort();
        var unique = this.s.filter((v, i, a) => a.indexOf(v) === i); 
        for(var i = 0; i < unique.length;i++)
        {
          this.shelfs.push(new Shelf(unique[i]));
        }
        console.log(this.shelfs);

      }
    )
    
  }
   

  getShelfs(places:Place[]){
    var shelfs:Shelf[] = [];
    for(var i = 0 ; i < places.length;i++){
      shelfs[i] = places[i].shelf;
    }
      let uniqueshelfs=[...new Set(shelfs)]
       return uniqueshelfs;
  }

  onlyUnique(value,index,self){
    return self.indexOf(value) === index;

  }


  
  

}
