import { Component } from '@angular/core';
import { LocalService } from '../service/local.service';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css',
  providers: [CurrencyPipe]
})
export class OrdenesComponent {

  ordenes: any[] = [];
  productos: any[] = [];
  acc: any = 0;

  constructor(private localStore: LocalService, private appComponent: AppComponent) {
    this.ordenes = [];
    const baseKey = `shopping_cart`;
    let index = 1;
    let ordenesString;

    while (true) {
      ordenesString = this.localStore.getDynamicObject(baseKey, index);
      console.log("indexx", index)
      // console.log(`ordenesString for ${baseKey}:`, ordenesString);
    
      if (!ordenesString) {
        break;
      }
    
      try {
        // console.log(`ordenesString before parsing:`, ordenesString);
        let ordenesObject = "";
        ordenesObject = JSON.parse(ordenesString);
        this.ordenes.push({key: `${baseKey}_${index}`, value: [
          ordenesObject
        ]});
        index++;
        // this.ordenes = this.ordenes.concat(ordenesObject);
        console.log(`ordenesObject:`, ordenesObject);
      } catch (error) {
        console.error(`Error parsing JSON: ${error}`);
      }
      this.appComponent.fixedFooter = false;
      
    }

    console.log(this.ordenes);
  }

  //Funcion para sumar dos numeros
  add(a: number, b: number=0): number {
    return a + b;
  }

  //Funcion para restar dos numeros
  subtract(a: number, b: number): number {
    return a - b;
  }

  //Funcion para multiplicar dos numeros
  multiply(a: number, b: number): number {
    return a * b;
  }
  
  //Funcion para dividir dos numeros
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  //Haciendo uso de la funcion sumar, para sumar cada precio de los productos y obtener el total
  getTotalPrice(products: any[]): number {
    return products.reduce((acc, producto) => this.add(acc, producto.precio), 0);
  }

  borrarOrdenes(){
    localStorage.clear();
    localStorage.setItem('index', '0');
  }
}
