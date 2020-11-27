import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'insert-proveedor',
    loadChildren: () => import('./insert-proveedor/insert-proveedor.module').then(m => m.InsertProveedorPageModule)
  },
  {
    path: 'insert-rh',
    loadChildren: () => import('./insert-rh/insert-rh.module').then(m => m.InsertRHPageModule)
  },
  {
    path: 'insert-equipo',
    loadChildren: () => import('./insert-equipo/insert-equipo.module').then(m => m.InsertEquipoPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'insert-orden',
    loadChildren: () => import('./insert-orden/insert-orden.module').then(m => m.InsertOrdenPageModule)
  },
  {
    path: 'ordentrabajo',
    loadChildren: () => import('./ordentrabajo/ordentrabajo.module').then(m => m.OrdentrabajoPageModule)
  },
  {
    path: 'edit-orden',
    loadChildren: () => import('./edit-orden/edit-orden.module').then( m => m.EditOrdenPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
