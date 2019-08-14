import {Injectable} from '@angular/core';
import {LoginServiceClientService} from "./login-service-client.service";

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {

  constructor(private loginService: LoginServiceClientService) {
  }

  register = (user) =>
    fetch(`http://localhost:8080/register`,
      {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
        },
      }
    )
      .then((res) => {
        return res.text()
      })
      .then((text) => text.length ? this.loginService.addFetchedUserToSessionStorage(text) : null);

  registerStudent = (student) =>
    fetch(`http://localhost:8080/registerStudent`,{
      method: 'POST',
      body: JSON.stringify(student),
      headers: {
        'content-type' : 'application/json'
      },
    }).then();

  registerFaculty = (faculty) =>
    fetch(`http://localhost:8080/registerFaculty`,{
      method: 'POST',
      body: JSON.stringify(faculty),
      headers: {
        'content-type' : 'application/json'
      },
    }).then();
}
