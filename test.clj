;;clojure -M test.clj
(println "-----------------------------------------------------")
(println "-----------------------------------------------------")
(println "-------------------- COMIENZO -----------------------")

(println " Encontrar el mayor número en una lista"
         (apply max [1 2 3 4 5])) ; Output 5

(defn find-max[numbers]
  (apply max numbers))

(println " Encontrar el mayor número en una lista"
         (find-max [1 2 3 4 5])) ; Output 5

(println " Aplicar una función a cada elemento de una lista y luego sumarlos"
         ((fn [f & nums] (reduce + (map f nums))) inc  2 4)) ; Output 20 ; f es inc

(println ": Sumar una lista de números"
         ((fn [& nums] (reduce + nums)) 1 2 3 4 5)) ; Output 15

(println " Calcular el producto de una lista de números"
         ((fn [& nums] (reduce * nums)) 1 2 3 4 5)) ; Output 120

(println " Calcular el promedio de una lista de números"
         (/ ((fn [& nums] (reduce + nums)) 1 2 3 4 5) (count [1 2 3 4 5]))) ; Output 3

(println " Filtrar los números pares de una lista"
         (filter even? [1 2 3 4 5])) ; Output (2 4)

(println " Aplicar una función a cada elemento de una lista y luego sumarlos"
         ((fn [f & nums] (reduce + (map f nums))) inc 1 2 3 4 5)) ; Output 20

(println " Encontrar el menor número en una lista"
         (apply min [1 2 3 4 5])) ; Output 1

(println " Concatenar una lista de cadenas"
         (apply str ["Hola" " " "mundo" "!"])) ; Output Hola mundo!

