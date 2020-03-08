import { Injectable, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { Phrase } from '../../models/phrase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  @Input()
  phrases$: Observable<Phrase[]>;

  constructor(private db: AngularFireDatabase) { }

  getByKey(key: string): AngularFireObject<Phrase> {
    return this.db.object<Phrase>('/phrases/' + key);
  }

  getPhraseList(count: number): AngularFireList<Phrase> {
    return this.db.list<Phrase>('/phrases', ref => ref
      .orderByKey()
      .limitToFirst(count));
  }

  search(searchText: string, page: number, pageSize: number): AngularFireList<Phrase> {
    return this.db.list<Phrase>('/phrases', ref => ref
      .orderByChild('text')
      .startAt(searchText)
      .endAt(searchText + '\uf8ff'));
  }

  addPhrase(phrase: Phrase): string {
    return this.db.list<Phrase>('/phrases').push(phrase).key;
  }
}
