import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminNgoUsers } from '../interfaces/admin-ngo-users';

@Injectable({
  providedIn: 'root'
})
export class AdminNgoUsersService {

  constructor(private http : HttpClient) { }

  fetchUsrs() {
    return this.http.get<AdminNgoUsers[]>("http://localhost:9090/api/ngo/get");
  }

  fetchUsersByStatus() {
    return this.http.get<AdminNgoUsers[]>("http://localhost:9090/api/ngo/getByStatus");
  }

  addNgoUser(ngoUser: AdminNgoUsers) {
    return this.http.post("http://localhost:9090/api/ngo/add",ngoUser);
  }

  updateNgoUser(ngoUser: AdminNgoUsers) {
    return this.http.put("http://localhost:9090/api/ngo/update", ngoUser);
  }

  deleteNgoUser(id : number) {
    return this.http.delete(`http://localhost:9090/api/ngo/delete/${id}`);
  }
}
