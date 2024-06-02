// Ponerle valores de ejemplo en un arreglo para el model/producto.ts desde el service/producto.service.ts

import { Injectable } from '@angular/core';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Agua Fresca',
      precio: 40,
      descripcion: 'Agua fresca de frutas naturales, hechas con frutas de temporada.',
      imagen: 'assets/images/menu/aguasfrescas.webp'
    },
    {
      id: 2,
      nombre: 'Banana Split',
      precio: 80,
      //Genera la descripción del producto
      descripcion: 'Plátano, helado, crema batida, nuez y cereza.',
      imagen: 'assets/images/menu/bananasplit.webp'
    },
    {
      id: 3,
      nombre: 'Nieve En Cono',
      precio: 45,
      descripcion: 'Nieve en cono de galleta.',
      imagen: 'assets/images/menu/conochico.webp'
    },
    {
      id: 4,
      nombre: 'Tosti Nachos',
      precio: 50,
      descripcion: 'Nachos con queso, jalapeños y carne al gusto.',
      imagen: 'assets/images/menu/doritos.webp'
    },
    {
      id: 5,
      nombre: 'Elote en Vaso',
      precio: 25,
      descripcion: 'Elote en vaso con mayonesa, queso y chile.',
      imagen: 'assets/images/menu/elotevaso.webp'
    },
    {
      id: 6,
      nombre: 'Esquimal',
      precio: 30,
      descripcion: 'Helado de vainilla con chocolate y nuez.',
      imagen: 'assets/images/menu/esquimal.webp'
    }
    ,{
      id: 7,
      nombre: 'Fresas con Crema',
      precio: 60,
      descripcion: 'Fresas con crema y nuez.',
      imagen: 'assets/images/menu/fresasconcrema.webp'
    },
    {
      id: 8,
      nombre: 'Mangoneada',
      precio: 25,
      descripcion: 'Mangoneada con chile y chamoy.',
      imagen: 'assets/images/menu/mangoneadas.webp'
    },
    {
      id: 9,
      nombre: 'Nieve Vaso',
      precio: 45,
      descripcion: 'Nieve en vaso con galleta y nuez.',
      imagen: 'assets/images/menu/nievevasomedigran.webp'
    }
  ];

getProducto(id: number): Producto {
    return this.productos.find(producto => producto.id === id) || {} as Producto;
}
};