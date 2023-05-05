Assesment Documentation


Innitial test - extra large array using insert took 882.4251 ms and only to 2.8582 ms using append

|Array Name     |Insert Runtime|Append Runtime|
|===============|==============|==============|
|extraLargeArray|884.318 ms    |3.0947 ms     |
|largeArray     |9.0662 ms     |230.8 μs      |
|mediumArray    |1.0278 ms     |1.09 ms       |
|smallArray     |8.3 μs        |4.2 μs        |
|tinyArray      |17.4 μs       |5.2 μs        |
|===============|==============|==============|

What patterns do you see?
The Append method is better for all the arrays (excluding the medium array)

How does each function “scale”?
The scaling of insert becomes exponetial as the size of the array goes up 
Meanwhile the append runtime barley changes as the size goes up

Which of the two functions scales better? 
The append function scales much better

How can you tell?
The difference between the fastest and the slowest time in the appernd is onlyt abot 3 ms

Why is the slower function so slow?
The slower functionm placing a number at the front of the array has to recalculate the 
array each time as all the numbers shift within it. Where the append adds it to the end 
so the rest of the array does not need to be recalculated