import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';

const routes: Routes = [
    { path: 'uploadimage', component: ImageUploadComponent },
    { path: 'criblisting', component: CribListingComponent },
    { path: '', redirectTo: '/uploadimage', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
