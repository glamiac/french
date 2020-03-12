import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase/firebase.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Phrase } from '../../models/phrase';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  isAnswerVisible: boolean;
  phrases$: Observable<Phrase[]>;

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.nextQuestion(null);
  }

  showAnswer() {
    this.isAnswerVisible = true;
  }

  nextQuestion(phrase: Phrase) {
    if (phrase) {
      this.firebaseService.updateQuizCount(phrase);
    }

    const list = this.firebaseService.getQuizQuestion(1);

    this.phrases$ = list.snapshotChanges().pipe(
      tap(x => console.log(`getQuizQuestion returned: ${x.length} phrases.`)),
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })).reverse()
      )
    );
  }
}
