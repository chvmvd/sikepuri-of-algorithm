"use strict";(self.webpackChunksikepuri_of_algorithm=self.webpackChunksikepuri_of_algorithm||[]).push([[2294],{72294:e=>{e.exports=JSON.parse('{"nbformat":4,"nbformat_minor":2,"metadata":{},"cells":[{"metadata":{},"source":["def sum_val(scores):\\n","    s = 0\\n","    for i in range(len(scores)):\\n","        s += scores[i]\\n","    return s\\n","\\n","\\n","def sum_average(scores):\\n","    s = 0\\n","    for i in range(len(scores)):\\n","        s += sum_val(scores[i])\\n","    return s / len(scores)\\n","\\n","\\n","SCORES = [[83, 75, 32], [73, 53, 84], [63, 48, 64]]\\n","\\n","print(sum_average(SCORES))"],"cell_type":"code","outputs":[{"output_type":"stream","name":"stdout","text":["191.66666666666666\\n"]}],"execution_count":null}]}')}}]);