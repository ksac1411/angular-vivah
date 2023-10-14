import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
 import { User } from './user';
import { OTP } from './otp';
import { Contact } from './contact';
import { Logindata } from './logindata';
import { PhonebookItem } from './phonebookitems';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  
  
  private apiUrl = 'http://localhost:8080/api';
  isLoggedIn: any;

  constructor(private http: HttpClient) { }

//   sentOtp(User :User): Observable<any> {
//  return this.http.post(`${this.apiUrl}/sentOtp`, User);
//  }
sentOtp(logindata: Logindata): Observable<any> {
  return this.http.post(`${this.apiUrl}/sentOtp`, logindata);
}

  verifyOtp(otp: OTP): Observable<any> {
    // Log the OTP for debugging purposes
    console.log(otp, "service otp");
// Make an HTTP POST request to the server to verify the OTP
 return this.http.post(`${this.apiUrl}/verify`, otp);

  }
  signup(logindata: Logindata): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, logindata);
  }
  

  // signup(User :User): Observable<any> {
  
  //   return this.http.post(`${this.apiUrl}/register`, User);
  // }

  // login(user :User): Observable<any> {
  // console.log(User," service file")
  //   return this.http.post(`${this.apiUrl}/login`, user);
  // }
  login(logindata: Logindata): Observable<any> {
    console.log(logindata, ' service file');
    return this.http.post(`${this.apiUrl}/login`, logindata);
  }
  

  search(searchCriteria: User): Observable<User[]> {
    // Send the search criteria as JSON in the request body
    return this.http.post<User[]>(`${this.apiUrl}/search`, searchCriteria);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUser?id=${id}`);
  }
  getUserId(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/getUser`);
  }


  resetPassword(usernameOrEmail: string, password: string): Observable<any> {
    const resetPasswordUrl = `${this.apiUrl}/updateUser`; 
    const body = {
      usernameOrEmail,
      password
    };

    return this.http.post(resetPasswordUrl, body);
  }
  // updateUser(user:User): Observable<any> {
  //   // const url = `${this.apiUrl}/updateUser`; // Replace with the actual API endpoint for updating users
  //   return this.http.post(`${this.apiUrl}/updateUser`, user);

  
  // getUserByIdc(userId: number): Observable<any> {

  //   const url = `${this.apiUrl}/getUser?Id=${userId}`;

  //   return this.http.get(url);

  // }
  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/updateUser`;
    return this.http.post<User>(url, user);
  }
  

  feedback(feedback: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${this.apiUrl}/feedback`, feedback);
  }
 
  
  acceptMem(userid: number, accepted_mem: number): Observable<any> {
    const params = new HttpParams()
      .set('userid', userid.toString()) // Convert to string if not already
      .set('accepted_mem', accepted_mem.toString());
  
    return this.http.post(`${this.apiUrl}/accept`, {}, { params });
  }
  
  acceptedList(userid: number): Observable<any> {
    const params = new HttpParams()
      .set('userid', userid.toString()) // Convert to string if not already
  
    return this.http.post(`${this.apiUrl}/acceptedList`, {}, { params });
  }
  


  declineMem(userId: number, declined_mem: number): Observable<any> {
  const params = new HttpParams()
  .set('userId', userId.toString()) // Convert to string if not already
  .set('declined_mem', declined_mem.toString());

return this.http.post(`${this.apiUrl}/decline`, {}, { params });
}


 
blockMem(userId: number, blocked_mem: number): Observable<any> {
  const params = new HttpParams()
    .set('userId', userId.toString()) // Convert to string if not already
    .set('blocked_mem', blocked_mem.toString());

  return this.http.post(`${this.apiUrl}/blocked`, {}, { params });
}
getAcceptedMembers(userid: number): Observable<User[]> {
  const params = new HttpParams().set('userId', userid.toString());

  return this.http.post<User[]>(`${this.apiUrl}/accepteList`, null, { params });
}

getDeclinedMembers(userId: number): Observable<User[]> {
  const params = new HttpParams().set('userId', userId.toString());

  return this.http.post<User[]>(`${this.apiUrl}/declineList`, null, { params });
}

getBlockedMembers(userId: number): Observable<User[]> {
  const params = new HttpParams().set('userId', userId.toString());

  return this.http.post<User[]>(`${this.apiUrl}/blockList`, null, { params });
}

deleteUser(id: number): Observable<string> {
  const url = `${this.apiUrl}/deleteUser?Id=${id}`;
  return this.http.delete<string>(url);
}
getPhonebookList(userId: string): Observable<PhonebookItem[]> {
  const url = `${this.apiUrl}/phonebook?userId=${userId}`;
  return this.http.get<PhonebookItem[]>(url);
}


}