import { auth } from 'firebase/app';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['tabs/tab6']);
const redirectLoggedInTohome = () => redirectLoggedInTo(['tabs/tab1']);


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
        canActivate:[AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin}
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule),
        canActivate:[AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin}
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule),
        canActivate:[AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin}
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then(m => m.Tab5PageModule),
        canActivate:[AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin}
      },
      {
        path: 'tab6',
        loadChildren: () => import('../tab6/tab6.module').then(m => m.Tab6PageModule),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInTohome }
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
