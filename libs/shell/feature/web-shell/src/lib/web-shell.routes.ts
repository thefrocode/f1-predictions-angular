import { Route } from "@angular/router";
import { LayoutComponent } from "@f1-predictions-angular/shell/ui/layout";

export const webShellRoutes: Route[] = [
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