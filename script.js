document.addEventListener('DOMContentLoaded', function () {
    const btnVerLetra = document.getElementById('btnVerLetra');
    const letraContainer = document.getElementById('letraContainer');
    const letra = document.getElementById('letra');

    let letraVisible = false; // Variable para controlar el estado de visibilidad de la letra

    btnVerLetra.addEventListener('click', function () {
        if (!letraVisible) { // Si la letra no está visible, mostrarla
            letraContainer.style.display = 'block';
            mostrarLetra();
            letraVisible = true;
        } else { // Si la letra está visible, ocultarla
            letraContainer.style.display = 'none';
            letraVisible = false;
        }
    });

    // Función para mostrar la letra de la canción
    function mostrarLetra() {
        const letraCancion = `Espero que estés contenta feliz
        Resulta que después de amarnos como locos
        Simplemente dices que ha llegado el fin
        Me duele tu adiós pero él te ofreció
        Un castillo de oro yo solo mis sueños
        Y un pequeño apartamento para dos
        Procura fingir que nadie ha navegado por tu lindo cuerpo
        Que nadie besó la cicatriz pequeña que adorna tu espalda
        Y pídele a dios que si él te lleva al punto de arañar el cielo
        Que bajes la voz para que no le grites mi maldito nombre
        Y ojalá que el puño de diamantes que él te ha prometido
        Sobornen tus ansias cuando sientas ganas de jugar conmigo
        Y que sus detalles se vuelvan cadenas de tus emociones
        Para que no sufras el dolor que causan las desilusiones
        Te prometo que nuestro romance morirá en silencio
        Yo a ver cómo le hago pa' sanar el vicio de sentir tus labios
        Rodar por mi piel besando cada espacio de mi anatomía
        Brindándome vida
        Qué triste aceptarlo
        Hoy pierdo a la reina de mis fantasías
        Procura fingir que nadie a navegado por tu lindo cuerpo
        Que nadie besó la cicatriz pequeña que adorna tu espalda
        Y pídele a dios que si él te lleva al punto de arañar el cielo
        Que bajes la voz para que no le grites mi maldito nombre
        Y ojalá que el puño de diamantes que él te ha prometido
        Sobornen tus ansias cuando sientas ganas de jugar conmigo
        Y que sus detalles se vuelvan cadenas de tus emociones
        Para que no sufras el dolor que causan las desilusiones
        Te prometo que nuestro romance morirá en silencio
        Yo a ver cómo le hago pa' sanar el vicio de sentir tus labios
        Rodar por mi piel besando cada espacio de mi anatomía
        Brindándome vida
        Qué triste aceptarlo
        Hoy pierdo a la reina de mis fantasías`;

        const versos = letraCancion.split('\n');
        let indice = 0;

        // Función para mostrar cada grupo de 4 versos con una transición
        function mostrarGrupo() {
            if (indice < versos.length) {
                let grupoVersos = versos.slice(indice, indice + 4).join('\n');
                letra.textContent = grupoVersos;
                indice += 4;
                setTimeout(mostrarGrupo, 25000); // Transición de 4 segundos entre grupos de versos
            }
        }

        mostrarGrupo(); // Iniciar la transición de grupos de versos
    }

    // Event listener para el botón "Reproducir otra canción"
    document.getElementById('btnOtraCancion').addEventListener('click', function() {
        document.getElementById('container').style.opacity = '0'; // Ocultar el contenedor actual con una transición
        setTimeout(function() {
            document.getElementById('container').innerHTML = 
            `<div id="reproductor">
                    <div id="infoCancion">
                        <img id="logoCancion" src="nueva_ruta_del_logo.jpg" alt="Logo de la nueva canción">
                        <div id="infoText">
                            <h2 id="NombreNuevaCancion" style="font-size: 22px; font-weight: bold;">O me voy o te vas</h2>
                            <p id="ArtistaNuevaCancion" style="color: #b3b3b3;">Artista de la nueva canción</p>
                        </div>
                    </div>
                    <button id="btnVerLetra" style="background-color: #1db95400; color: #fff; border: none; border-radius: 40px; cursor: pointer; padding: 12px 30px; transition: background-color 0.3s ease;">Ver letra</button>
                </div>
        
                <div id="letraContainer" style="display: none;">
                    <h3 style="color: #fff;">Letra de la nueva canción</h3>
                    <p id="letraNuevaCancion" style="font-size: 16px; line-height: 1.6; white-space: pre-line;"></p>
                </div>
            `;
            document.getElementById('audioPlayer').src = 'musica'; // Cambiar la fuente de audio
    
            document.getElementById('container').style.opacity = '1'; // Mostrar el nuevo contenido con una transición
        }, 500); // Esperar 0.5 segundos antes de cambiar el contenido
    });
    
    });
