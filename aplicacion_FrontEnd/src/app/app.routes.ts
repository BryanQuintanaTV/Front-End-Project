import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OrdenesComponent } from './ordenes/ordenes.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'restaurante', component: RestaurantComponent},
    {path: 'ordenes', component: OrdenesComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutesModule { }
