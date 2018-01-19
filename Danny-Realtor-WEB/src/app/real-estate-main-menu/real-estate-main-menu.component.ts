import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-estate-main-menu',
  templateUrl: './real-estate-main-menu.component.html',
  styleUrls: ['./real-estate-main-menu.component.scss']
})
export class RealEstateMainMenuComponent implements OnInit {

  menus = [
    {name: 'HOME', router: ''},
    {name: 'BUY', router: '/buy'},
    {name: 'SELL MY HOUSE', router: '/sell'},
    {name: 'SERVICES', router: '/services'},
    {name: 'ABOUT', router: '/about'},
    {name: 'CONTACT', router: '/contact'},
    // {name: '**', router: '/'}
    ]
  

  constructor() { }

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
