"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[1414],{1414:n=>{n.exports=JSON.parse('{"nbformat":4,"nbformat_minor":2,"metadata":{},"cells":[{"metadata":{},"source":["def is_prime_number(n):\\n","    if n < 2:\\n","        return False\\n","    for i in range(2, n):\\n","        if n % i == 0:\\n","            return False\\n","    return True\\n","\\n","\\n","def print_prime_number(n):\\n","    for i in range(1, n + 1):\\n","        if is_prime_number(i):\\n","            print(i)\\n","\\n","\\n","print_prime_number(100)"],"cell_type":"code","outputs":[{"output_type":"stream","name":"stdout","text":["2\\n","3\\n","5\\n","7\\n","11\\n","13\\n","17\\n","19\\n","23\\n","29\\n","31\\n","37\\n","41\\n","43\\n","47\\n","53\\n","59\\n","61\\n","67\\n","71\\n","73\\n","79\\n","83\\n","89\\n","97\\n"]}],"execution_count":null}]}')}}]);