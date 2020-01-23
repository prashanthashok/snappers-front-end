import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ImageUploadResponse } from '../models/Responses/ImageUploadResponse';
import { ImageUploadRequest } from '../models/Requests/ImageUploadRequest';
import { UPLOADIMAGEAPI } from '../constants';
import { Observable } from 'rxjs';

import uploadToBlob from './uploadToBlob';

@Injectable({
    providedIn: 'root',
})
export class ImageUploadService {
    constructor(private http: HttpClient) {}

    uploadImage(imageRequest: ImageUploadRequest): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };

        let payload = {
            token: 'PBmQY-kSfHmtXExKjiqnDQ',
            data: {
                result: {
                    image: File,
                },
                status: {
                    message: 'success',
                },
                _repeat: 5,
            },
        };

        const formData = new FormData();

        formData.append('image', imageRequest.image.file);

        console.log('form data');
        console.log(formData);

        //uploadToBlob(formData);

        return this.http.post<any>(UPLOADIMAGEAPI, formData, httpOptions);

        // return this.http.post<any>(
        //     'http://localhost:5000/api/images/upload',
        //     formData,
        //     httpOptions
        // );
    }

    callApi() {
        this.http.get('https://reqres.in/api/users?page=2').subscribe(data => {
            console.log(data);
        });
    }
}
