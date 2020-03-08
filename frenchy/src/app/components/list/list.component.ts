import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase/firebase.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Phrase } from '../../models/phrase';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  phrases$: Observable<Phrase[]>;

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    const list = this.firebaseService.getPhraseList(10);
    this.phrases$ = list.snapshotChanges().pipe(
      tap(x => console.log(`getPhraseList returned: ${x.length} phrases.`)),
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })).reverse()
      )
    );
  }
}
