import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private searchValueSubject = new BehaviorSubject<string>('');

    setSearchValue(value: string) {
        this.searchValueSubject.next(value);
    }

    getSearchValue () {
        return this.searchValueSubject.asObservable();
    }
}
