import { Directive, OnInit, Input } from '@angular/core';
import { DomSanitizer, ɵBROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser';
import { HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[image-bin]',
    providers: [ɵBROWSER_SANITIZATION_PROVIDERS]
})
export class ImageLoaderDirective implements OnInit {
    imageData: any;
    sanitizedImageData: any;
    @Input('image-bin') imageBinary: string;
    @HostBinding('src') src: string;

    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit(): void {
        this.imageData = 'data:image/png;base64,' + this.imageBinary;
        this.sanitizedImageData = this.sanitizer.bypassSecurityTrustUrl(this.imageData);
        this.src = this.sanitizedImageData;
    }
}
