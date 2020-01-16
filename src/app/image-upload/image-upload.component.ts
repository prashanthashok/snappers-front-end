import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from '../image-upload.service';
import { ImageUploadRequest } from '../models/Requests/ImageUploadRequest';
import { Image } from '../models/Entities/image';

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
    constructor(private imageUploadService: ImageUploadService) {}

    ngOnInit() {}

    uploadFile($event) {
        let file = $event.target.files[0];
        console.log($event);
        console.log(file);
        let imageRequest = new ImageUploadRequest();
        let image = new Image();
        image.file = file;
        imageRequest.image = image;
        let imageResponse = this.imageUploadService.uploadImage(imageRequest);
        imageResponse.subscribe(x => console.log(x));
    }
}
