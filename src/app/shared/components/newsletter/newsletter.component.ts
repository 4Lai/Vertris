import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent {
  constructor(private formBuilder: FormBuilder) {}

  newsletterForm = this.formBuilder.group({
    email: ['', Validators.email],
  });

  onSubmit() {
    console.log(this.newsletterForm.controls);
  }
}
