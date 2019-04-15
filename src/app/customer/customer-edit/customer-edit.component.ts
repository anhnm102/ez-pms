import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  submitForm: FormGroup;
  isLoading = false;
  isEditMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(v => {
      if (v && v.id) {
        this.isEditMode = true;
        this.findById(v.id);
      }
    });
  }

  submit() {
    const data = this.submitForm.value;

    if (this.isEditMode) {
      return this.customerService.update(data, data.id).subscribe(v => {
        console.log(v);
        this.cancel();
      });
    }

    return this.customerService.create(data).subscribe(v => {
      console.log(v);
      this.cancel();
    });
  }

  findById(id) {
    this.customerService.findById(id).subscribe(customer => {
      const { _id: id, name, email, phone } = <any>customer;

      this.submitForm.patchValue({
        id: id,
        name: name,
        email: email,
        phone: phone
      });
    });
  }

  private createForm() {
    this.submitForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }

  cancel() {
    this.router.navigate(['/customer']);
  }

  delete() {
    this.customerService.delete(this.submitForm.value.id).subscribe(rs => {
      this.cancel();
    });
  }
}
