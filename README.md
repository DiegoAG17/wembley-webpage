# Wembley School — Sitio Web

Código fuente del sitio web de **Wembley School**, academia de idiomas en Alcalá la Real (Jaén). Es un sitio estático (HTML, CSS y JavaScript), sin build ni backend.

## Estructura

Todo el sitio vive dentro de la carpeta [`Wembley/`](Wembley):

```
Wembley/
├── index.html              # Portada
├── about.html               # Quiénes somos
├── courses.html              # Cursos e idiomas
├── exams.html                 # Exámenes oficiales (Cambridge, Aptis, Trinity...)
├── online-info.html            # Horarios de las clases online
├── matriculate.html             # Formulario de matrícula
├── contact.html                  # Contacto
├── noticias.html                  # Noticias de la academia
├── aviso-legal.html                # Aviso legal / política de privacidad
├── condiciones-online.html          # Condiciones de matriculación online
├── assets/
│   ├── css/                          # style.css (propio) + Bootstrap y librerías
│   ├── js/                           # custom.js (propio) + librerías
│   └── images/                       # Logos, fotos, certificados
```

## Cómo verlo en local

No hace falta instalar nada, basta con un servidor estático:

```bash
cd Wembley
python3 -m http.server 8080
```

Y abrir `http://localhost:8080` en el navegador.

## Tecnologías

- HTML5 / CSS3 (variables CSS, Flexbox)
- [Bootstrap 3](https://getbootstrap.com/docs/3.4/)
- [jQuery](https://jquery.com/)
- [Font Awesome 4](https://fontawesome.com/v4/)
- [Camera.js](http://camera.webyourmind.com/) — slider de la portada
- [EmailJS](https://www.emailjs.com/) — envío de los formularios de contacto y matrícula sin backend

## Contacto

**Wembley School**
C/ Maestro Pascual Baca, 1 · 23680 Alcalá la Real (Jaén)
[wembleyschool2@gmail.com](mailto:wembleyschool2@gmail.com) · 953 58 30 23
