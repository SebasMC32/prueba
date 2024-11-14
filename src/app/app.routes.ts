import { Routes } from '@angular/router';
import { CityComponent } from './components/city/city.component';
import path from 'path';
import { Component } from '@angular/core';
import { InsertarCityComponent } from './components/city/insertar/insertar.component';
import { InsertarFaunaComponent } from './components/fauna/insertar/insertar.component';
import { InsertarFloraComponent } from './components/flora/insertar/insertar.component';
import { FaunaComponent } from './components/fauna/fauna.component';
import { FloraComponent } from './components/flora/flora.component';
export const routes: Routes = [
    {
        path: 'ciudades',
        component: CityComponent,
        children: [
            {
                path: 'nuevo', component: InsertarCityComponent
            },
            {
                path: 'ediciones/:id', component: InsertarCityComponent
            }
        ],

    },
    {
        path: 'faunas',
        component: FaunaComponent,
        children: [
            {
                path: 'nuevo', component: InsertarFaunaComponent
            },
            {
                path: 'ediciones/:id', component: InsertarFaunaComponent
            }
        ],

    },
    {
        path: 'floras',
        component: FloraComponent,
        children: [
            {
                path: 'nuevo', component: InsertarFloraComponent
            },
            {
                path: 'ediciones/:id', component: InsertarFloraComponent
            }
        ],

    },
];
