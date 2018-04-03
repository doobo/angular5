import { Injectable } from '@angular/core';

const canWriteToLocalStorage = () => {
    try {
        window.localStorage.setItem('_canWriteToLocalStorage', "1");
        window.localStorage.removeItem('_canWriteToLocalStorage');
        return true
    } catch (e) {
        return false
    }
};


@Injectable()
export class StorageService {

    localStorage:any;

    constructor() {
        if (typeof window !== 'undefined' && 'localStorage' in window && canWriteToLocalStorage()) {
            this.localStorage = localStorage;
        }else{
            this.localStorage = {};
        }
    }

    set(key:string, value:string):void {
        this.localStorage[key] = value;
    }

    get(key:string):string {
        return this.localStorage[key] || false;
    }

    setObject(key:string, value:any):void {
        this.localStorage[key] = JSON.stringify(value);
    }

    getObject<T>(key:string): any {
        let value: string = this.localStorage[key];

        if (value && value != "undefined" && value != "null") {
            return <T>JSON.parse(value);
        }

        return null;
    }

    remove(key:string):any {
        delete this.localStorage[key];
    }

    clear() { //一般不需要全清
        this.localStorage.clear();
    }
}
