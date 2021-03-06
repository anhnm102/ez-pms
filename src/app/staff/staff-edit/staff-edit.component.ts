import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.scss']
})
export class StaffEditComponent implements OnInit {
  submitForm: FormGroup;
  isLoading = false;
  isOwner = false;
  permissions = ['Low', 'Medium', 'High'];
  isEditMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private staffService: StaffService
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
      return this.staffService.update(data, data.id).subscribe(v => {
        console.log(v);
        this.cancel();
      });
    }

    // set default password = 1
    data.password = '1';
    return this.staffService.create(data).subscribe(v => {
      console.log(v);
      this.cancel();
    });
  }

  findById(id) {
    this.staffService.findById(id).subscribe(user => {
      const { _id: id, name, email, role, phone, permission } = <any>user;
      this.isOwner = role === 'Owner';

      this.submitForm.patchValue({
        id: id,
        name: name,
        email: email,
        permission: permission,
        phone: phone
      });
    });
  }

  private createForm() {
    this.submitForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      permission: [''],
      phone: ['']
    });
  }

  cancel() {
    this.router.navigate(['/staff']);
  }

  delete() {
    this.staffService.delete(this.submitForm.value.id).subscribe(rs => {
      this.cancel();
    });
  }
}

export interface UserDto {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  password?: string;
}
