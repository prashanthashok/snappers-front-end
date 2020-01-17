import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppBootstrapModule } from './app-bootstrap.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './loader/loader.component';
import { ImageUploadService } from './services/image-upload.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ImageUploadComponent,
        LoginComponent,
        LoaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppBootstrapModule,
        HttpClientModule,
    ],
    providers: [
        ImageUploadService,
        LoaderService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
