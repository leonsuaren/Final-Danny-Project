import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-re-hp-feature-listings',
  templateUrl: './re-hp-feature-listings.component.html',
  styleUrls: ['./re-hp-feature-listings.component.scss']
})
export class ReHpFeatureListingsComponent implements OnInit {

  features = [
    {title: '856 Waycross Rd', subtitle: '$170,000', img: '../../assets/tanner-daniels.jpg', content: '3/Bedrooms'},
    {title: '856 Waycross Rd', subtitle: '$150,000', img: '../../assets/tanner-daniels.jpg', content: '3/Bedrooms'},
    {title: '856 Waycross Rd', subtitle: '$160,000', img: '../../assets/tanner-daniels.jpg', content: '3/Bedrooms'},
    {title: '856 Waycross Rd', subtitle: '$180,000', img: '../../assets/tanner-daniels.jpg', content: '3/Bedrooms'},
    {title: '856 Waycross Rd', subtitle: '$180,000', img: '../../assets/tanner-daniels.jpg', content: '3/Bedrooms'},
    {title: '856 Waycross Rd', subtitle: '$180,000', img: '../../assets/tanner-daniels.jpg', content: '3/Bedrooms'}
  ]


  constructor() { }

  ngOnInit() {
  }

}
