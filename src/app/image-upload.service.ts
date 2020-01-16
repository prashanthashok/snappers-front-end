import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ImageUploadResponse } from './models/responses/ImageUploadResponse';
import { ImageUploadRequest } from './models/Requests/ImageUploadRequest';
import { UPLOADIMAGEAPI } from './constants';
import { Observable } from 'rxjs';

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
        return this.http.post<any>(UPLOADIMAGEAPI, payload, httpOptions);
    }
}
