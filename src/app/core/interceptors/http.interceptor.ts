import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req)
  const _PLATFORM_ID = inject(PLATFORM_ID)
  if(isPlatformBrowser(_PLATFORM_ID)){
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}
  return next(req);
};
