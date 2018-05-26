import { Directive, OnInit, Input } from '@angular/core';
import { DomSanitizer, ɵBROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser';

@Directive({
    selector: '[image-bin]',
    providers: [ɵBROWSER_SANITIZATION_PROVIDERS],
    host: {
        '[src]': 'sanitizedImageData'
    }
})
export class ImageLoaderDirective implements OnInit {
    imageData: any;
    sanitizedImageData: any;
    @Input('image-bin') imageBinary: string;

    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit(): void {
        this.imageData = 'data:image/png;base64,' + this.imageBinary;
        this.sanitizedImageData = this.sanitizer.bypassSecurityTrustUrl(this.imageData);
    }
}