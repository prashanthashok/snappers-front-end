import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppBootstrapModule } from './app-bootstrap.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './loader/loader.component';
import { ImageUploadService } from './services/image-upload.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribsService } from './services/cribs.service';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ImageUploadComponent,
        LoginComponent,
        LoaderComponent,
        CribListingComponent,
        CribCardComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
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
        CribsService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
