import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { share } from 'rxjs/internal/operators/share';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private api: Api) { }

  upload(fileData: any) {
    return this.api.post('upload', fileData).pipe(share());;
  }

  getImage(imageName: any) {
      const url = `upload?name=${imageName}`
      return this.api.get(url).pipe(share());
  }
}
