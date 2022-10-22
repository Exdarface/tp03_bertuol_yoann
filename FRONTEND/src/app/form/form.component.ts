import { Component, OnInit } from '@angular/core';
import { Client } from '../core/model/client';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  clientVerified: Client = new Client();
  client: Client = new Client();

  constructor() {}

  ngOnInit(): void {}

  zipKeyPressed(event: KeyboardEvent) {
    if (!event.key.match(/\d/) || this.client.zip.length >= 5) {
      event.preventDefault();
    }
  }

  phoneKeyPressed(event: KeyboardEvent) {
    if (!event.key.match(/\d/)) {
      event.preventDefault();
    }
  }

  SubmitForm(): void {
    if (this.client.password !== this.client.confirmPassword) {
      alert(
        "le mot de passe n'est pas identique à la confirmation de mot de passe"
      );
      return;
    }
    this.clientVerified = { ...this.client };
  }
}
