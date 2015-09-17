##Legit ID

I was tired of making a function that generates a unique id for my React keys, so i made this simple thing

##Install

`npm install legit-id --save`

##example

~~~js
import 'legit-id'

var object = {hey: true}
var array = [1,2]

'test'.id // -> test-1
object.id() // -> unique-2
array.id() // -> unique-3
~~~

The object / array method was added as a courtesy, you should use this on strings.
