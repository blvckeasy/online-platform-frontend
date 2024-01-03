import { Injectable, KeyValueDiffers } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private searchTermSubject = new BehaviorSubject<string>('');
    searchTerm$ = this.searchTermSubject.asObservable();

    updateSearchTerm(value: string) {
        this.searchTermSubject.next(value);
    }
}
