import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatRadioButton} from "@angular/material/radio";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatIcon} from "@angular/material/icon";
import {
  MatAnchor,
  MatButton,
  MatFabAnchor,
  MatFabButton,
  MatIconButton,
  MatMiniFabButton
} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {signInWithPopup,Auth, GoogleAuthProvider} from "@angular/fire/auth";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatRadioButton, MatButtonToggle, MatIcon, MatButton, MatMiniFabButton, MatDivider, MatFabButton, MatIconButton, MatAnchor, MatFabAnchor, RouterLink, MatCheckbox],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testTheme';
  currentUser: any; // Tạo biến currentUser để lưu thông tin người dùng hiện tại
  constructor(private auth: Auth) {} // Inject Auth vào constructor
  async login(){ // Tạo hàm login
    const credential = await signInWithPopup(this.auth, new GoogleAuthProvider());
    // Sử dụng signInWithPopup để đăng nhập bằng Google
    this.currentUser = credential.user; // Lưu thông tin người dùng vào biến currentUser
    console.log(this.currentUser); // Log ra thông tin người dùng
    const token = await credential.user.getIdToken(); // Lấy token của người dùng
    console.log(token); // Log ra token
  }


}
