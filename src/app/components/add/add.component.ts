import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  onSubmit() {
    this.firebaseService.addPhrase(this.phrase);
    this.router.navigate(['/list']);
     }
}
