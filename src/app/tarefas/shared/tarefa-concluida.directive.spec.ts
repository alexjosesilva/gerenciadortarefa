import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { TarefaConcluidaDirective } from './tarefa-concluida.directive';

describe('TarefaConcluidaDirective', () => {
  it('should create an instance', () => {
    const directive = new TarefaConcluidaDirective(null);
    expect(directive).toBeTruthy();
  });
});
