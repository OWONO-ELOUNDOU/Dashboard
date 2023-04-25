import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  Orders: any[] = [];

  constructor(
    private apiService: ServicesService
  ) { }

  NgOnInit(): void{
    this.apiService.getOrders().pipe(map((res) => {
      const orders = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          orders.push({...res[key], id: key})
        }
      }
      return orders;
    }))
    .subscribe((orders) => {
      console.log(orders);
      this.Orders = orders;
      console.log(this.Orders.length);
    })
  }
}
