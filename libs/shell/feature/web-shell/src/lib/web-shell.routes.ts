import { Route } from "@angular/router";
import { LayoutComponent } from "@f1-predictions-angular/shell/ui/layout";
import { SigninComponent } from "@f1-predictions-angular/auth/feature/signin";

export const webShellRoutes: Route[] = [
    {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: '',
        redirectTo: '/signin',
        pathMatch: 'full',
      },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: async () => (await import('@f1-predictions-angular/home/feature/home-shell')).HomeShellModule
            }
        ]
    }
]