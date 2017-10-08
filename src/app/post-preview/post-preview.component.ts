import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  constructor( private _router:  Router) {}
  

  @Input() post: Post;

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | este atributo debe permitir la emisión de eventos; la idea es enviar al  |
  | componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que |
  | dicho clic se realiza en el template de este componente, necesitas,      |
  | además, un manejador para el mismo.                                      |  LISTO!!!
  |=========================================================================*/
  @Output() autorPulsado = new EventEmitter<Post>();
  
    notificarAutor(user): void {
      this.autorPulsado.emit(user);
    }


  /*=========================================================================|
  | Green Path                                                               |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | este atributo debe permitir la emisión de eventos; la idea es enviar al  |
  | componente padre el post sobre el cuál se ha hecho clic. Y puesto que    |
  | dicho clic se realiza en el template de este componente, necesitas,      |
  | además, un manejador para el mismo.                                      |  LISTO!!!
  |=========================================================================*/
  @Output() articuloPulsado = new EventEmitter<Post>();
  
    notificarQuePost(post): void {
      this.articuloPulsado.emit(post);
    }


  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, '</p><p>')}</p>` : '';
  }

}
