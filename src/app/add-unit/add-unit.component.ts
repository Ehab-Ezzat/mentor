import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import {AngularFirestore} from '@angular/fire/firestore';
@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.scss']
})
export class AddUnitComponent implements OnInit {
  add_contact = false;
  addUnitFG: FormGroup;
  addContactsFG: FormGroup;
  allContacts = [];
  combinedInfo;
  constructor(private fb: FormBuilder, private afs: AngularFirestore) {

    this.addUnitFG = this.fb.group({
      unit_name: [''],
      website: [''],
      type: [''],
      address: [''],
      emails: this.fb.array([
        this.fb.control('')
      ]),
      faxs: this.fb.array([
        this.fb.control('')
      ]),
      phones: this.fb.array([
        this.fb.control('')
      ]),
    });

    this.addContactsFG = this.fb.group({
      contact_name: [''],
      facebook: [''],
      title: [''],
      linkedin: [''],
      contact_emails: this.fb.array([
        this.fb.control('')
      ]),
      contact_phones: this.fb.array([
        this.fb.control('')
      ]),
    });
  }

  get phones() {
    return this.addUnitFG.get('phones') as FormArray;
  }

  addPhones() {
    this.phones.push(this.fb.control(''));
  }

  get emails() {
    return this.addUnitFG.get('emails') as FormArray;
  }

  addEmails() {
    this.emails.push(this.fb.control(''));
  }

  get faxs() {
    return this.addUnitFG.get('faxs') as FormArray;
  }

  addFaxs() {
    this.faxs.push(this.fb.control(''));
  }



  get contact_phones() {
    return this.addContactsFG.get('contact_phones') as FormArray;
  }

  addContactPhones() {
    this.contact_phones.push(this.fb.control(''));
  }

  get contact_emails() {
    return this.addContactsFG.get('contact_emails') as FormArray;
  }

  addContactEmails() {
    this.contact_emails.push(this.fb.control(''));
  }

  ngOnInit(): void {
  }

  addUnit(unit) {

    if (!this.add_contact) {
      this.combinedInfo = {
        unitInfo: unit.value,
      }

      let id = this.afs.createId();
      this.combinedInfo.date = new Date();
      this.afs.collection('units').doc(id).set(this.combinedInfo).then(e => {
        this.addUnitFG.reset();
        this.addContactsFG.reset();
        // document.getElementById('name').focus();
      }).catch(err => console.log(err));

    } else {
    this.combinedInfo = {
      unitInfo: unit.value,
      contactsInfo: this.allContacts
    }
    let id = this.afs.createId();
    this.combinedInfo.date = new Date();
    this.afs.collection('units').doc(id).set(this.combinedInfo).then(e => {
      this.addUnitFG.reset();
      this.addContactsFG.reset();
      // document.getElementById('name').focus();
    }).catch(err => console.log(err));
  }
    console.log(this.combinedInfo);
    this.phones.controls.length = 1;
    this.emails.controls.length = 1;
    this.faxs.controls.length = 1;
  }





  addContact(contact) {
    this.allContacts.push(contact.value);
    this.contact_phones.controls.length = 1;
    this.contact_emails.controls.length = 1;
    this.addContactsFG.reset();
    console.log(this.allContacts);
  }

  // mode_edit

}
