import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from '../services/image-upload.service';
import { ImageUploadRequest } from '../models/Requests/ImageUploadRequest';
import { Image } from '../models/Entities/image';
import {Router} from "@angular/router"

class ImageSnippet {
    constructor(public src: string, public file: File) {}
}

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
    constructor(private imageUploadService: ImageUploadService,private router: Router) {}

    selectedFile: ImageSnippet;
    ngOnInit() {}

    callApi() {
        this.imageUploadService.callApi();
    }

    uploadFile($event) {
        let file = $event.target.files[0];
        const reader = new FileReader();

        let imageRequest = new ImageUploadRequest();
        let image = new Image();
        image.file = file;
        imageRequest.image = image;

        reader.addEventListener('load', (event: any) => {
            this.selectedFile = new ImageSnippet(event.target.result, file);
            console.log('selected file');
            console.log(this.selectedFile);
            this.imageUploadService.uploadImage(imageRequest).subscribe(
                res => {
                    console.log(res);
                },
                err => {}
            );
        });

        reader.readAsArrayBuffer(file);
        this.router.navigate(['/criblisting']);
        // console.log($event);
        // console.log(file);
        // let imageRequest = new ImageUploadRequest();
        // let image = new Image();
        // image.file = file;
        // imageRequest.image = image;
        // let imageResponse = this.imageUploadService.uploadImage(imageRequest);
        // imageResponse.subscribe(x => console.log(x));

    }
}
