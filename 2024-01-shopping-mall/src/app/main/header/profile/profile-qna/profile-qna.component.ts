import { inject, Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-qna',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './profile-qna.component.html',
  styleUrl: './profile-qna.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileQnaComponent implements OnInit {
  router = inject(Router);
  qnaFormGroup!: FormGroup;

  isValid = false;

  ngOnInit(): void {
    this.qnaFormGroup = new FormGroup({
      type: new FormControl(),
      contents: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    this.isValid = this.qnaFormGroup.valid;

    if(this.isValid) {
      this.router.navigate(['/main/profile']);
    }
  }
}
