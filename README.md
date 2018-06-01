https://andrealemonroy.github.io/lim-2018-05-bc-core-am-cipher/src/

## Preámbulo

Está próxima la fecha del cumpleaños de tu flacx (novix) y estás organizando una
fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto
con amigos y familiares.

Un gran problema es que pones tu alarma para levantarte temprano, sin embargo
(como supondrás) eso nunca sucede y tu flacx es quien termina apagando la alarma
y "de casualidad" revisando tus mensajes. Debido a que es algo sorpresa, decides
crear una aplicación que te permita enviar mensajes cifrados y que las demás
personas (partícipes de la fiesta) puedan tener una interfaz para
descifrarlo. Así que ahora te toca aplicar tus superpoderes 😎

# Encriptador de mensajes

## Introduction

Para que nadie más que tú pueda entender tus mensajes; en esta página podrás codificar/encriptar tus mensajes y también decodificarlos/desencriptarlos.

Para usarlo seguimos estos pasos:
1-Introducimos un texto en el primer cuadro donde dice INGRESE TEXTO
2-Seleccionamos ENCRIPTAR
3-Elegimos un offset(los espacios que se desplazará) 
4-Le damos click al botón ->
5-En el segundo cuadro donde dice AQUÍ VERÁ EL RESULTADO, nos dará nuestro texto codificado/encriptado :)

Si queremos decodificar/desencriptar un texto hacemos lo mismo, solo que en vez de seleccionar ENCRIPTAR seleccionamos DESENCRIPTAR.

Para hacer este proceso hemos usado el [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.

