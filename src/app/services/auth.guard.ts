import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, Router, RouterStateSnapshot,UrlTree} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        public servis: DataService,
        public router: Router
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        var yetkiler = route.data["yetkiler"] as Array<string>;

        if (!this.servis.OturumKontrol()) {
            this.router.navigate(['/giris'], {queryParams:{returnUrl:state.url} });
        }
        var sonuc: Boolean = false;
        if (yetkiler) {
            sonuc = this.servis.YetkiKontrol(yetkiler);
        }
        if (!sonuc) {
            this.router.navigate(['/giris'], {queryParams: {returnUrl:state.url}});
        }
        return true;
    }
}