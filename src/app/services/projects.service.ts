import { Injectable } from '@angular/core';
import { ProjectDTO } from '../models/projects/projectDTO';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: ProjectDTO[] = [
    { id: "1", 
    name: 
      {en:"Webpage for an artist from my city", 
      es: "Pagina web para un artista de mi ciudad"} , 
    "img": "assets/projects/web_para_un_artista.png", 
    technologies: ["JS", "CSS", "HTML"], 
    description: 
      {es:["Como culminación de nuestro curso de Web  1 en TUDAI durante el primer semestre, mi compañero y yo emprendimos el desarrollo de una aplicación web adaptada para un artista.","Aunque modesto en escala, este proyecto resultó fundamental en nuestra iniciación en el diseño web Frontend. Enfrentamos y superamos desafíos como la creación de una interfaz receptiva, dominio de la manipulación de arreglos y funciones lógicas de JavaScript, y la utilización de AJAX para la recuperación de datos.  En el ámbito lógico, implementamos una solución de Captcha personalizada utilizando el método .random() dentro de la interfaz Math. Esta función no solo emuló la generación estándar de Captcha, sino que también garantizó la precisión en la entrada del usuario, fortaleciendo así la seguridad de la aplicación.  En el ámbito del diseño visual, adoptamos un enfoque Mobile First, siguiendo las mejores prácticas de la industria en la implementación de CSS. Por último, nuestro proyecto abarcó el desarrollo de una tienda virtual de productos de merchandising. Aprovechando las solicitudes HTTP asíncronas, la aplicación se comunicó sin problemas con un servidor, actualizando dinámicamente el DOM para reflejar las últimas interacciones del usuario." ], 
      en:["As the culmination of our Web 1 course at TUDAI during the first semester, my partner and I undertook the development of a web application tailored for an artist.","Though modest in scale, this project proved instrumental in our initiation into Frontend web design. We encountered and conquered challenges such as crafting a responsive interface, mastering JavaScript's array manipulation and logical functions, and harnessing AJAX for data retrieval. On the logical front, we implemented a custom Captcha solution utilizing the .random() method within the Math interface. This feature not only emulated standard Captcha generation but also ensured user input accuracy, thereby fortifying the application's security. In the realm of visual design, we embraced a Mobile First approach, adhering to industry best practices in CSS implementation. Lastly, our project encompassed the development of a virtual merchandise storefront. Leveraging asynchronous HTTP requests, the application seamlessly communicated with a server, dynamically updating the DOM to reflect the latest user interactions." ]} , 
      links: {
        github: "https://github.com/JesusDiazDeveloper/Web1-TPE-Web-para-un-Musico-JessLB-",
        netlify: "https://web-para-un-artista.netlify.app/",
    }
    ,},
  
  { id: "2", name: {en:"Webpage for an artist from my city", es: "Pagina web para un artista de mi ciudad"} , "img": "assets/projects/1.jpg", technologies: ["Java", "JS", "Angular", "React"]
  ,
  description: 
  {es:["Como culminación de nuestro curso de Web  1 en TUDAI durante el primer semestre, mi compañero y yo emprendimos el desarrollo de una aplicación web adaptada para un artista.","Aunque modesto en escala, este proyecto resultó fundamental en nuestra iniciación en el diseño web Frontend. Enfrentamos y superamos desafíos como la creación de una interfaz receptiva, dominio de la manipulación de arreglos y funciones lógicas de JavaScript, y la utilización de AJAX para la recuperación de datos.  En el ámbito lógico, implementamos una solución de Captcha personalizada utilizando el método .random() dentro de la interfaz Math. Esta función no solo emuló la generación estándar de Captcha, sino que también garantizó la precisión en la entrada del usuario, fortaleciendo así la seguridad de la aplicación.  En el ámbito del diseño visual, adoptamos un enfoque Mobile First, siguiendo las mejores prácticas de la industria en la implementación de CSS. Por último, nuestro proyecto abarcó el desarrollo de una tienda virtual de productos de merchandising. Aprovechando las solicitudes HTTP asíncronas, la aplicación se comunicó sin problemas con un servidor, actualizando dinámicamente el DOM para reflejar las últimas interacciones del usuario." ], 
  en:["As the culmination of our Web 1 course at TUDAI during the first semester, my partner and I undertook the development of a web application tailored for an artist.","Though modest in scale, this project proved instrumental in our initiation into Frontend web design. We encountered and conquered challenges such as crafting a responsive interface, mastering JavaScript's array manipulation and logical functions, and harnessing AJAX for data retrieval. On the logical front, we implemented a custom Captcha solution utilizing the .random() method within the Math interface. This feature not only emulated standard Captcha generation but also ensured user input accuracy, thereby fortifying the application's security. In the realm of visual design, we embraced a Mobile First approach, adhering to industry best practices in CSS implementation. Lastly, our project encompassed the development of a virtual merchandise storefront. Leveraging asynchronous HTTP requests, the application seamlessly communicated with a server, dynamically updating the DOM to reflect the latest user interactions." ]} , 

  links: {
    Github: "https://github.com/JesusDiazDeveloper/Web1-TPE-Web-para-un-Musico-JessLB-",
    netlify: "https://web-para-un-artista.netlify.app/",
}},
{ id: "3", 
name: 
  {en:"Webpage for an artist from my city", 
  es: "Pagina web para un artista de mi ciudad"} , 
"img": "assets/projects/web_para_un_artista.png", 
technologies: ["JS", "CSS", "HTML"], 
description: 
  {es:["Como culminación de nuestro curso de Web  1 en TUDAI durante el primer semestre, mi compañero y yo emprendimos el desarrollo de una aplicación web adaptada para un artista.","Aunque modesto en escala, este proyecto resultó fundamental en nuestra iniciación en el diseño web Frontend. Enfrentamos y superamos desafíos como la creación de una interfaz receptiva, dominio de la manipulación de arreglos y funciones lógicas de JavaScript, y la utilización de AJAX para la recuperación de datos.  En el ámbito lógico, implementamos una solución de Captcha personalizada utilizando el método .random() dentro de la interfaz Math. Esta función no solo emuló la generación estándar de Captcha, sino que también garantizó la precisión en la entrada del usuario, fortaleciendo así la seguridad de la aplicación.  En el ámbito del diseño visual, adoptamos un enfoque Mobile First, siguiendo las mejores prácticas de la industria en la implementación de CSS. Por último, nuestro proyecto abarcó el desarrollo de una tienda virtual de productos de merchandising. Aprovechando las solicitudes HTTP asíncronas, la aplicación se comunicó sin problemas con un servidor, actualizando dinámicamente el DOM para reflejar las últimas interacciones del usuario." ], 
  en:["As the culmination of our Web 1 course at TUDAI during the first semester, my partner and I undertook the development of a web application tailored for an artist.","Though modest in scale, this project proved instrumental in our initiation into Frontend web design. We encountered and conquered challenges such as crafting a responsive interface, mastering JavaScript's array manipulation and logical functions, and harnessing AJAX for data retrieval. On the logical front, we implemented a custom Captcha solution utilizing the .random() method within the Math interface. This feature not only emulated standard Captcha generation but also ensured user input accuracy, thereby fortifying the application's security. In the realm of visual design, we embraced a Mobile First approach, adhering to industry best practices in CSS implementation. Lastly, our project encompassed the development of a virtual merchandise storefront. Leveraging asynchronous HTTP requests, the application seamlessly communicated with a server, dynamically updating the DOM to reflect the latest user interactions." ]} , 
  links: {
    github: "https://github.com/JesusDiazDeveloper/Web1-TPE-Web-para-un-Musico-JessLB-",
    netlify: "https://web-para-un-artista.netlify.app/",
}
,},

{ id: "4", name: {en:"Webpage for an artist from my city", es: "Pagina web para un artista de mi ciudad"} , "img": "assets/projects/1.jpg", technologies: ["Java", "JS", "Angular", "React"]
,
description: 
{es:["Como culminación de nuestro curso de Web  1 en TUDAI durante el primer semestre, mi compañero y yo emprendimos el desarrollo de una aplicación web adaptada para un artista.","Aunque modesto en escala, este proyecto resultó fundamental en nuestra iniciación en el diseño web Frontend. Enfrentamos y superamos desafíos como la creación de una interfaz receptiva, dominio de la manipulación de arreglos y funciones lógicas de JavaScript, y la utilización de AJAX para la recuperación de datos.  En el ámbito lógico, implementamos una solución de Captcha personalizada utilizando el método .random() dentro de la interfaz Math. Esta función no solo emuló la generación estándar de Captcha, sino que también garantizó la precisión en la entrada del usuario, fortaleciendo así la seguridad de la aplicación.  En el ámbito del diseño visual, adoptamos un enfoque Mobile First, siguiendo las mejores prácticas de la industria en la implementación de CSS. Por último, nuestro proyecto abarcó el desarrollo de una tienda virtual de productos de merchandising. Aprovechando las solicitudes HTTP asíncronas, la aplicación se comunicó sin problemas con un servidor, actualizando dinámicamente el DOM para reflejar las últimas interacciones del usuario." ], 
en:["As the culmination of our Web 1 course at TUDAI during the first semester, my partner and I undertook the development of a web application tailored for an artist.","Though modest in scale, this project proved instrumental in our initiation into Frontend web design. We encountered and conquered challenges such as crafting a responsive interface, mastering JavaScript's array manipulation and logical functions, and harnessing AJAX for data retrieval. On the logical front, we implemented a custom Captcha solution utilizing the .random() method within the Math interface. This feature not only emulated standard Captcha generation but also ensured user input accuracy, thereby fortifying the application's security. In the realm of visual design, we embraced a Mobile First approach, adhering to industry best practices in CSS implementation. Lastly, our project encompassed the development of a virtual merchandise storefront. Leveraging asynchronous HTTP requests, the application seamlessly communicated with a server, dynamically updating the DOM to reflect the latest user interactions." ]} , 

links: {
Github: "https://github.com/JesusDiazDeveloper/Web1-TPE-Web-para-un-Musico-JessLB-",
netlify: "https://web-para-un-artista.netlify.app/",
}},
{ id: "5", 
    name: 
      {en:"Webpage for an artist from my city", 
      es: "Pagina web para un artista de mi ciudad"} , 
    "img": "assets/projects/web_para_un_artista.png", 
    technologies: ["JS", "CSS", "HTML"], 
    description: 
      {es:["Como culminación de nuestro curso de Web  1 en TUDAI durante el primer semestre, mi compañero y yo emprendimos el desarrollo de una aplicación web adaptada para un artista.","Aunque modesto en escala, este proyecto resultó fundamental en nuestra iniciación en el diseño web Frontend. Enfrentamos y superamos desafíos como la creación de una interfaz receptiva, dominio de la manipulación de arreglos y funciones lógicas de JavaScript, y la utilización de AJAX para la recuperación de datos.  En el ámbito lógico, implementamos una solución de Captcha personalizada utilizando el método .random() dentro de la interfaz Math. Esta función no solo emuló la generación estándar de Captcha, sino que también garantizó la precisión en la entrada del usuario, fortaleciendo así la seguridad de la aplicación.  En el ámbito del diseño visual, adoptamos un enfoque Mobile First, siguiendo las mejores prácticas de la industria en la implementación de CSS. Por último, nuestro proyecto abarcó el desarrollo de una tienda virtual de productos de merchandising. Aprovechando las solicitudes HTTP asíncronas, la aplicación se comunicó sin problemas con un servidor, actualizando dinámicamente el DOM para reflejar las últimas interacciones del usuario." ], 
      en:["As the culmination of our Web 1 course at TUDAI during the first semester, my partner and I undertook the development of a web application tailored for an artist.","Though modest in scale, this project proved instrumental in our initiation into Frontend web design. We encountered and conquered challenges such as crafting a responsive interface, mastering JavaScript's array manipulation and logical functions, and harnessing AJAX for data retrieval. On the logical front, we implemented a custom Captcha solution utilizing the .random() method within the Math interface. This feature not only emulated standard Captcha generation but also ensured user input accuracy, thereby fortifying the application's security. In the realm of visual design, we embraced a Mobile First approach, adhering to industry best practices in CSS implementation. Lastly, our project encompassed the development of a virtual merchandise storefront. Leveraging asynchronous HTTP requests, the application seamlessly communicated with a server, dynamically updating the DOM to reflect the latest user interactions." ]} , 
      links: {
        github: "https://github.com/JesusDiazDeveloper/Web1-TPE-Web-para-un-Musico-JessLB-",
        netlify: "https://web-para-un-artista.netlify.app/",
    }
    ,},
  
  { id: "6", name: {en:"Webpage for an artist from my city", es: "Pagina web para un artista de mi ciudad"} , "img": "assets/projects/1.jpg", technologies: ["Java", "JS", "Angular", "React"]
  ,
  description: 
  {es:["Como culminación de nuestro curso de Web  1 en TUDAI durante el primer semestre, mi compañero y yo emprendimos el desarrollo de una aplicación web adaptada para un artista.","Aunque modesto en escala, este proyecto resultó fundamental en nuestra iniciación en el diseño web Frontend. Enfrentamos y superamos desafíos como la creación de una interfaz receptiva, dominio de la manipulación de arreglos y funciones lógicas de JavaScript, y la utilización de AJAX para la recuperación de datos.  En el ámbito lógico, implementamos una solución de Captcha personalizada utilizando el método .random() dentro de la interfaz Math. Esta función no solo emuló la generación estándar de Captcha, sino que también garantizó la precisión en la entrada del usuario, fortaleciendo así la seguridad de la aplicación.  En el ámbito del diseño visual, adoptamos un enfoque Mobile First, siguiendo las mejores prácticas de la industria en la implementación de CSS. Por último, nuestro proyecto abarcó el desarrollo de una tienda virtual de productos de merchandising. Aprovechando las solicitudes HTTP asíncronas, la aplicación se comunicó sin problemas con un servidor, actualizando dinámicamente el DOM para reflejar las últimas interacciones del usuario." ], 
  en:["As the culmination of our Web 1 course at TUDAI during the first semester, my partner and I undertook the development of a web application tailored for an artist.","Though modest in scale, this project proved instrumental in our initiation into Frontend web design. We encountered and conquered challenges such as crafting a responsive interface, mastering JavaScript's array manipulation and logical functions, and harnessing AJAX for data retrieval. On the logical front, we implemented a custom Captcha solution utilizing the .random() method within the Math interface. This feature not only emulated standard Captcha generation but also ensured user input accuracy, thereby fortifying the application's security. In the realm of visual design, we embraced a Mobile First approach, adhering to industry best practices in CSS implementation. Lastly, our project encompassed the development of a virtual merchandise storefront. Leveraging asynchronous HTTP requests, the application seamlessly communicated with a server, dynamically updating the DOM to reflect the latest user interactions." ]} , 

  links: {
    Github: "https://github.com/JesusDiazDeveloper/Web1-TPE-Web-para-un-Musico-JessLB-",
    netlify: "https://web-para-un-artista.netlify.app/",
}},
{ id: "7", 
    name: 
      {en:"Webpage for an artist from my city", 
      es: "Pagina web para un artista de mi ciudad"} , 
    "img": "assets/projects/web_para_un_artista.png", 
    technologies: ["JS", "CSS", "HTML"], 
    description: 
      {es:["Como culminación de nuestro curso de Web  1 en TUDAI durante el primer semestre, mi compañero y yo emprendimos el desarrollo de una aplicación web adaptada para un artista.","Aunque modesto en escala, este proyecto resultó fundamental en nuestra iniciación en el diseño web Frontend. Enfrentamos y superamos desafíos como la creación de una interfaz receptiva, dominio de la manipulación de arreglos y funciones lógicas de JavaScript, y la utilización de AJAX para la recuperación de datos.  En el ámbito lógico, implementamos una solución de Captcha personalizada utilizando el método .random() dentro de la interfaz Math. Esta función no solo emuló la generación estándar de Captcha, sino que también garantizó la precisión en la entrada del usuario, fortaleciendo así la seguridad de la aplicación.  En el ámbito del diseño visual, adoptamos un enfoque Mobile First, siguiendo las mejores prácticas de la industria en la implementación de CSS. Por último, nuestro proyecto abarcó el desarrollo de una tienda virtual de productos de merchandising. Aprovechando las solicitudes HTTP asíncronas, la aplicación se comunicó sin problemas con un servidor, actualizando dinámicamente el DOM para reflejar las últimas interacciones del usuario." ], 
      en:["As the culmination of our Web 1 course at TUDAI during the first semester, my partner and I undertook the development of a web application tailored for an artist.","Though modest in scale, this project proved instrumental in our initiation into Frontend web design. We encountered and conquered challenges such as crafting a responsive interface, mastering JavaScript's array manipulation and logical functions, and harnessing AJAX for data retrieval. On the logical front, we implemented a custom Captcha solution utilizing the .random() method within the Math interface. This feature not only emulated standard Captcha generation but also ensured user input accuracy, thereby fortifying the application's security. In the realm of visual design, we embraced a Mobile First approach, adhering to industry best practices in CSS implementation. Lastly, our project encompassed the development of a virtual merchandise storefront. Leveraging asynchronous HTTP requests, the application seamlessly communicated with a server, dynamically updating the DOM to reflect the latest user interactions." ]} , 
      links: {
        github: "https://github.com/JesusDiazDeveloper/Web1-TPE-Web-para-un-Musico-JessLB-",
        netlify: "https://web-para-un-artista.netlify.app/",
    }
    ,},
  
  { id: "8", name: {en:"Webpage for an artist from my city", es: "Pagina web para un artista de mi ciudad"} , "img": "assets/projects/1.jpg", technologies: ["Java", "JS", "Angular", "React"]
  ,
  description: 
  {es:["Como culminación de nuestro curso de Web  1 en TUDAI durante el primer semestre, mi compañero y yo emprendimos el desarrollo de una aplicación web adaptada para un artista.","Aunque modesto en escala, este proyecto resultó fundamental en nuestra iniciación en el diseño web Frontend. Enfrentamos y superamos desafíos como la creación de una interfaz receptiva, dominio de la manipulación de arreglos y funciones lógicas de JavaScript, y la utilización de AJAX para la recuperación de datos.  En el ámbito lógico, implementamos una solución de Captcha personalizada utilizando el método .random() dentro de la interfaz Math. Esta función no solo emuló la generación estándar de Captcha, sino que también garantizó la precisión en la entrada del usuario, fortaleciendo así la seguridad de la aplicación.  En el ámbito del diseño visual, adoptamos un enfoque Mobile First, siguiendo las mejores prácticas de la industria en la implementación de CSS. Por último, nuestro proyecto abarcó el desarrollo de una tienda virtual de productos de merchandising. Aprovechando las solicitudes HTTP asíncronas, la aplicación se comunicó sin problemas con un servidor, actualizando dinámicamente el DOM para reflejar las últimas interacciones del usuario." ], 
  en:["As the culmination of our Web 1 course at TUDAI during the first semester, my partner and I undertook the development of a web application tailored for an artist.","Though modest in scale, this project proved instrumental in our initiation into Frontend web design. We encountered and conquered challenges such as crafting a responsive interface, mastering JavaScript's array manipulation and logical functions, and harnessing AJAX for data retrieval. On the logical front, we implemented a custom Captcha solution utilizing the .random() method within the Math interface. This feature not only emulated standard Captcha generation but also ensured user input accuracy, thereby fortifying the application's security. In the realm of visual design, we embraced a Mobile First approach, adhering to industry best practices in CSS implementation. Lastly, our project encompassed the development of a virtual merchandise storefront. Leveraging asynchronous HTTP requests, the application seamlessly communicated with a server, dynamically updating the DOM to reflect the latest user interactions." ]} , 

  links: {
    Github: "https://github.com/JesusDiazDeveloper/Web1-TPE-Web-para-un-Musico-JessLB-",
    netlify: "https://web-para-un-artista.netlify.app/",
}},
];

  constructor() { }

  getAll(){
    return this.projects;
  }

  getById( id : string){
    const project = this.projects.find(project=>project.id === id);
    if( project ){
      return project
    }
    else{
      return null;
    }
  }

}
