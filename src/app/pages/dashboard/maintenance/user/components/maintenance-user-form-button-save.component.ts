import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';
import { OPERATION_CODE } from 'src/app/config/constants';

@Component({
  selector: 'app-maintenance-user-form-button-save',
  templateUrl: './maintenance-user-form-button-save.component.html',
  styles: []
})
export class MaintenanceUserFormButtonSaveComponent implements OnInit {
  @Output()
  updateListUsers = new EventEmitter();

  @Input()
  form: FormGroup;

  operation = OPERATION_CODE;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  // Borra los datos del los input del formulario
  resetForm() {
    this.form.patchValue({
      _id: '',
      name: '',
      email: '',
      photo: '',
      typeAction: OPERATION_CODE.register
    });
  }

  // Crea un nuevo usuario mediante el servicio rest
  registerUser() {
    const user = this.form.value;

    this.userService.registerUser(user)
      .subscribe(
        result => {
          // console.log('RESULT_REGISTER', result);

          this.resetForm();

          this.updateListUsers.emit(true);
        },
        response => {
          console.log('ERROR_REGISTER', response.error.message);
        });
  }

  // Guarda los datos del usuario y los actualiza en el servicio rest
  updateUser() {
    const user = this.form.value;

    this.userService.updateUser(user)
      .subscribe(
        result => {
          // console.log('RESULT_UPDATE', result);
          this.updateListUsers.emit(true);
          this.cancelUpdate();
        },
        response => {
          console.log('ERROR_UPDATE', response.error);
        });
  }

  // Cancela la actualización y muestra el botón de registro de usuario
  cancelUpdate() {
    this.resetForm();
    this.form.patchValue({ typeAction: this.operation.register });
  }
}
