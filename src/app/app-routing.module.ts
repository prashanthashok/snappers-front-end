import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
    { path: 'uploadimage', component: ImageUploadComponent },
    { path: '', redirectTo: '/uploadimage', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
