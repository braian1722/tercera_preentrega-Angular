
import { DashboardComponent } from './dashboard.component';
import { AuthService } from '../../core/servicios/auth.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let authServiceSpy: jasmine.SpyObj<AuthService>;

    beforeEach(() => {
        const authSpy = jasmine.createSpyObj('AuthService', ['logOut']);
    
        TestBed.configureTestingModule({
        declarations: [DashboardComponent],
        providers: [
            { provide: AuthService, useValue: authSpy }
        ]
        });
    
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    });
    
    it('se creo el componente', () => {
        expect(component).toBeTruthy();
    });

    it('se tiene que llamar al logOut()', () => {
        component.logOut();
        expect(authServiceSpy.logOut).toHaveBeenCalled();
    });

});