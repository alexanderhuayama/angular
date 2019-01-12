import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';
import { OPERATION_CODE } from 'src/app/config/constants';

@Component({
  selector: 'app-maintenance-user-list-button-update',
  templateUrl: './maintenance-user-list-button-update.component.html'
})
export class MaintenanceUserListButtonUpdateComponent implements OnInit {
  @Input()
  form: FormGroup;

  @Input()
  id: string = ''; // Id del usuario

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  // Obtiene un usuario por id del servicio rest y muestra los datos recibidos en el formulario
  loadUserInForm(id: string) {
    this.userService.getUserById(id)
      .subscribe((user: User) => {
        this.form.patchValue({
          _id: user._id,
          name: user.name,
          email: user.email,
          photo: user.photo
        })

        this.form.patchValue({ typeAction: OPERATION_CODE.update });
      });
  }

}
