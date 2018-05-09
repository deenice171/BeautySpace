import { RouterModule, Routes, PreloadAllModules} from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component';
import {MainComponent} from './main/main.component';

    const appRoutes: Routes = [

        { path: '',
    //    redirectTo: '/',
    //    pathMatch: 'full'
    component:MainComponent,
      },
  {
         path: 'not-found',
       component: NotFoundComponent ,
      data: { title: 'Heroes List' }
       }, 
        {
         path: '**', 
        pathMatch:'full', 
        redirectTo: '/not-found' }
      ];

      export const AppRoutes = RouterModule.forRoot(appRoutes,
        { 
            enableTracing: true, 
            preloadingStrategy: PreloadAllModules,
            useHash: true
        }
    );