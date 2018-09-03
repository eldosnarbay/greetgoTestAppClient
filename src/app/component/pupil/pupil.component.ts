import {Component, OnInit} from '@angular/core';
import {PupilService} from '../../service/pupil.service';
import {GroupService} from '../../service/group.service';
import {NgDatepickerComponent, NgDatepickerModule, DatepickerOptions} from 'ng2-datepicker';
declare let $: any;

@Component({
  selector: 'app-pupil',
  templateUrl: './pupil.component.html'
})
export class PupilComponent implements OnInit {
  pupils: any = [];
  groups: any = [];
  newPupil: any = {
    firstName: '',
    lastName: '',
    birthdate: new Date(),
    groupId: ''
  };
  birthdate: Date;

  constructor(private pupilService: PupilService,
              private groupService: GroupService) {
  }

  ngOnInit() {
    this.getPupils();
    this.getGroups();
  }

  getPupils() {
    this.pupils = [];
    this.pupilService.getPupils().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.pupils.push({
          id: data[i].id,
          firstName: data[i].firstName,
          lastName: data[i].lastName,
          groupId: data[i].groupId,
          groupName: data[i].groupName
        });
      }
    }, error => {
      console.log(error);
    });
  }

  getGroups() {
    this.groupService.getAll().subscribe(result => {
      for (let i = 0; i < result.length; i++) {
        this.groups.push({
          id: result[i].id,
          name: result[i].name
        });
      }
    });
  }

  delete(id: number) {
    if (!confirm('Вы действительно хотите удалить ученика')) {
      return;
    }

    this.pupilService.delete(id).subscribe(result => {
      this.getPupils();
    }, error => {
      this.getPupils();
    });
  }

  addPupil() {
    $('#addModal').modal('hide');
    if (!this.newPupil.firstName || this.newPupil.firstName === '' ) {
      alert('Enter the name');
      return;
    }

    this.pupilService.add(this.newPupil).subscribe(result => {
      this.getPupils();
      $('#addModal').modal('hide');
    }, error1 => {
      console.log(error1);
    });
  }


  callAddModal() {
    $('#addModal').appendTo('body').modal('show');
  }
}
