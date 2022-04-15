import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit {
  @Input() public init!: Client;
  @Output() public submitted: EventEmitter<Client> = new EventEmitter<Client>();
  public states: string[];
  public formClient!: FormGroup;
  constructor(private FormBuilder: FormBuilder) {
    this.states = Object.values(StateClient);
  }
  // on initialise ici les valeur du form
  ngOnInit(): void {
    this.formClient = this.FormBuilder.group({
      name: [this.init.name, [Validators.required, Validators.minLength(2)]],
      totalCaHt: [this.init.totalCaHt],
      tva: [this.init.tva],
      state: [this.init.state],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit() {
    this.submitted.emit(this.formClient.value);
  }
}
