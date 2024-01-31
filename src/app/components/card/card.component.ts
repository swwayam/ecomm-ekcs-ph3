import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() name !: any
  @Input() image !: any
  @Input() desc !: any
  @Input() id !: any
  @Input() sellerName !: any
  @Input() price !: any

  @Output() btnClick = new EventEmitter()
  @Output() removeBtnClick = new EventEmitter()

  isAddToCart = true

  onCart(){
    this.isAddToCart = false
    this.btnClick.emit()
  }

  onRemove(){
    this.isAddToCart = true
    this.removeBtnClick.emit()
  }

}
