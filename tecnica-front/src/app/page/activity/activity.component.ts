import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from 'src/app/services/activity.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activityForm: FormGroup;
  timeForm: FormGroup;
  myModal: any;
  activityList = [];
  listTime = [];
  msgTime = "";
  description = "";
  totalTime = 0;
  @ViewChild('closeModal') closeModal: ElementRef;
  @ViewChild('closeModalSee') closeModalSee: ElementRef;
  @ViewChild('closeModalAdd') closeModalAdd: ElementRef;


  constructor(private formBuilder: FormBuilder, private activitySrv: ActivityService, private timeSrv: TimeService) { }

  ngOnInit(): void {
    this.initForm();
    this.dataInit();
  }
  dataInit() {
    this.timeSrv.total(localStorage.getItem('userId')).subscribe(a => {
      this.totalTime = a.total;
    })
    this.activitySrv.getAll(localStorage.getItem('userId')).subscribe(a => {
      this.activityList = a;
    })
  }

  initForm() {
    this.activityForm = this.formBuilder.group({
      description: ['', Validators.compose([Validators.required])]
    })
  }

  timeModal(id: number) {
    this.timeForm = this.formBuilder.group({
      activityId: [id, Validators.compose([Validators.required])],
      date: ['', Validators.compose([Validators.required])],
      hour: ['', Validators.compose([Validators.required])]
    })
  }

  initModalAdd(id: number) {
    this.timeModal(id);
  }

  initModalSee(time: any) {
    console.log(time)
    this.description = time.description
    this.timeSrv.byActivity(time.id).subscribe(a => {
      this.listTime = a;
    })
  }

  saveActivity() {
    const params = {
      ...this.activityForm.value,
      userId: localStorage.getItem('userId')
    }
    this.activitySrv.create(params).subscribe(a => {
      if(a.status) {
        this.closeModal.nativeElement.click()
      }
    })
  }

  saveTime() {
    const params = {
      ...this.timeForm.value
    }
    this.timeSrv.create(params).subscribe(a => {

      console.log(a.status)
      if(a.status) {
        this.closeModalAdd.nativeElement.click()
      } else {
        this.msgTime = a.msg;
      }
    })
  }

}
