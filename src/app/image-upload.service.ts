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

    uploadImage(image: ImageUploadRequest): Observable<any> {
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
        return this.http.post<any>(UPLOADIMAGEAPI, payload, httpOptions);
    }
}
