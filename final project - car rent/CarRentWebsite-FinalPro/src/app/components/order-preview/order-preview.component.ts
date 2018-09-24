import { Component, OnInit, Input } from '@angular/core';
import { OrderAndType } from '../../models/orderAndType.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css']
})
export class OrderPreviewComponent implements OnInit {

    @Input() order:OrderAndType;
    @Input() closeDetailes:Function;

  constructor( private myOrderService: OrderService) { }

  ngOnInit() {
  }
  

}
