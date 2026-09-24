//OPPS -
//CLASS - BluePrint
//Obejct - Real World Entity


//Class - CAR(Wheels,Engine,color-Common Prop)

//Object - BWM(6inch , v6 , balck)
//        Toyota(8inc, v4, blue)

//A NODE HAS DATA(value) AND A POINTER(Address of Next Node)

class ListNode{

    constructor(value){
         this.value = value;
         this.next = null;   //Point to Next Node
    }

}

//Object: new ClassName(Parameter-Give The Value of Parameter)

 const node1 =   new ListNode(1)
 const node2  = new ListNode(2)
 const node3 = new ListNode(3)


 node1.next = node2
 node2.next = node3

 //node3.next = null(end of list)

 //Print The List
 function printList(head){


    let current = head

    while(current != null){
        console.log(`   ${current.value} --->  `)
        current =  current.next
    }

    console.log("null")
 }

 printList(node1)




 //Find The Middle of Linked List (Two Pointer)

 //slow - 1 step - Left and Fast-Right-2 step

 function findMiddle(head){
  
    let slow = head

    let fast = head

    while(fast !== null && fast.next !==null){
        slow = slow.next;  //1 Step
        fast = fast.next.next;  //2 Setp
    }

    return slow

 }

 //Visualation 1(head)-->2--3-->4-->5;

 //step 1 : slow = 1, fast=1

 //step 2:  slow = 2, fast=3;

 //step 3   slow=3, fast = 5(fast.next -->null : Stop)
 //Retur slow that is 3
       

//Probel 2 : Reverse a Linked List

//--head(Current)-->1-->2-->3-->4-->5-->null(Prev)   and 5-->4-->3-->2--1

function revseredList(head){

let prev = null;

let current = head;

while(current!==null){

const next = current.next  //Save Next

current.next = prev  //Reverse Direction
prev = current  //Move The Prev Forward
current = next  //Move The Current Forward

}

return prev  //


}


//Step by Step 1 -->2  -->3

//Start prev= null,current = 1

// next = 2  ,  1.next= null , prev = 1 , current = 2


//Problem 3 - FLOYD'S CYCLE DETECTION - Detect loop

//1 -->2-->3-->4-->2(back to 2)  -YES

//1-->2-->3--null - NO

//FLOYD Algorithm(Tortise and Rabbite)
//Two pointer - slow and fast
//if Cycle - They Must Meet
//No Cycle - fast reaches to null first

function hasCyle(head){

    if(!head || !head.next) return false
   
    let slow = head

    let fast = head

    while(fast !== null && fast.next !==null){
        slow = slow.next;  //1 Step
        fast = fast.next.next;  //2 Setp

        if(slow === fast){
            return true // They met
        }
    }

    return false  // Fast reavhes to null

 }





