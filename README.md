# simpleWebShell
A simple shell write in php and js

~~~
 git clone https://github.com/Izakun/simpleWebShell.git
 cd simpleWebShell
 php -S localhost:8000
~~~

![idx](https://raw.githubusercontent.com/Izakun/simpleWebShell/master/demo.gif "demo")

## sudo command without password
&nbsp;edit sudoers file
~~~
sudo visudo
~~~
### All commands (unsafe)
add this line at the end :
~~~
www-data ALL=NOPASSWD: ALL
~~~
save (ctrl + x and o)
### Specific command
add this line at the end :
~~~
www-data ALL=NOPASSWD: usr/bin/php, ...
~~~
able to make all php commands
save (ctrl + x and o)
