import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SearchBarComponent } from '../../../components/search-bar/search-bar.component';
import { CourseListComponent } from '../../../components/course-list/course-list.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IToken } from '../../../interfaces/token.interface';
import { IUser } from '../../../interfaces/user.interface';
import { IGraphQLResponse } from '../../../interfaces/graphql.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        NavbarComponent,
        SearchBarComponent,
        CourseListComponent,
        FooterComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    providers: [
        Router,
        UserService,
    ]
})
export class HomeComponent implements OnInit {
    private user?: IUser;

    constructor (
        private router: Router,
        private userService: UserService,
    ) {}

    async ngOnInit(): Promise<void> {
        const token = JSON.parse(window.localStorage.getItem("token") || "{}") as IToken;
        
        if (!token) {
            return;
        }

        const result: IGraphQLResponse = await this.userService.getMe(token.access_token);
    
        if (result.errors) {
            alert(result.errors[0].message);
            return;
        } else {
            this.user = result.data.getMe;
            window.localStorage.setItem('user', JSON.stringify(this.user));
        }
    }
}
