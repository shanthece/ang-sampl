import { Component,  ViewChild, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DropdownDirective } from "./dropdown.directive";
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 1800, noPause: true, noWrap: false}}]
})
export class CheckComponent implements OnInit {
  //Modal Pop up
   @ViewChild('autoShownModal') public autoShownModal:ModalDirective;
  public isModalShown:boolean = false;
 
  public showModal():void {
    this.isModalShown = true;
  }
 
  public hideModal():void {
    this.autoShownModal.hide();
  }
 
  public onHidden():void {
    this.isModalShown = false;
  }
  //Modal Ends
  public oneAtATime: boolean = true;
  // array of all items to be paged
    private allItems: any[];
 
    // pager object
    pager: any = {};
 
    // paged items
    pagedItems: any[];
 
    ngOnInit() {
        // get dummy data
       this.newService.DummyData().subscribe(
          data => {
                // set items to json response
                this.allItems = data;
                console.log(data)
 
                // initialize to page 1
                this.setPage(1);
            }
       )
    }
    
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.newService.getPager(this.allItems.length, page);
 
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
  //End of Page Service
  onSubmit = function(user){
          console.log(user);
        }
     items:Array<any> = [];   
  constructor(private newService: MyDataService) { 
    this.items = [
      { name: 'assets/img/pic1.jpg' },
      { name: 'assets/img/pic2.jpg' },
      { name: 'assets/img/pic3.jpg' },
      { name: 'assets/img/pic4.jpg' },
      { name: 'assets/img/pic5.jpg' },
      { name: 'assets/img/pic6.jpg' },
    ]
  }


  title = 'aa';
  object = {id: '1', name: 'shanth'};
  arr = ['123','456','678'];
  IsTrue = false;
  myName = 'shanth';

  images = ['Java','Css','Html'];
  newItem = "";
  pushItem = function(){
    if(this.newItem != ""){
      this.images.push(this.newItem);
      this.newItem = "";
    }
  }
  removeItem = function(index){
    this.images.splice(index,1);
  }
}
