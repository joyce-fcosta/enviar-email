import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ServiceEmailService } from '../../services/service-email.service';
import { Email } from 'src/app/class/email';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  formEmail!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private serviceEmail: ServiceEmailService
  ) {}

  ngOnInit(): void {
    this.formEmail = this.formBuilder.group({
      titulo: [],
      remetente: [],
      body: [],
    });
  }
  enviar(): void {
    let email = new Email();
    email.Body = this.formEmail.get('body')?.value;
    email.Remetente = this.formEmail.get('remetente')?.value;
    email.Titulo = this.formEmail.get('titulo')?.value;

    this.serviceEmail.EnviarEmail(email).subscribe((result) => {
      alert('Email enviado com sucesso!!');
    });
  }
}
