
class SLLNode {
    constructor(data) {
        this.value = data; 
        this.next = null;
    }
}

class SLL { 
    constructor() { 
        this.head = null; 
    }

    addFront(val) {
        var createNode = new SLLNode(val); 
        createNode.next = this.head; 
        this.head = createNode; 
        return this.head; 
    }

    removeFront() {
        if (!this.head) {
            return this.head;
        }
        var deleteNode = this.head; 
        this.head = deleteNode.next;
        deleteNode.next = null;
        return this.head;
    }

    front() {  
        if (!this.head) {
            return null;
        } else {
            return this.head.value;
        }
    }


    display() {
        var string = ""; 
        if (!this.head) {
            return ""; 
        }
        string += this.head.value; 
        var mover = this.head.next;
        while (mover != null) {
            str += ", " + mover.value; 
            mover = mover.next; 
        return str;
        }
    }
}
