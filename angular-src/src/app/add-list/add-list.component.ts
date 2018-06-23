import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  complexForm: FormGroup;
  public newList: List;
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  constructor(private listServ: ListService, fb: FormBuilder) {
    this.complexForm = fb.group({
      'sender' : [null, Validators.required],
      'message' : [null, Validators.required],
    })
  }

  ngOnInit() {
  this.newList = {
  sender: '',
  message: '',
  _id: ''
  }
}

  public onSubmit(form: any) {
    console.log(this.newList.message);
    this.listServ.addList(this.newList).subscribe(
      response => {

        if ( response.success === true) {
          this.addList.emit(this.newList);
        }
      },
    );
  }
}
