import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormService } from 'src/app/services/form.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  public authUser: any;

  postData = {
    user_id: '',
    token: ''
  };

  constructor( private auth: AuthService,
    private formSerive: FormService,
    private toastService: ToastService
  ) {}

  public form = [
    {val: 'Fever',isChecked: false},
    {val: 'Cough',isChecked: false},
    {val: 'Aches',isChecked: false},
    {val: 'Headache',isChecked: false},
    {val: 'Sore throat',isChecked: false},
    {val: 'Runny Nose',isChecked: false},
    {val: 'Tiredness',isChecked: false},
    {val: 'Shortness of breath',isChecked: false}
  ];

  ngOnInit() {
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      this.formData();
    });
  }

      formData() {
        console.log(this.authUser);
        this.postData.user_id = this.authUser.user_id;
        this.postData.token = this.authUser.token;
        // if (this.postData.user_id && this.postData.token) {
        //   this.form.feedData(this.postData).subscribe(
        //     (res: any) => {
        //       this.feedSerive.changeFeedData(res.feedData);
        //     },
        //     (error: any) => {
        //       this.toastService.presentToast('Network Issue.');
        //     }
        //   );
        // }
      }
  }
