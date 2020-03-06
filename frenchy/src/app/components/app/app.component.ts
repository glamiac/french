import { Component, OnInit } from '@angular/core';
import { Phrase } from '../../models/phrase';
import { FirebaseService } from './../../services/firebase/firebase.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  phrases$: Observable<Phrase[]>;
  title = 'frenchy';
  phrase: Phrase = new Phrase();

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    const list = this.firebaseService.getPhraseList(10);
    this.phrases$ = list.snapshotChanges().pipe(
        tap(x => console.log(`getPhraseList returned: ${x.length} phrases.`)),
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() } )).reverse()
          )
      );
  }

  onSubmit() {
    const key = this.firebaseService.addPhrase(this.phrase);
    console.log(key);
  }
}
