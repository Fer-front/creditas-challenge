# Creditas Analytics Data Engineering Challenge

**AVISO SOBRE O TESTE SER EM INGLÊS**

Esse teste está em inglês pois acreditamos que a **leitura** em inglês é parte do dia a dia das pessoas em tecnologia. Se você não domina totalmente a língua isso não é de forma alguma um problema. Se precisar de ajuda para esclarecer algum ponto que não ficou claro, não hesite em nos perguntar. :relaxed:  
  
### Introduction
  This is a logic based test, so you don't need any complex tools installed, just a way to execute your favorite programming language. You're going to find 8 datasets related to Problem 1 and Problem 2 with inputs and outputs for both of them on the ***/in-outs***  folder . They're going to help you finish the task, just make sure your output is the same that the one we provided and voilà!  
    Important, try to be concise and clear, explain your logic with comments and if you cannot finish the test: **no problem!** Just write some of your thoughts on a readme.md and let us know what you think about it.

## Problem 1 - The message devourer

Creditas has two systems, a message Producer (P) and a message Consumer (C) that communicate through a queue (Q). The producer could post any number of messages on the queue at any time, and the only way they can leave the queue is by being consumed by C.
<br />

**Figure out the minimum number of messages that C could have consumed using two different methods of computation:**

    Method 1 - Assume the consumer could consume any number of messages at any time.
    Method 2 - Assume that, starting with the first time we look at the queue, C consumes the messages at  
    a constant rate whenever there are messages on the queue. 


The input is the log of the ammount of messages on the queue at 100-miliseconds intervals.

For example, if the input is 10 5 15 5, it means that at the timestamp 0ms there were 10 messages on the queue, at timestamp 100ms there were 5 messages on the queue and so on (15 at 200ms and 5 at 300ms).

With the first method, C must have consumed at least 15 messages for the input above: first it consumes 5 messages, then 10 more are posted on the queue, then it consumes another 10. There's no way C could have consumed fewer messages.

With the second method, C must have consumed at least 25 messages. We can determine that C consumes messages at a rate of at least 1 message per 10 miliseconds. It starts with 10 messages on the queue. In the first 100 miliseconds, it consumes 10 messages, and 5 more are posted on the queue. In the next 50 miliseconds, it consumes 5 messages, then the queue stays empty for 50 miliseconds, and then P posts 15 more messages on the queue. Then it consumes 10 messages in the last 100 miliseconds, at the end the queue will still have 5 messages.

### Input

The first line of the input gives the number of test cases, T. T test cases follow. Each will consist of one line containing a single integer N, followed by a line containing N space-separated integers mi; the number of messages on the queue Q at the start, and at 100-miliseconds intervals.

### Output

For each test case, output one line containing "Case #x: y z", where x is the test case number (starting from 1), y is the minimum number of messages C could have consumed using the first method of computation, and z is the minimum number of messages C could have consumed using the second method of computation.

### Limits
<br />1 ≤ T ≤ 100.
<br />
<br />Small dataset
<br />2 ≤ N ≤ 10.
<br />0 ≤ mi ≤ 100.
<br />
<br />Large dataset
<br />2 ≤ N ≤ 1000.
<br />0 ≤ mi ≤ 10000.

### Sample


<table border="0">
 <tr>
    <td><b style="font-size:20px">Input</b></td>
    <td><b style="font-size:20px">Output</b></td>
 </tr>
 <tr>
    <td valign="top">
    4
    <br>4
    <br>10 5 15 5
    <br>2
    <br>100 100
    <br>8
    <br>81 81 81 81 81 81 81 0
    <br>6
    <br>23 90 40 0 100 9
</td>
    <td valign="top">
    Case #1: 15 25
    <br>Case #2: 0 0
    <br>Case #3: 81 567
    <br>Case #4: 181 244</td>
 </tr>
</table>



## Problem 2 - We're cheap, but fun!

Up until today, Creditas could use D different flavors of computing nodes for all applications (a flavor is a template of a computing node with a certain ammount of cores, memory and storage). Today, the main midleware we adopted restricted the number of nodes of each flavor the applications can use. So, our engineers decided that no more than C nodes of any flavor may be used by any application. For instance, if C = 2 and the two existing flavors have 1 and 5 cores, it is possible to deploy an application that needs 11 cores by using two 5s and one 1, or an application that needs 12 cores by using two 5s and two 1s, but it is impossible to have an application that needs 9 or 17 cores (the ammount of cores must be exact, it's not allowed to have idle cores. Remember, we're cheap).

Sadly, now you are in charge of controlling the available flavors. A good thing is: you can order new flavors to the cloud provider! You want to make it possible for ***any application that needs at most V cores to be deployed*** under the engineers' new rules. (Note that this may not necessarily have been possible before the new midleware was adopted). Moreover, you want to introduce as few new flavors as possible because they're too expensive, and your final combined set of pre-existing and new flavors may not have any repeats.

**What is the smallest number of new flavors you need to request?**

<br />

### Input
The first line of the input gives the number of test cases, T. T test cases follow. Each consists of one line with three space-separated values C, D, and V, followed by another line with D distinct space-separated values representing the number of cores on the preexisting available flavors, in ascending order.

### Output
For each test case, output one line containing "Case #x: y", where x is the test case number (starting from 1) and y is the minimum number of new flavors required, as described above.

### Limits
1 ≤ T ≤ 100.
<br />Each existing denomination ≤ V.
<br /><br />Small dataset
<br />C = 1.
<br />1 ≤ D ≤ 5.
<br />1 ≤ V ≤ 30.
<br /><br />Large dataset
<br />1 ≤ C ≤ 100.
<br />1 ≤ D ≤ 100.
<br />1 ≤ V ≤ 109.

### Sample

<table border="0">
 <tr>
    <td><b style="font-size:20px">Input</b></td>
    <td><b style="font-size:20px">Output</b></td>
 </tr>
 <tr>
    <td valign="top">
        4
        <br>1 2 3
        <br>1 2
        <br>1 3 6
        <br>1 2 5
        <br>2 1 3
        <br>3
        <br>1 6 100
        <br>1 5 10 25 50 100
    </td>
    <td valign="top">
            Case #1: 0
        <br>Case #2: 1
        <br>Case #3: 1
        <br>Case #4: 3
    </td>
 </tr>
</table>

In Case #1, it is already possible to deploy any application, because the required number of cores (1, 2, and 3) can be achieved by using at most one copy of each of the existing flavors (flavors with 1 and 2 cores).

In Case #2, it suffices to add a flavor of either 3 or 4 cores -- whichever you choose, only one new flavor is required.

In Case #3, the optimal solution is to add a flavor of 1 core.
