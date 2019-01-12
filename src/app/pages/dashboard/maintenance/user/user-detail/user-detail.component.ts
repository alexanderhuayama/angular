import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id: string = '';
  formUser: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.initializeForm();
    this.loadUser();
  }

  // Obtiene un usuario por id desde el servicio rest
  loadUser() {
    this.userService.getUserById(this.id)
      .subscribe(
        (user: User) => {
          this.formUser.patchValue({
            name: user.name,
            email: user.email,
            photo: user.photo,
            registerDate: this.dateFormat(user.registerDate),
            updateDate: this.dateFormat(user.updateDate)
          });
        },
        (response) => {
          console.log('FIND_ERROR', response);
        })
  }

  // Inicializa los datos del formulario
  initializeForm() {
    this.formUser = this.formBuilder.group({
      name: [''],
      email: [''],
      photo: [''],
      registerDate: [''],
      updateDate: ['']
    });
  }

  // Formate en la fecha en el formato ('dd/MM/yyyy HH:mm:ss')
  dateFormat(date) {
    let format = new DatePipe('en-US').transform(date, 'dd/MM/yyyy HH:mm:ss');
    return format;
  }

}
