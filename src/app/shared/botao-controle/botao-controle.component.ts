import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrl: './botao-controle.component.css'
})
export class BotaoControleComponent {

  @Input() operacao!: 'incrementar' | 'decrementar';

}