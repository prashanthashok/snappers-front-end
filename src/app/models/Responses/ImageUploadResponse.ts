import { Image } from '../Entities/Image';

export class ImageUploadResponse {
    result: {
        images: Image[];
    };
    status: {
        code: string;
        message: string;
    };
}
