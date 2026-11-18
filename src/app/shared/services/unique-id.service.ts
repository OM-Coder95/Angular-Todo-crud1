import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  constructor() { }

  generateId() : string {
    return crypto.randomUUID();
  }
}
