import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OPERATION_CODE } from 'src/app/config/constants';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users: User[] = [];  // Lista de usuarios
  formUser: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.loadUsers()
  }

  // Obtiene la lista de todos los usuarios
  loadUsers() {
    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  // Recibe la lista de usuarios actualizados
  refreshUsers(succes: boolean) {
    if (succes)
      this.loadUsers();
  }

  // Inicializa los datos del formulario
  initializeForm() {
    this.formUser = this.formBuilder.group({
      _id: [''],
      name: ['', Validators.compose([
        Validators.required,
        Validators.nullValidator,
        Validators.minLength(3)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.nullValidator
      ])],
      photo: ['', Validators.compose([
        Validators.required,
        Validators.nullValidator
      ])],
      typeAction: [
        OPERATION_CODE.register
      ]
    });
  }

}