(println " Duplicar cada elemento de una lista y luego sumarlos"
         ((fn [& nums] (reduce + (map #(* % 2) nums))) 1 2 3 4 5)) ; Output 30

(println " Calcular la potencia de cada número en una lista"
         ((fn [& nums] (reduce + (map #(Math/pow % 2) nums))) 1 2 3 4 5)) ; Output: 55.0

(println "Calcular el factorial de un número")
(defn factorial [n]
  (apply * (range 1 (inc n))))
(println (factorial 5)) ; Output 120

(println "Calcular la suma de los factoriales de una lista de números")
(defn sum-of-factorials [nums]
  (reduce + (map factorial nums)))
(println (sum-of-factorials [1 2 3 4 5])) ; Output 153

(println "Verificar si una lista de números está ordenada de manera ascendente")
(defn ascending? [nums]
  (apply <= nums))
(println (ascending? [1 2 3 4 5])) ; Output true

(println "Obtener la lista de los primeros n números primos")
(defn prime? [n]
  (not-any? #(zero? (rem n %)) (range 2 n)))
(defn first-n-primes [n]
  (take n (filter prime? (iterate inc 2))))
(println (first-n-primes 5)) ; Output (2 3 5 7 11)

(println "Calcular la suma de los dígitos de un número")
(defn sum-of-digits [n]
  (reduce + (map #(Integer/parseInt (str %)) (str n))))
(println (sum-of-digits 12345)) ; Output 15

(println "Calcular la mediana de una lista de números")
(defn median [nums]
  (let [sorted-nums (sort nums)
        len (count sorted-nums)]
    (if (odd? len)
      (nth sorted-nums (/ len 2))
      (/ (+ (nth sorted-nums (/ len 2))
            (nth sorted-nums (dec (/ len 2)))) 2))))
(println (median [1 2 3 4 5])) ; Output 3

(println "Calcular el producto punto de dos vectores")
(defn dot-product [vec1 vec2]
  (reduce + (map * vec1 vec2)))
(println (dot-product [1 2 3] [4 5 6])) ; Output 32

(println "Verificar si una cadena es un palíndromo")
(defn palindrome? [s]
  (= (seq s) (reverse s)))
(println (palindrome? "radar")) ; Output true

(println "Calcular la raíz cuadrada de cada número en una lista")
(defn square-root-of-each [nums]
  (map #(Math/sqrt %) nums))
(println (square-root-of-each [1 4 9])) ; Output (1.0 2.0 3.0)

(println "Calcular el número de Fibonacci en una posición dada")
(defn fibonacci [n]
  (if (<= n 1)
    n
    (+ (fibonacci (- n 1))
       (fibonacci (- n 2)))))
(println (fibonacci 7)) ; Output 13

(println "Obtener la lista de los primeros n números primos")
(defn prime? [n]
  "Comprueba si un número es primo."
  (not-any? #(zero? (rem n %)) (range 2 n)))
(defn first-n-primes [n]
  "Genera los primeros n números primos."
  (take n (filter prime? (iterate inc 2))))
(println (first-n-primes 5)) ; Output: (2 3 5 7 11)

(println "Calcular el factorial de un número de forma recursiva")
(defn factorial [n]
  "Calcula el factorial de un número de forma recursiva."
  (if (zero? n)
    1
    (* n (factorial (dec n)))))
(println (factorial 5)) ; Output: 120

(range 1 3);; Esta es una llamada a la función range
;; que genera una secuencia de números enteros
;; comenzando desde 1 (inclusive) y terminando 
;;en 3 (exclusive).

(println "Verificar si un número es primo")
(defn prime? [n]
  "Comprueba si un número es primo."
  (not-any? #(zero? (rem n %)) (range 2 n)))
(println (prime? 7)) ; Output: true

(println "Generar todas las permutaciones de una lista")
(defn permutations [coll]
  "Genera todas las permutaciones de una lista."
  (if (empty? coll)
    '(())
    (for [x coll
          p (permutations (remove #{x} coll))]
      (cons x p))))
(println (permutations '(1 2 3))) ; Output: ((1 2 3) (1 3 2) (2 1 3) (2 3 1) (3 1 2) (3 2 1))

;; notice that conjoining to a vector is done at the end
(conj [1 2 3] 4)
;;=> [1 2 3 4]

;; notice conjoining to a list is done at the beginning
(conj '(1 2 3) 4)
;;=> (4 1 2 3)

(conj ["a" "b" "c"] "d")
;;=> ["a" "b" "c" "d"]

;; conjoining multiple items is done in order
(conj [1 2] 3 4)               
;;=> [1 2 3 4]

(conj '(1 2) 3 4)               
;;=> (4 3 1 2)

(conj [[1 2] [3 4]] [5 6])       
;;=> [[1 2] [3 4] [5 6]]

;; conjoining to maps only take items as vectors of length exactly 2
(conj {1 2, 3 4} [5 6])
;;=> {5 6, 1 2, 3 4}

(conj {:firstname "John" :lastname "Doe"} {:age 25 :nationality "Chinese"})
;;=> {:firstname "John", :lastname "Doe", :age 25, :nationality "Chinese"}

;; conj on a set
(conj #{1 3 4} 2)
;;=> #{1 2 3 4}

(println "-----------------------------------------------------")
(println "-------------------- BORRADOR -----------------------")

(println ((fn [nums] (reduce + nums)) [1 2 5]))

(println ((fn [nums] (reduce + (map + nums))) [1 2]))

(println "Calcular el factorial de un número")
(defn factorial [n]  
  (apply * (range 2 (inc n))))
(println "fac"(factorial 4)) ; Output 120

(println "range" (range 1 3)) ;;output (1,2)

(println "apply" apply * (range 2 (inc 4)))
(defn sumaa [a b c]
  (+ a b c))
(println (apply sumaa [1 2 3])) ; Output: 6

(println "rem" (rem 10 4)) ;;Output: 2

(def numeros [6 7 8 9])

(if (not-any? #(<= % 5) numeros)
  (println "Todos los números son mayores que 5")
  (println "Al menos uno de los números es menor o igual que 5"))

(println (reduce + 5 [1 2 3 4 5]));;=> 15
(reduce + [])           ;;=> 0
(reduce + [1])          ;;=> 1
(reduce + [1 2])        ;;=> 3
(reduce + 1 [])         ;;=> 1
(reduce + 1 [2 3])      ;;=> 6
(println(reduce (fn [acc x] (if (even? x) (conj acc x) acc)) [] [1 2 3 4 5 6 7 8 9 10]))
(println(conj [] 1 2))

(defn obtener-pares [acc x]
  (if (even? x)
    (conj acc x)
    acc))

(defn sumar-pares [list]
  (reduce + (reduce obtener-pares [] list)))

(defn contar-pares [list]
  (count (reduce obtener-pares [] list)))

(defn sumar-pares-y-calcular-promedio [list]
  (let [suma (sumar-pares list)
        conteo (contar-pares list)]
    (if (zero? conteo)
      0
      (/ suma conteo))))

(defn numeros-mayores-que-5 [list]
  (reduce (fn [acc x]
            (if (> x 5)
              (conj acc x)
              acc))
          []
          list))

(defn incrementar-lista [list]
  (map inc list)) ;;map devuelve una lista y se le aplica una funcion

(defn incrementar-lista [list]
  (map + list)) ;;map devuelve una lista y se le aplica una funcion

(println (sumar-pares-y-calcular-promedio [3 2 2 6 9 4 5]))
(println (numeros-mayores-que-5 [3 9 8 2 1 5]))
(println(incrementar-lista [1 2 3 4]))



;; Funciones con map

(defn duplicar [lista]
  (map #(* 2 %) lista))

(defn a-mayusculas [lista]
  (map clojure.string/upper-case lista))

(defn longitud-cadenas [lista]
  (map count lista))

(defn agregar-prefijo [lista prefijo]
  (map #(str prefijo %) lista))

;; Funciones con reduce

(defn suma [lista]
  (reduce + lista))

(defn producto [lista]
  (reduce * lista))

(defn concatenar [lista]
  (reduce str lista))

(defn unir [lista1 lista2]
  (reduce conj lista1 lista2))

;; Ejemplos de uso

(println "Ejemplos con map:")
(println "Duplicar elementos de una lista: " (duplicar [1 2 3 4 5]))
(println "Convertir a mayúsculas: " (a-mayusculas ["hola" "mundo" "clojure"]))
(println "Longitud de cadenas: " (longitud-cadenas ["uno" "dos" "tres"]))
(println "Agregar prefijo: " (agregar-prefijo ["mundo" "clojure" "funcional"] "¡Hola, "))

(println "\nEjemplos con reduce:")
(println "Suma de números: " (suma [1 2 3 4 5]))
(println "Producto de números: " (producto [1 2 3 4 5]))
(println "Concatenación de cadenas: " (concatenar ["Hola," " " "mundo", "!"]))
(println "Unión de listas: " (unir [1 2 3] [4 5 6]))

(println ((fn [& nums] (map inc nums)) 2 3 4))
(println ((fn [nums] (map inc nums)) [2 3]))

 (defn incrementar-args [& nums]
   (map inc nums))
 
 (defn incrementar-listaa [nums]
   (map inc nums))
 
 (println (incrementar-listaa [2 3]))  ; Imprime (3 4)

(println (incrementar-args 2 3))  ; Imprime (3 4)
(println ((fn [& nums] (map #(* 2 %) nums)) 2 3 4))

(defn double-nums [& nums](map #(* 2 %) nums))

(println "double nums" (double-nums 2 3 4))
(println(filter even? [1 2 3 4 5]))
(println (filter #(> % 3) [1 2 3 4 5]))


(defn numeros-mayores-que-5 [list]
  (reduce (fn [acc x]
            (if (> x 5)
              (conj acc x)
              acc))
          []
          list))
 
 (defn insert-sorted [sorted-list x]
   (let [[left right] (split-with #(<= % x) sorted-list)]
     (concat left [x] right)))
 
 (defn sort-list [coll]
   (reduce insert-sorted [] coll))
 
 ;; Ejemplo de uso:
 (println "sort-list" (sort-list [5 4 3]))

(println "result "(reduce + 1 [1 2 3]))
(defn func1a[list] (reduce + list))
(defn func1ab [list] (map #(+ 1 %) list))
(defn func1aab [list]
  (reduce (fn [acc x]
            (if (> x 5)
              (conj acc (inc x)) ;;si es mayor que 5 le aumento 1
              (conj acc x);; sino lo devuelvo como esta
              ))
          [] 
          list))
 (defn pot [x]
   (if ( > 10 (+ 2 (* x x)))
     (println   "el resultado de multiplicar un numero por si mismo + 2 es es mayor que 10")
     (println  "el resultado de multiplicar un numero por si mismo + 2 es es menor que 10")
    )
   )
(defn pott [x]
  (let [resultado (if (< 10 (+ 2 (* x x)))
                    (str "Para x = " x ", el resultado de multiplicar un número por sí mismo más 2 es mayor que 10")
                    (str "Para x = " x ", el resultado de multiplicar un número por sí mismo más 2 es menor que 10"))]
    (println "res " resultado)
    resultado))

(defn pott3 [x]
  (let [resultado-numerico (+ 2 (* x x))
        resultado (if (< 10 resultado-numerico)
                    (str "Para x = " x ", el resultado de multiplicar un número por sí mismo más 2 es mayor que 10")
                    (str "Para x = " x ", el resultado de multiplicar un número por sí mismo más 2 es menor que 10"))]
    (println "res " resultado-numerico)
    resultado))


(println "pott" (pott3 2))

(defn tirar-dado [] (lazy-seq (cons (+ 1 (rand-int 6)) (tirar-dado))))


 ;;(println(take 30 (tirar-dado)))
;;(println(func1ab '(1 2)))
;;(println (func1aab '(1 2 4 6 9 8)))
;;(println (sumar-pares [3 2 1 6 9 4 5]))
;;clojure -M test.clj
;;La función reduce se utiliza en este caso porque estás
;; construyendo una nueva colección acumulando solo aquellos e
;;elementos que cumplen una condición específica (en este caso, ser mayores que 5) . map no es adecuada aquí porque está diseñada para transformar cada elemento de la colección, no para filtrar elementos o construir una nueva colección basada en una condición.

 ;;&: En Clojure, & se utiliza en la lista de argumentos de una función para indicar que los siguientes argumentos deben ser recogidos en una lista. Esto se conoce como "rest parameter". Por ejemplo, en la función (fn [& nums] (reduce + nums)), & nums significa que todos los argumentos pasados a la función después de nums se recogerán en una lista llamada nums.

;;apply: La función apply se utiliza para llamar a una función con una lista de argumentos. Toma la función como primer argumento y una lista de argumentos como segundo argumento, y aplica la función a esos argumentos. Por ejemplo, (apply max [1 2 3 4 5]) llama a la función max con los argumentos 1, 2, 3, 4 y 5, que están contenidos en la lista [1 2 3 4 5].

;;str: La función str se utiliza para convertir sus argumentos en cadenas y luego concatenar esas cadenas. Por ejemplo, (str "Hola" " " "mundo" "!") devuelve la cadena "Hola mundo!".

;;map: La función map se utiliza para aplicar una función a cada elemento de una secuencia (lista, vector, mapa, etc.) y devolver una nueva secuencia con los resultados. Por ejemplo, (map inc [1 2 3 4 5]) aplicará la función inc (incremento) a cada elemento de la lista [1 2 3 4 5], devolviendo una nueva lista con los elementos incrementados en 1.

;;range 1 (inc n): Esta llamada a range generará una secuencia de números enteros desde 1 hasta (inc n), donde (inc n) es n + 1. Es importante notar que inc es una función que toma un número y devuelve su sucesor. Así que (inc n) devuelve el siguiente número después de n. Sin embargo, el valor final (inc n) no está incluido en la secuencia, ya que range genera números hasta, pero no incluyendo, el número final especificado.
;;Entonces, si n es 5, (range 1 (inc n)) generará la secuencia (1 2 3 4 5).

;not-any?: Esta función verifica si ningún elemento de una
;; secuencia satisface un predicado. En este caso, el 
;;predicado es #(zero? (rem n %)), que significa "verificar si el resto de dividir n por cada número en el rango desde 2 hasta n es igual a cero". Entonces, not-any? devuelve true si ningún resto es cero, lo que significa que n no es divisible por ningún número en ese rango.

;zero?: Esta función simplemente verifica si su argumento 
;;es igual a cero. Se utiliza para verificar si el resto
;; de la división es cero.

;rem: Esta función calcula el resto de la división de dos
;;números. En este caso, rem n % calcula el resto de
;; dividir n por cada número en el rango desde 2 hasta n.