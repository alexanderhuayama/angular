import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../../environments/environment';
import { API_PATH, isURL, DEFAULT_PHOTO } from '../../config/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userPath = API_PATH.user;

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(`${environment.endPoint}${this.userPath.list}`);
  }

  getUserById(id: string): Observable<User> {
    return this.httpClient
      .get<User>(`${environment.endPoint}${this.userPath.detail}/${id}`);
  }

  registerUser(user: User): Observable<any> {
    delete user._id;

    const validation = isURL(user.photo);

    if (validation) {
      user.photo = user.photo.trim();
    } else {
      // Default photo
      user.photo = DEFAULT_PHOTO;
    }

    return this.httpClient
      .post<any>(`${environment.endPoint}${this.userPath.add}`, user);
  }

  updateUser(user: User) {
    const validation = isURL(user.photo);

    if (validation) {
      user.photo = user.photo.trim();
    } else {
      // Default photo
      user.photo = DEFAULT_PHOTO;
    }

    return this.httpClient
      .put<any>(`${environment.endPoint}${this.userPath.update}/${user._id}`, user);
  }

  deleteUser(id: string) {
    return this.httpClient
      .delete<any>(`${environment.endPoint}${this.userPath.delete}/${id}`);
  }
}
