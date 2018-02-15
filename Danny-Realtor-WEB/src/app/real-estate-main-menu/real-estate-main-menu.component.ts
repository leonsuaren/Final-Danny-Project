import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-real-estate-main-menu',
  templateUrl: './real-estate-main-menu.component.html',
  styleUrls: ['./real-estate-main-menu.component.scss']
})
export class RealEstateMainMenuComponent implements OnInit {

  menu = [
    {description: 'HOME', router: ''},
    {description: 'BUY', router: '/buy'},
    {name: 'SELL MY HOUSE', router: '/sell'},
    {name: 'SERVICES', router: '/services'},
    {name: 'ABOUT', router: '/about'},
    {name: 'CONTACT', router: '/contact'},
    // {name: '**', router: '/'}
    ]
  
    menus: Array<any>;
    

  constructor(private _dataService: DataService) { 
    this._dataService.getMenu()
    .subscribe(res => {
      this.menus = res;
      console.log(res);
    });

  }

  ngOnInit() {
    //  $(window).scroll(function() {
    //     if($(this).scrollTop()>35){
    //       $('.navbar').addClass("stiky");
    //     }
    //     else {
    //       $('.navbar').removeClass("stiky");
    //     }
    // })
  }

}
