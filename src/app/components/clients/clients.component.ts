import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  	clients:Client[];
  	//clients:any[];
    totalOwed:number;

    constructor(public clientService:ClientService/*, public db: AngularFireDatabase */) { 
    	/*db.list('/clients')
    	     .valueChanges().subscribe(clients => { 
    	      this.clients = clients;
    	console.log(this.clients);
    	      });*/

      
    }

    ngOnInit() {
    	this.clientService.getClients().subscribe(clients => {
    	this.clients = clients;
    	console.log(this.clients);
      this.getTotalOwed();
      });

    }

    getTotalOwed(){
    let total = 0;
    for(let i=0; i < this.clients.length; i++){
      // total += parseFloat(this.clients[i].balance);
      }
    this.totalOwed = total;
    }
}
