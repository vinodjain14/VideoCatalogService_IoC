# VideoCatalogService_IoC

Project Description: 
----------------------
IoC container and DI implementation using Typescript. This is just a Video catalog implementation. 

Functions: 
------------
get() - returns all records from video repository
add() - adds a new parameter
edit() - edit the details for existing records.
delete() - deleting the records from repository.

Compilation:
---------------
To copile the whole code I used the command: tsc -w (in watchmode)

Execution:
------------
To execute the code, run the below command from: node build/main.js

Test cases:
-------------
I have written some manual test scenarios instead of trying using jest. 
Using Jest we can do all the automation unit testing.

TC1 : Get all records
TC2 : Adding a new one
TC3 : Deleting one existing record
TC4 : Deleting one that does not exist in library
TC5 : Editing of the existing record

