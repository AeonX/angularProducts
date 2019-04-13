import { Component, OnChanges, Input } from '@angular/core';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
        console.log('starting', this.starWidth);
    }

}

