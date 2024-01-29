import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecomm-ph3';

  // I have one item what all things are required from backed -> name, price , id , img, desc , quantity , sellerName

  // single = {
  //   name: 'Hair Mask WoW',
  //   price: 250,
  //   id: 1,
  //   img: 'https://m.media-amazon.com/images/I/81YImZJsmIS._SX679_.jpg',
  //   desc: 'This is an hair mask, Very good product.',
  //   quantity: 20,
  //   sellerName: 'Yadav Ji Ka Beta',
  // }


  items = [
    {
      name: 'Hair Mask WoW',
      price: 250,
      id: 1,
      img: 'https://m.media-amazon.com/images/I/81YImZJsmIS._SX679_.jpg',
      desc: 'This is an hair mask, Very good product.',
      quantity: 20,
      sellerName: 'Yadav Ji Ka Beta',
    },
    {
      name: 'Hair Mask WoW',
      price: 250,
      id: 2,
      img: 'https://m.media-amazon.com/images/I/81YImZJsmIS._SX679_.jpg',
      desc: 'This is an hair mask, Very good product.',
      quantity: 20,
      sellerName: 'Yadav Ji Ka Beta',
    },
    {
      name: 'Hair Mask WoW',
      price: 250,
      id: 3,
      img: 'https://m.media-amazon.com/images/I/81YImZJsmIS._SX679_.jpg',
      desc: 'This is an hair mask, Very good product.',
      quantity: 20,
      sellerName: 'Yadav Ji Ka Beta',
    },
    {
      name: 'Hair Mask WoW',
      price: 250,
      id: 4,
      img: 'https://m.media-amazon.com/images/I/81YImZJsmIS._SX679_.jpg',
      desc: 'This is an hair mask, Very good product.',
      quantity: 20,
      sellerName: 'Yadav Ji Ka Beta',
    },
    {
      name: 'Hair Mask WoW',
      price: 250,
      id: 5,
      img: 'https://m.media-amazon.com/images/I/81YImZJsmIS._SX679_.jpg',
      desc: 'This is an hair mask, Very good product.',
      quantity: 20,
      sellerName: 'Yadav Ji Ka Beta',
    },
    {
      name: 'Hair Mask WoW',
      price: 250,
      id: 6,
      img: 'https://m.media-amazon.com/images/I/81YImZJsmIS._SX679_.jpg',
      desc: 'This is an hair mask, Very good product.',
      quantity: 20,
      sellerName: 'Yadav Ji Ka Beta',
    },
    {
      name: 'Hair Mask WoW',
      price: 250,
      id: 7,
      img: 'https://m.media-amazon.com/images/I/81YImZJsmIS._SX679_.jpg',
      desc: 'This is an hair mask, Very good product.',
      quantity: 20,
      sellerName: 'Yadav Ji Ka Beta',
    },
    {
      name: 'Hair Mask WoW',
      price: 250,
      id: 8,
      img: 'https://m.media-amazon.com/images/I/81YImZJsmIS._SX679_.jpg',
      desc: 'This is an hair mask, Very good product.',
      quantity: 20,
      sellerName: 'Yadav Ji Ka Beta',
    },
    {
      name: 'Hair Mask WoW',
      price: 250,
      id: 9,
      img: 'https://m.media-amazon.com/images/I/81YImZJsmIS._SX679_.jpg',
      desc: 'This is an hair mask, Very good product.',
      quantity: 20,
      sellerName: 'Yadav Ji Ka Beta',
    },
  ];
}
