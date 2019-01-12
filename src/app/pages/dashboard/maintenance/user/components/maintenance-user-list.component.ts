import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
declare var $: any;

@Component({
  selector: 'app-maintenance-user-list',
  templateUrl: './maintenance-user-list.component.html',
  styles: []
})
export class MaintenanceUserListComponent implements OnInit {
  @Input()
  users: User[] = [] // Lista de usuarios

  @Output()
  updateListUsers = new EventEmitter();

  @Input()
  form: FormGroup;

  idUserDelete: string = '';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  // Abre el modal de confirmación para eliminar un usuario
  openModal(id: string) {
    this.idUserDelete = id;
    $('#modal-delete-user').modal('show');
  }

  // Elimina un usuario del servicio rest
  deleteUser(id: string) {
    this.userService.deleteUser(id)
      .subscribe(
        result => {
          // console.log('RESULT_DELETE', result);

          $('#modal-delete-user').modal('hide');
          this.updateListUsers.emit(true);
        },
        response => {
          console.log('ERROR_DELETE', response.error.message);
        });
  }


}
