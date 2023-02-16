"use strict"

/*
Какие из перечисленных ниже alert выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)?
*/

if (-1 || 0) alert( 'first' ); // alert выполнится, так как -1 = True
if (-1 && 0) alert( 'second' ); // alert не выполнится, так как -1 && 0 = False
if (null || -1 && 1) alert( 'third' ); // alert выполнится, так как False || True = True