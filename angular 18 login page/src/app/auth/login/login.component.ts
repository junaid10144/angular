import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MockupService } from '@app/services/mockup.service';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    CheckboxModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MockupService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  companies: any[] = [];
  selectedCompanyLogo: string = '/logo.jpeg';

  constructor(
    private fb: FormBuilder,
    private companyService: MockupService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      company: ['', Validators.required],
      remember: [false]
    });
  }


  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
      if (this.companies.length > 0) {
        // Select the first company by default
        this.loginForm.patchValue({ company: this.companies[0] });
        this.selectedCompanyLogo = this.companies[0].logo;
      }
    });

    this.loginForm.get('company')?.valueChanges.subscribe(value => {
      if (value) {
        this.selectedCompanyLogo = `${value.logo}`;
      }
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Handle form submission
      console.log(this.loginForm.value);
    }
  }

}
