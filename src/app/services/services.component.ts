import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: any[] = []; // Variable para almacenar los datos de servicios

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.productsService.getProducts().subscribe(
      (servicesData: any) => {
        this.services = servicesData;
      },
      (error: any) => {
        console.error('Error al obtener los datos de servicios:', error);
      }
    );
  }
}
