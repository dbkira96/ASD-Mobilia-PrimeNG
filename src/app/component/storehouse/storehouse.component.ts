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

        this.s.sort();

        var unique = this.s.filter((v, i, a) => a.indexOf(v) === i); 
        for(var i = 0; i < unique.length;i++)
        {
          this.shelfs.push(new Shelf(unique[i]));
        }


      for(var i = 0 ; i < this.places.length;i++)
      {
          var p = this.places[i];
      //  for(var k = 0; i < this.shelfs.length;k++)
       // {}
       var s1 : Shelf = this.shelfs.find(s2 => s2.id == p.shelf.id)
       s1.places.push(p)
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

  addShelf(){
    console.log("sono nel addShelf");
    this.placeData.newShelf(new Shelf(undefined)).subscribe( 
      data => {

        this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'shelf added' });
        console.log(data);
        var s:Shelf = data;
        var p:Place = new Place();
        p.shelf = s
        this.placeData.newPlace(p).subscribe()
      }
    );
    
  }

  saveAll(){

  }
  addPlaceToShelf(s:Shelf){
     var p:Place = new Place();
     p.shelf = s;
     this.placeData.newPlace(p).subscribe(
      data => {
                this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'place added' });
              }
     )

  }
  deletePlace(id:number){
    console.log(id)
     this.placeData.delete(id).subscribe(
       data => { this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'place deleted' });},

       err => {this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'Impossible delete this place' });}
     );
  }


  refresh(): void {
    window.location.reload();
  }
  

}
