# B2 - Interactivitat a la Web Responsive
## Pràctica de Llenguatge de Marques

**Tasca:** Incorporar interactivitat a la Web utilitzant JavaScript.

## Formulari de contacte interactiu
### Creació del fomulari de contacte
En aquest cas, he creat un formulari de contacte per una "suscripció" a la web d'Albert Camus.

He creat una página extra anomenada "contacte". Dins aquesta página es poden destacar dos apartats:
- suscripcions
- comentaris

Dins el primer, está l'opció de que l'usuari fiqui dades com nom, llinatges, edat, etc per després en pitjar el botó de "Suscribirse" s'enviin les dades. En aquest cas no s'envien realment a cap lloc, perque no treballam desde la part del servidor.

### Adaptació a diferents tipus de resolució de pantalla

He editat amb CSS les diferents parts de la página de "contacte" perque sigui responsive. Per aixó he utilitzat flexbox i també he utilitzat els media queries que tenía d'abans.

Cuan la pàgina té una resolució més gran, es veuen els dos apartas un devora l'altre i quan es més petita estàn en forma de columna.

### Validació de les dades
Per validar les dades que fica l'usuari dins el formulari, ho he fet en part amb la validació d'HTML i en part amb JavaScript.
Per exemple, he utilitzat:
``` HTML
<input type="tel" id="telefono" name="telefono" placeholder="xxx-xxx-xxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" required>
```
Perque el número de telèfon només pugui estar en un format. Concretament amb números del 0 al 9 i de 3 en tres separats per un guió, o sigui: xxx-xxx-xxx. Apart d'aixó, he posat que alguns camps siguien "requerits".

D'altra banda, he utilitzar JavaScript per assegurar-me per exemple que l'usuari és major d'edat. Per aixó he utilitzar la següent funció:
``` js
//----función para validar el formulario de contacto----
function validateForm() {
    //verificar que el usuario sea mayor de edad
    let edadInput = document.getElementById("edad");
    let edad = parseInt(edadInput.value);
    if (isNaN(edad) || edad < 18) {
        alert("Tienes que ser mayor de edad para esto.");
        edadInput.focus();
        return false;
    }
    //validar email (aunque no se hasta que punto sea necesario porque el type del input ya es "email")
    let email = document.getElementById("correo").value;
    if (!/^(.+\@.+\..+)$/.test(email)) {
        alert("Email inválido.");
        return false;
    }
    //confirmacion del envio
    alert(`Gracias por suscribirte, ${nombre.value} :)`);
    return true;
}
```

### Imatge del formulari
![formulari](/readme_medios/captura_04.png)

---

## Scripts
### Càrrega dinàmica de contingut:
Per aixó, he canviat els botons de la pàgina de "[vida.html](vida.html)" perque funcionin amb la següent funció:
``` js
// botones para hacer aparecer o desaparecer contenido (en la página de vida.html)
function aparecer(){
    var texto = document.getElementById("vida");
    if (texto.style.display == "none"){
        texto.style.display = "block";
    }else {
        texto.style.display = "none";
    }
}
```
Si pulses el botó "saber más", es mostra més informació. Si hi tornes a pulsar o li dones a "ocular", s'amaga.
A la part de la línea cronológica, si deixes el ratolí sobre l'any també es veu informació, però això no és amb JS.

### Notificacions emergents:
He afegit algunes notificacions emergents per interactuar amb l'usuari. Per exemple, quan l'usuari envía el formulari, surt un `alert` que diu "Gracias por suscribirte, (nom de l'usuari)".

![captura alert](/readme_medios/captura_01.png)

També surt una notificació cada vegada que es canvia d'estil la pàgina, de fet, quan es canvia d'estil la página (o quan es carrega l'estil en general), apareix un missatge al `console.log`, però això no ho vera l'usuari.

### Enquestes/Valoracions Interactives:
Per recopilar la retroalimentació del usuaris he afegit una secció de comentaris. Els usuaris poden comentar a sa web i els seus comentaris s'afegeixen a la secció de comentaris.

Poden posar un nom però és opcional (si no ho posen, surt com "Anónimo").

Hi ha dos comentaris predeterminats, però la resta s'afegeixen segons l'usuari vagi comentant. Si es torna a carregar la pàgina, els comentaris dels usuaris segueixen apareguent (estan al local.Storage).

![comentarios](/readme_medios/captura_02.png)

### Canvis d'estil:
He afegit un botó a l'inici de cada página que ens permet cambiar els estils de tota la web.

Concretament es canvia de tema 'oscuro' a tema 'claro' o viceversa.

Aixó ho faig amb una funció de javascript que s'executa en pulsar el botó però també hi ha una que s'executa en carregar la pàgina. Tinc una funció per cada estil.

Lo únic que fan les funcions d'estil es canviar coses genériques com per exemple els colors que he posat predeterminats (var --color-1) o el color del fons.

Aquesta es una mostra del tema clar:
![tema clar](/readme_medios/captura_03.png)

### Imatges:
Per fer canvis a les imatges he elegit fer un slider a la pàgina d'obres. En fer click a les fletxes et mostra imatges de cada obra.
Aixó ho he fet amb 3 funcions que están al JS, concretament la de `mostrarSlide()`, la de `prevSlide()` i la de `nextSlide()`.

![slider](/readme_medios/captura_05.gif)

Apart d'aixó, en deixar el ratolí damunt cada imatge, t'ensenya més informació sobre cada obra. He fet aixó utilitzant `onmouseover` i `onmouseout` apart de funcions de JS que están a l'[escript](script.js).

![mes info](/readme_medios/captura_06.gif)