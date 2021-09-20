import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormControl, Validators} from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms'
import {Issue} from '../../models/issue';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../dialogs/add/add.dialog.html',
  styleUrls: ['../../dialogs/add/add.dialog.css']
})

export class AddDialogComponent {
  options: FormGroup;
  hideRequiredControl = new FormControl(true);
  
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: Issue,
              public dataService: DataService) {
                this.options = fb.group({
                  hideRequired!: this.hideRequiredControl,
                  
                });
               }
              

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addIssue(this.data);
  }
  checked = false;
  panelOpenState = false;
  selected = 'option2';

 
  


}


