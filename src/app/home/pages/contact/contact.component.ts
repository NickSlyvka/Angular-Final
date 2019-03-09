import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  newTitle: string = 'Contact';

  name: string;
  email: string;
  message: string;

  constructor(private title: Title) { }

  ngOnInit() {    
    this.title.setTitle(this.newTitle);
  }

  processForm() {
    const send = `${this.name} is ${this.email} is ${this.message}`;
    alert(send);
  }


}
