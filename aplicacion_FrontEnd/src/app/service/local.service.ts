import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class LocalService {

    constructor() { }

    public saveDynamicObject(baseKey: string, dynamicKey: number, value: any) {
        const key = `${baseKey}_${dynamicKey}`;
        localStorage.setItem(key, JSON.stringify(value));
        localStorage.setItem('index', dynamicKey.toString());
    }
    
      public getDynamicObject(baseKey: string, dynamicKey: number) {
        const key = `${baseKey}_${dynamicKey}`;
        return JSON.parse(localStorage.getItem(key) as string);
    }
    
      public removeDynamicObject(baseKey: string, dynamicKey: number) {
        const key = `${baseKey}_${dynamicKey}`;
        localStorage.removeItem(key);
    }

}