import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'app/account.service';
import { MatSnackBar } from '@angular/material';

interface RadioButton {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;

  favoriteSeason: string;
  seasons: string[] = ['Iarna', 'Primavara', 'Vara', 'Toamna'];
  foods = [
    {value: 'Da', viewValue: 'Da'},
    {value: 'Nu', viewValue: 'Nu'}
  ];

  public trueFalse: RadioButton[] = [
    {
      value: 'True',
      viewValue: 'True',
    },
    {
      value: 'False',
      viewValue: 'False',
    }
  ];

  public yesNo: RadioButton[] = [
    {
      value: 'Yes',
      viewValue: 'Yes, true',
    },
    {
      value: 'No',
      viewValue: 'No, wrong',
    }
  ];

  public yesNoSometimes: RadioButton[] = [
    this.yesNo[0],
    {
      value: 'Sometimes',
      viewValue: 'Sometimes, it depends',
    },
    this.yesNo[1],
  ];

  public languages: RadioButton[] = [
    {
      value: 'English',
      viewValue: 'English',
    },
    {
      value: 'Turkish',
      viewValue: 'Turkish',
    },
    {
      value: 'Romanian',
      viewValue: 'Romanian',
    }
  ];

  public p1Answers: RadioButton[] = [
    {
      value: 'Finish your coffee and wish “the best of luck” (personal problems are not for the office!)',
      viewValue: 'Finish your coffee and wish “the best of luck” (personal problems are not for the office!)',
    },
    {
      value: 'Try to offer some helpful advice',
      viewValue: 'Try to offer some helpful advice',
    },
    {
      value: 'Tell your manager, it will improve your chances of a promotion',
      viewValue: 'Tell your manager, it will improve your chances of a promotion',
    },
    {
      value: 'Use it as an opportunity to build a relationship',
      viewValue: 'Use it as an opportunity to build a relationship',
    },
  ];

  public p2Answers: RadioButton[] = [
    {
      value: 'Talk to your partner about alternative ways of sending the documents quickly',
      viewValue: 'Talk to your partner about alternative ways of sending the documents quickly',
    },
    {
      value: 'Pass the partner to a colleague next to you who is less busy',
      viewValue: 'Pass the partner to a colleague next to you who is less busy',
    },
    {
      value: 'Call the partner back, you need to calm down and you are under pressure',
      viewValue: 'Call the partner back, you need to calm down and you are under pressure',
    },
    {
      value: 'Tell your partner to find a solution ',
      viewValue: 'Tell your partner to find a solution ',
    },
  ];

  public p3Answers: RadioButton[] = [
    {
      value: 'Start to update your CV, it’s looking bad',
      viewValue: 'Start to update your CV, it’s looking bad',
    },
    {
      value: 'Call your suppliers and threaten them with legal action',
      viewValue: 'Call your suppliers and threaten them with legal action',
    },
    {
      value: 'Check the warehouse hoping to find some misplaced stock',
      viewValue: 'Check the warehouse hoping to find some misplaced stock',
    },
    {
      value: 'Prepare a small group of colleagues and brain storm for solutions',
      viewValue: 'Prepare a small group of colleagues and brain storm for solutions',
    },
  ];

  public p4Answers: RadioButton[] = [
    {
      value: 'Celebrate',
      viewValue: 'Celebrate',
    },
    {
      value: 'Send an anonymous message with fake news about the competition',
      viewValue: 'Send an anonymous message with fake news about the competition',
    },
    {
      value: 'Form a small group to discuss if there is anything else you can do',
      viewValue: 'Form a small group to discuss if there is anything else you can do',
    },
    {
      value: 'Sit back and hope',
      viewValue: 'Sit back and hope',
    },
    {
      value: 'Consider offering a discount',
      viewValue: 'Consider offering a discount',
    },
  ];

  public p5Answers: RadioButton[] = [
    {
      value: 'Create a list with a couple of colleagues to structure the production of this new service',
      viewValue: 'Create a list with a couple of colleagues to structure the production of this new service',
    },
    {
      value: 'Refuse, you only offer what you know you can do well',
      viewValue: 'Refuse, you only offer what you know you can do well',
    },
    {
      value: 'Ask for a price that is so high that it would make it worth your while',
      viewValue: 'Ask for a price that is so high that it would make it worth your while',
    },
    {
      value: 'Subcontract the deal to the competition and earn 10% for nothing!',
      viewValue: 'Subcontract the deal to the competition and earn 10% for nothing!',
    },
  ];

  public f1Answers: RadioButton[] = [
    {
      value: '$91.51',
      viewValue: '$91.51',
    },
    {
      value: '$109.27',
      viewValue: '$109.27',
    },
    {
      value: '$291.26',
      viewValue: '$291.26',
    },
    {
      value: '$103.00',
      viewValue: '$103.00',
    },
  ];

  public f2Answers: RadioButton[] = [
    {
      value: 'The cash flows that occur earlier are more valuable than cash flows that occur later',
      viewValue: 'The cash flows that occur earlier are more valuable than cash flows that occur later',
    },
    {
      value: 'The cash flows that occur earlier are less valuable than cash flows that occur later',
      viewValue: 'The cash flows that occur earlier are less valuable than cash flows that occur later',
    },
    {
      value: 'The longer the time cash flows are invested, the more valuable they are in the future',
      viewValue: 'The longer the time cash flows are invested, the more valuable they are in the future',
    },
    {
      value: 'The future value of cash flows are always higher than the present value of the cash flows',
      viewValue: 'The future value of cash flows are always higher than the present value of the cash flows',
    },
  ];

