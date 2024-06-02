import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { Producto } from '../model/producto.model';
import { ProductoService } from '../service/producto.service';
import { LocalService } from '../service/local.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css',
  providers: [CurrencyPipe]
})
export class RestaurantComponent {

  productos: Producto[] = [];
  cart: Producto[] = [];
  total: number = 0;

  constructor(private productoService: ProductoService, private localStore: LocalService, private appComponent: AppComponent) {
    this.productos = this.productoService.productos;
    this.appComponent.fixedFooter = false;
  }

  //Agregar productos al carrito
  addToCart(productId: number) {
    const producto = this.productoService.getProducto(productId);
    if(producto) {
      this.cart.push(producto);
      this.calculateTotal();
    }
  }

  //Remover productos del carrito
  removeFromCart(productId: number) {
    const index = this.cart.findIndex(producto => producto.id === productId);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.calculateTotal();
    }
  }

  removeAllFromCart() {
    this.cart = [];
    this.calculateTotal();
  }

  cancelOrder(){
    this.removeAllFromCart();
  }

  //Calcular el total de la compra
  calculateTotal(){
    this.total = this.cart.reduce((sum, producto) => sum + producto.precio, 0);
  }

  //Hacer el checkout de la compra
  checkout(cart: Producto[]){
    let jsonObject = JSON.stringify(cart);
    
    //Almacenar la compra en local storage
    let index = localStorage.getItem('index');
    let baseKey = 'shopping_cart';
    this.localStore.saveDynamicObject(baseKey,  Number(index) + 1, jsonObject);
    this.removeAllFromCart();
    alert('Compra realizada con éxito');
  }

}
