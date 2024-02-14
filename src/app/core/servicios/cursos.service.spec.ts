import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CursosService } from './cursos.service';

import { Cursos } from './cursos.service';
import { environment } from '../../../enviroments/enviroment';


describe('CursosService', () => {
  let service: CursosService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CursosService]
    });

    service = TestBed.inject(CursosService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('debe ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('tendría que recibir los cursos', () => {
    const dummyCursos: Cursos[] = [
      { id: 1, name: 'Matemáticas', turno: 'Mañana', diasCursada: 'Lunes a Viernes', fechaInicio: new Date() },
      { id: 2, name: 'Lengua', turno: 'Tarde', diasCursada: 'Lunes y Miércoles', fechaInicio: new Date() }
    ];

    service.getCursos().subscribe(cursos => {
      expect(cursos).toEqual(dummyCursos);
    });
    const req = httpTestingController.expectOne(`${environment.apiURL}/cursos`);
    req.flush(dummyCursos);
  });


});