  public f3Answers: RadioButton[] = [
    {
      value: 'Repayment of long-term debt',
      viewValue: 'Repayment of long-term debt',
    },
    {
      value: 'Issuance of equity',
      viewValue: 'Issuance of equity',
    },
    {
      value: 'Investments in businesses',
      viewValue: 'Investments in businesses',
    },
    {
      value: 'Payment of dividends',
      viewValue: 'Payment of dividends',
    },
  ];

  public r1Answers: RadioButton[] = [
    {
      value: 'Bored',
      viewValue: 'Bored',
    },
    {
      value: 'Relaxed',
      viewValue: 'Relaxed',
    },
    {
      value: 'Indifferent',
      viewValue: 'Indifferent',
    },
    {
      value: 'Content',
      viewValue: 'Content',
    },
  ];

  public r2Answers: RadioButton[] = [
    {
      value: 'Wait for somebody to start talking to you',
      viewValue: 'Wait for somebody to start talking to you',
    },
    {
      value: 'Check your mobile phone, you may have an important message',
      viewValue: 'Check your mobile phone, you may have an important message',
    },
    {
      value: 'Have an alcoholic drink for some courage',
      viewValue: 'Have an alcoholic drink for some courage',
    },
    {
      value: 'Chat to somebody at random',
      viewValue: 'Chat to somebody at random',
    },
    {
      value: 'Try to research more on who is there and who is more important',
      viewValue: 'Try to research more on who is there and who is more important',
    },
  ];

  public r3Answers: RadioButton[] = [
    {
      value: 'Wait for the client to contact you via your effective internet channels',
      viewValue: 'Wait for the client to contact you via your effective internet channels',
    },
    {
      value: 'Ask a friend in your network if they know somebody',
      viewValue: 'Ask a friend in your network if they know somebody',
    },
    {
      value: 'Have a coffee at the coffee shop next to the company every day for a month hoping to meet somebody',
      viewValue: 'Have a coffee at the coffee shop next to the company every day for a month hoping to meet somebody',
    },
    {
      value: 'Pick up the phone and call them',
      viewValue: 'Pick up the phone and call them',
    },
  ];

  public r4Answers: RadioButton[] = [
    {
      value: 'Celebrate, you earned it',
      viewValue: 'Celebrate, you earned it',
    },
    {
      value: 'Tell your friends and colleagues',
      viewValue: 'Tell your friends and colleagues',
    },
    {
      value: 'Feel pleased and then move on to the next job',
      viewValue: 'Feel pleased and then move on to the next job',
    },
    {
      value: 'Think, next time you could do better ',
      viewValue: 'Think, next time you could do better ',
    },
  ];

  public r5Answers: RadioButton[] = [
    {
      value: 'You should save money forget about it',
      viewValue: 'You should save money forget about it',
    },
    {
      value: 'Speak to your colleagues to see who is available',
      viewValue: 'Speak to your colleagues to see who is available',
    },
    {
      value: 'Try the new restaurant and invite the office',
      viewValue: 'Try the new restaurant and invite the office',
    },
    {
      value: 'Go to your local, they know you there and it’s home from home',
      viewValue: 'Go to your local, they know you there and it’s home from home',
    },
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private _accountServide: AccountService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      c1: ['', Validators.required],
      c2: ['', Validators.required],
      c3: ['', Validators.required],
      c4: ['', Validators.required],
      c5: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      cs1: ['', Validators.required],
    });

    this.thirdFormGroup = this._formBuilder.group({
      l1: ['', Validators.required],
      l2: ['', Validators.required],
      l3: ['', Validators.required],
      l4: ['', Validators.required],
      l5: ['', Validators.required],
    });

    this.fourthFormGroup = this._formBuilder.group({
      cl1: ['', Validators.required],
      cl2: ['', Validators.required],
      cl3: ['', Validators.required],
      cl4: ['', Validators.required],
      cl5: ['', Validators.required],
    });

    this.fifthFormGroup = this._formBuilder.group({
      p1: ['', Validators.required],
      p2: ['', Validators.required],
      p3: ['', Validators.required],
      p4: ['', Validators.required],
      p5: ['', Validators.required],
    });

    this.sixthFormGroup = this._formBuilder.group({
      f1: ['', Validators.required],
      f2: ['', Validators.required],
      f3: ['', Validators.required],
      f4: ['', Validators.required],
      f5: ['', Validators.required],
      f6: ['', Validators.required],
    });

    this.seventhFormGroup = this._formBuilder.group({
      a1: ['', Validators.required],
      a2: ['', Validators.required],
      a3: ['', Validators.required],
      a4: ['', Validators.required],
      a5: ['', Validators.required],
    });

    this.eighthFormGroup = this._formBuilder.group({
      r1: ['', Validators.required],
      r2: ['', Validators.required],
      r3: ['', Validators.required],
      r4: ['', Validators.required],
      r5: ['', Validators.required],
    });
  }

  saveFormData() {
    this._accountServide.saveFormData({
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
      ...this.thirdFormGroup.value,
      ...this.fourthFormGroup.value,
      ...this.fifthFormGroup.value,
      ...this.sixthFormGroup.value,
      ...this.seventhFormGroup.value,
      ...this.eighthFormGroup.value,
    })
      .then(() => {
        this.snackBar.open('Information was saved', 'Close',);
      })
      .catch((error) => {
        this.snackBar.open(error.message, 'Close',);
      })
  }
}
