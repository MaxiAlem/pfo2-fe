# PFO 2

Proyecto basado en la entrega del primer práctico de la materia.  
Versión anterior: [https://maxialem.github.io/pfo1-FE/](https://maxialem.github.io/pfo1-FE/)

---

## Cambios estructurales

- Todo el contenido del sitio (excepto header y footer) fue integrado dentro de un `div` contenedor llamado `container`. Esta es una práctica común para manejar márgenes, anchos máximos y alineaciones de manera centralizada.
- El `font-size` general del sitio ahora se basa en `rem`, lo cual permite una mayor adaptabilidad en distintos tamaños de pantalla. Se definió una base de `16px` para desktop y `12px` para mobile, lo que permite ajustar escalas globalmente cambiando solo un valor.

---

## Funcionalidades agregadas con JavaScript

1. **Contenido dinámico**  
   Las películas ahora se renderizan dinámicamente a partir de un array en el archivo JS. Esto permite agregar, quitar o reordenar películas simplemente modificando el array.

2. **Modo claro / modo oscuro**  
   Se incorporó un toggle que permite alternar entre ambos temas. La preferencia del usuario se guarda en `localStorage`, manteniéndose incluso después de cerrar el navegador.

3. **Validación de formulario y confirmación visual**  
   - Se implementó validación adicional para nombre y apellido mediante expresiones regulares (`regex`) usando `.test()`.
   - El campo de email se valida automáticamente por su tipo.
   - El campo de teléfono no es obligatorio, pero podría validarse fácilmente con otro `regex` si fuera necesario.
   - Si la validación es exitosa, se muestra un `alert` de confirmación simulando el envío del formulario.

4. **Contador de visitas**  
   Se agregó un contador que registra cuántas veces se cargó el DOM. El valor se almacena en `localStorage`, permitiendo persistencia aunque se cierre el navegador. Se puede utilizar este dato para mostrar contenido especial al alcanzar cierto número de visitas.
