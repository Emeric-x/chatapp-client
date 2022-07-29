import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../interfaces/chat';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  GetAllUsers(){
    return this.http.get(`https://aqueous-earth-78773.herokuapp.com/users`)
  }

  SignUpUser(sUser: User){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(sUser);
    return this.http.post(`https://aqueous-earth-78773.herokuapp.com/users/SignUp`, body, {'headers':headers})
  }

  SignInUser(sLogin: string, sPwd: string){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({
      login: sLogin,
      password: sPwd,
    });
    return this.http.post(`https://aqueous-earth-78773.herokuapp.com/users/SignIn`, body, {'headers':headers})
  }

  GetUserByLogin(sLogin: string){
    return this.http.get(`https://aqueous-earth-78773.herokuapp.com/users/GetByLogin/${sLogin}`)
  }

  NewChat(sChat: Chat){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(sChat);
    return this.http.post(`https://aqueous-earth-78773.herokuapp.com/chats`, body, {'headers':headers})
  }

  GetChatById(sId: string){
    return this.http.get(`https://aqueous-earth-78773.herokuapp.com/chats/${sId}`)
  }

  GetUserById(sId: string){
    return this.http.get(`https://aqueous-earth-78773.herokuapp.com/users/${sId}`)
  }

  SendMessage(sMessage: string, sAuthor: User, sChat_id: string){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({
      chat_id: sChat_id,
      message: sMessage,
      author: sAuthor
    });
    return this.http.post(`https://aqueous-earth-78773.herokuapp.com/chats/messages`, body, {'headers':headers})
  }

  ChatAlreadyCreated(sChat: Chat, sUser_chats: any){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({
      chat: sChat,
      user_chats: sUser_chats
    });
    return this.http.post(`https://aqueous-earth-78773.herokuapp.com/chats/ChatAlreadyCreated`, body, {'headers':headers})
  }
}
