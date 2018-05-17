import { RouterModule, Routes, PreloadAllModules} from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component';
import {MainComponent} from './main/main.component';
import { AboutComponent } from './about/about.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { GalleryComponent } from './gallery/gallery.component';




const appRoutes: Routes = [

        { path: '',
    //    redirectTo: '/',
    //    pathMatch: 'full'
    component:MainComponent,
      },
      
      { path: 'create-service',
      //    redirectTo: '/',
      //    pathMatch: 'full'
      component:CreateServiceComponent,
      data: { title: 'Create A New Service'}
        },

      { path: 'about',
      //    redirectTo: '/',
      //    pathMatch: 'full'
      component:AboutComponent,
      data: { title: 'About List'}
        },
        { path: 'gallery',
        //    redirectTo: '/',
        //    pathMatch: 'full'
        component:GalleryComponent,
        data: { title: 'Gallery'}
          },

  {
         path: 'not-found',
       component: NotFoundComponent ,
      data: { title: 'Not Found List' }
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