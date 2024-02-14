import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService);


  return authService
  .verificarToke()
  .pipe(
    map((isAuthenticated) =>
      isAuthenticated ? true : router.createUrlTree(['auth', 'login'])
    ),
  
  );
}
