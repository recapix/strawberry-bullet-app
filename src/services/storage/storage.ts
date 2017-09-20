"use strict";
import { Injectable } from "@angular/core";
import { Platform } from 'ionic-angular';
import { NativeStorage } from "@ionic-native/native-storage";

@Injectable()
export class StorageService {
    // todo: make these configurable, have a look at
    // https://github.com/phenomnomnominal/angular-2-local-storage/
    private prefix = 'my_ng2_app';
    private storageType: 'sessionStorage' | 'localStorage' = 'sessionStorage';
    private storage: any;
    public isDesenv: boolean;

    constructor(private plt: Platform, private nativeStorage: NativeStorage) {
        if (this.checkSupport()) {
            this.storage = window[this.storageType];
            this.isDesenv = !this.plt.is('cordova');
        } else {
            throw new Error(`${this.storageType} is not supported in this browser.`);
        }
    }

    public get(key: string): Promise<{}> {
        if (this.isDesenv) {
            return new Promise<any>((resolve, reject) => {
                const item = this.storage ? this.storage.getItem(this.getKey(key)) : null;
                if (!item) {
                    reject("empty storage");
                }
                try {
                    resolve(JSON.parse(item));
                } catch (e) {
                    reject("error on serializable object");
                }
            });
        }
        return this.nativeStorage.getItem(this.getKey(key));
    }

    public set(key: string, value: any): Promise<{}> {
        if (value === undefined) {
            value = null;
        }
        if (this.isDesenv) {
            return new Promise<any>((resolve, reject) => {
                value = JSON.stringify(value);
                try {
                    if (this.storage) {
                        this.storage.setItem(this.getKey(key), value);
                        resolve(null);
                    }
                } catch (e) {
                    reject(`Storing to ${this.storageType} failed. Original message: ${e.message}`);
                }
            });
        }
        return this.nativeStorage.setItem(this.getKey(key), value);
    }

    public remove(key: string): Promise<{}> {
        if (this.isDesenv) {
            return new Promise<any>((resolve, reject) => {
                try {
                    this.storage.removeItem(this.getKey(key));
                    resolve(null)
                } catch (e) {
                    reject(`Clearing '${key}' from ${this.storageType} failed. Original message: ${e.message}`);
                }
            });
        }
        return this.nativeStorage.remove(this.getKey(key));
    }

    public clearAll() {
        if (this.isDesenv) {
            return new Promise<any>((resolve, reject) => {
                const prefixLength = this.prefix.length;
                for (const key in this.storage) {
                    if (key.substr(0, prefixLength) === this.prefix) {
                        try {
                            this.storage.removeItem(key);
                        } catch (e) {
                            reject(`Clearing everything from ${this.storageType} failed. Original message: ${e.message}`);
                        }
                    }
                }
                resolve(null);
            });
        }
        return new Promise<any>((resolve, reject) => {
            const prefixLength = this.prefix.length;
            var keys = this.nativeStorage.keys();
            for (const key in keys) {
                if (key.substr(0, prefixLength) === this.prefix) {
                    try {
                        this.nativeStorage.remove(key);
                    } catch (e) {
                        reject(`Clearing everything from ${this.storageType} failed. Original message: ${e.message}`);
                    }
                }
            }
            resolve(null);
        });
    }

    private getKey(key) {
        return `${this.prefix}.${key}`;
    }

    private checkSupport(): boolean {
        return this.storageType in window && window[this.storageType] !== null;
    }
}