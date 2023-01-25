import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Core/Guards/auth.guard';
import { AppLayoutComponent } from './Features/admin/layout/app.layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ui' },
  {
    path: 'layout',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./Features/admin/home/home.module').then((p) => p.HomeModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'departman',
        loadChildren: () =>
          import('./Features/admin/departman/departman.module').then(
            (p) => p.DepartmanModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'departmanrol',
        loadChildren: () =>
          import('./Features/admin/departman-rol/departman-rol.module').then(
            (p) => p.DepartmanRolModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'sube',
        loadChildren: () =>
          import('./Features/admin/sube/sube.module').then((p) => p.SubeModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'personel',
        loadChildren: () =>
          import('./Features/admin/Personel/personel.module').then(
            (p) => p.PersonelModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'ui',
    loadChildren: () => import('./Features/ui/ui.module').then((p) => p.UiModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
