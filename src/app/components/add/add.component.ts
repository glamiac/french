import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase/firebase.service';
import { Phrase } from '../../models/phrase';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  phrase: Phrase = new Phrase();

  constructor(
    private firebaseService: FirebaseService
  ) { }

  onSubmit() {
    const key = this.firebaseService.addPhrase(this.phrase);
    console.log(key);
  }
}
