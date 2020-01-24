import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageUploadService } from '../services/image-upload.service';
import { ImageUploadRequest } from '../models/Requests/ImageUploadRequest';
import { Image } from '../models/Entities/Image';
import { XhrFactory } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

class ImageSnippet {
    constructor(public src: string, public file: File) {}
}

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit, OnDestroy {
    constructor(
        private imageUploadService: ImageUploadService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        //this.filesToUpload = [];
    }

    selectedFile: ImageSnippet;
    imageUri: string;
    propertySearchResponse;
    propertySearchResponse$;

    subscriptions: Subscription[] = [];

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

        let uploadResponse$ = this.imageUploadService.uploadToBlob(image.file);
        //this.subscriptions.push(
        uploadResponse$.subscribe(res => {
            if (res.status === 'success') {
                this.imageUri = res.imageUri;
                //send image uri to VJ's backend
                this.propertySearchResponse$ = this.imageUploadService.searchProperty(
                    this.imageUri
                );
            }
        });
        //);

        //this.subscriptions.push(
        this.propertySearchResponse$.subscribe(response => {
            this.propertySearchResponse = response;
            if (!this.propertySearchResponse.IsHouse) {
                //route to property not found page
                this.router.navigate(['/notfound']);
            }
            console.log(response);
        });
        //);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
    // reader.addEventListener('load', (event: any) => {
    //     this.selectedFile = new ImageSnippet(event.target.result, file);
    //     console.log('selected file');
    //     console.log(this.selectedFile);
    //     this.imageUploadService.uploadImage(imageRequest).subscribe(
    //         res => {
    //             console.log(res);
    //         },
    //         err => {}
    //     );
    // });

    // reader.readAsArrayBuffer(file);
}

//filesToUpload: Array<File>;

// fileChangeEvent(fileInput: any) {
//     this.filesToUpload = <Array<File>>fileInput.target.files;
//     this.upload();
// }

// makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
//     return new Promise((resolve, reject) => {
//         var formData: any = new FormData();
//         var xhr = new XMLHttpRequest();
//         for (var i = 0; i < files.length; i++) {
//             formData.append('image', files[i], files[i].name);
//         }
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState == 4) {
//                 if (xhr.status == 200) {
//                     resolve(JSON.parse(xhr.response));
//                 } else {
//                     reject(xhr.response);
//                 }
//             }
//         };
//         xhr.open('POST', url, true);
//         xhr.send(formData);
//     });
// }

// upload() {
//     this.makeFileRequest(
//         'http://localhost:5000/api/images/upload',
//         [],
//         this.filesToUpload
//     ).then(
//         result => {
//             console.log(result);
//         },
//         error => {
//             console.error(error);
//         }
//     );
// }
