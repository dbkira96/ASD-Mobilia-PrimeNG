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
  selectedShelf:Shelf={};
  placeName:string="placeholder"

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
        this.places=data
        this.placeData.getAllShelves().subscribe(
          data=>{this.shelfs=data
            this.places.forEach(p=>{
             var s1= this.shelfs.find(s=>s.id==p.shelf.id)
              if(s1.places==null) s1.places=[]
              s1.places.push(p);
            })
          }
        )
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
    
    this.placeData.newShelf(new Shelf(undefined)).subscribe( 
      data => {

        this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'shelf added' });
        console.log(data);
        var s:Shelf = data;
        var p:Place = new Place();
        p.shelf = s
        p.nome="placeholder"
        this.placeData.newPlace(p).subscribe(
          data=>{this.shelfs.push(data.shelf)}
        )
      }
    );
    
  }

  saveAll(){

  }
  addPlaceToShelf(s:Shelf){
     var p:Place = new Place();
     p.nome=this.placeName;
     p.shelf = s;
     console.log(p)
     this.placeData.newPlace(p).subscribe(
      data => {
                this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'place added' });
                console.log(data)
                data.nome=this.placeName
                this.selectedShelf.places.push(data)
              }
     )

  }
  deletePlace(id:number){
    console.log(id)
    var p= this.selectedShelf.places.find(p=>p.id==id)
    
    
     this.placeData.delete(id).subscribe(
       data => { this.messageService.add({ key: 'tc', severity: 'success', summary: 'Service Message', detail: 'place deleted' });
       this.selectedShelf.places.splice(this.selectedShelf.places.indexOf(p));
      },

       err => {this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: 'Impossible delete this place' });}
     );
  }

  selShelf(s:Shelf){
    this.selectedShelf=s
  }

  refresh(): void {
    window.location.reload();
  }
  

}
