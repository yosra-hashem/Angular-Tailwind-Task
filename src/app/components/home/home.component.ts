import { Component } from '@angular/core';
import { StoreData } from 'src/app/viewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  storeInfo:StoreData;
  isImgShown:boolean;
  constructor(){
    this.storeInfo= new StoreData('Our Brand','./../../../assets/lorem.png',['Aswan','Cairo'])
    this.isImgShown=true
  }

  toggleImg(){
    this.isImgShown=!this.isImgShown;
  }
  
}
