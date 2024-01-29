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

  onCart(){
    this.btnClick.emit()
  }


}
