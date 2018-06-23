import { AddListComponent } from './../add-list/add-list.component';
import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/List';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public lists: List[] = [];

  constructor(private listServ: ListService) { }

  ngOnInit() {
    this.loadLists();
  }

  public loadLists() {
    this.listServ.getAllMsgs().subscribe(response => this.lists = response, )

  }
}
