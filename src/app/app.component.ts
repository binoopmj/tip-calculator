import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = signal(0);
  tipForm: FormGroup;
  tipPerPerson: number | null = null;
  totalPerPerson: number | null = null;
  isFivePercentSelected: boolean = false;
  constructor(private fb: FormBuilder) {
    this.tipForm = this.fb.group({
      total: ['', [Validators.required, Validators.min(0.01)]],
      tipPercentage: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      people: ['', [Validators.required, Validators.min(1)]]
    });
  }

  calculateTip() {
    if (this.tipForm.valid) {
      const total = this.tipForm.get('total')?.value;
      const tipPercentage = this.tipForm.get('tipPercentage')?.value;
      const people = this.tipForm.get('people')?.value;

      const tipAmount = (total * tipPercentage) / 100;
      this.tipPerPerson = tipAmount / people;
      this.totalPerPerson = (total / people) + this.tipPerPerson;
    }
  }
  setPercentTip(percentage:number) {
    this.tipForm.patchValue({ tipPercentage: percentage });
    this.calculateTip();
  }
  increment() {
    this.counter.set(this.counter() + 1); 
  }

  decrement() {
    this.counter.set(this.counter() - 1); 
  }
}