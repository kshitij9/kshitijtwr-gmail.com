import { Injectable, Inject } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class jsonPickerervice {

    constructor() { }

    getAllJsonFileNames(): any[] {
        return [
            {
                id: 1,
                name: 'messages'
            },
            {
                id: 2,
                name: 'messages2'
            },
            {
                id: 3,
                name: 'messages3'
            },
            {
                id: 4,
                name: 'messages3'
            },
            {
                id: 5,
                name: 'messages3'
            },
            {
                id: 6,
                name: 'messages3'
            }
        ]
    }

}

