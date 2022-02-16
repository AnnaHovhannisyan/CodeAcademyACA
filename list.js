
try {
    function LinkedList() {

        this.head = null;
        this.tail = null;
        this.size = function () {
            let count = 0;
            if ((typeof this.head === "object" && !this.head) && (typeof this.tail === "object" && !this.tail)) {

                return count;

            } else if ((typeof this.tail === "object" && !this.tail)) {

                return count = 1;

            } else {
                let current;
                let count = 1;
                current = this.head;
                while (current.next) {
                    current = current.next;
                    count++;

                }
                return count;
            }

        };


        this.insertHead = function (data) {

            return this.head = new Node(data, this.head);

        };
        this.insertTail = function (data) {
            let node = new Node(data);
            let current;
            if ((typeof this.head === "object" && !this.head)) {
                this.insertHead(data);
            } else {

                current = this.head;
                node.previous = current;
                current.next = node;
                return this.tail = node;

            }


        };


        this.push = function (data) {

            if ((typeof this.head === "object" && !this.head) && (typeof this.tail === "object" && !this.tail)) {

                // let {value:val}=data;
                this.insertHead(data);
                return this.size();

            } else if ((typeof this.tail === "object" && !this.tail)) {

                //let {value:v}=data;
                this.insertTail(data);

                return this.size();

            } else {
                let node = new Node(data);
                let current;

                current = this.head;
                while (current.next) {
                    current = current.next;

                }
                node.previous = current;
                node.next = null;
                current.next = node;

                this.tail = node;
                return this.size();
            }

        };

        this.unshift = function (data) {

            if ((typeof this.head === "object" && !this.head) && (typeof this.tail === "object" && !this.tail)) {

                this.insertHead(data);
                return this.size();

            } else if ((typeof this.tail === "object" && !this.tail)) {
                let current;
                current = this.head;
                let node = new Node(data);
                node.previous = null;
                node.next = current;
                current.previous = node;
                this.tail = current;
                current = current.previous;
                this.head = current;
                return this.size();


            } else {
                let node = new Node(data);
                let headItem;
                headItem = this.head;
                node.next = headItem;

                node.previous = null;
                headItem.previous = node;
                let current;
                current = this.tail;
                while (current.previous) {
                    current = current.previous;
                }

                this.head = current;
                return this.size();
            }

        };

        this.shift = function () {

            if ((typeof this.head === "object" && !this.head) && (typeof this.tail === "object" && !this.tail)) {
                return undefined;
            } else if ((typeof this.tail === "object" && !this.tail)) {
                let shiftObj = Object.assign({}, this.head);
                Object.defineProperties(shiftObj, {
                    next: {
                        value: null,
                        enumerable: true,
                    },
                    previous: {
                        value: null,
                        enumerable: true,
                    },
                });
                this.head = null;
                return shiftObj;

            } else {

                let shiftFirst = this.head;

                let shiftIt = Object.assign(new Node(), shiftFirst);
                Object.defineProperties(shiftIt, {
                    next: {
                        value: null,
                        enumerable: true,
                    },
                    previous: {
                        value: null,
                        enumerable: true,
                    },
                });

                shiftFirst.next.previous = null;

                let current = this.tail;

                while (current.previous) {
                    current = current.previous;

                }

                this.head = current;

                return shiftIt;
            }
        };


        this.pop = function () {

            if ((typeof this.head === "object" && !this.head) && (typeof this.tail === "object" && !this.tail)) {
                return undefined;
            } else if ((typeof this.tail === "object" && !this.tail)) {
                let popLast = this.head;

                Object.defineProperties(popLast, {
                    next: {
                        value: null,
                        enumerable: true,
                    },
                    previous: {
                        value: null,
                        enumerable: true,
                    }
                });

                this.head = null;
                return popLast;

            } else {
                let lastItem = this.tail;

                let lItem = Object.assign(new Node(), lastItem);
                Object.defineProperties(lItem, {
                    next: {
                        value: null,
                        enumerable: true,
                    },
                    previous: {
                        value: null,
                        enumerable: true,
                    }
                });

                lastItem.previous.next = null;


                let current = this.head;

                while (current.next) {
                    current = current.next;
                }
                this.tail = current;


                return lItem;

            }


        };

        this.delete = function (data) {
            let currentValue;
            let first = false;
            let second = false;
            let third = false;

            currentValue = this.head;
            let {value: valTail} = this.tail;


            while (currentValue.next) {

                let {value: val} = currentValue;
                let {value: valHead} = this.head;
                if (val === data) {


                    if (valHead === val && !(typeof val === 'undefined') && !second && !first) {
                        let f = this.head;

                        f.next.previous = null;


                        let current = this.tail;

                        while (current.previous) {
                            current = current.previous;

                        }

                        this.head = current;

                        second = true;

                        break;


                    } else if (valTail !== val && valHead !== val && !(typeof val === 'undefined') && !second) {
                        let current = currentValue;
                        let some = current.previous;
                        some.next = current.next;
                        some.next.previous = some;

                        third = true;
                        break;

                    }

                }

                currentValue = currentValue.next;

                first = true;

            }


            if (valTail === data && !(typeof data === 'undefined') && first && !second && third) {

                let deleteTail = this.tail;

                deleteTail.previous.next = null;


                let current = this.head;

                while (current.next) {
                    current = current.next;
                }
                this.tail = current;

            }

        };

    }

    function Node(value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}catch (e) {
    if (e instanceof TypeError) {
        console.log('typeError')

    } else if (e instanceof RangeError) {
        console.log('rangeError')

    } else if (e instanceof EvalError) {
        console.log('EvalError')

    } else {

        console.log('other error');
    }

}
let dl=new LinkedList();

console.log(dl.insertHead(1));
console.log(dl.insertTail(2));
console.log(dl.size(),'count');
console.log(dl,'Doubly Linked List before');

console.log(dl.push(10),'pushed List length');
console.log(dl.push(20),'pushed List length');
console.log(dl.push(10),'pushed List length');
console.log(dl.push(50),'pushed List length');
console.log(dl.size(),'count');

console.log(dl,'list before pop');

console.log(dl.pop(),'popItem');
console.log(dl,'list after pop');

console.log(dl.unshift(40),'unshift list length');
console.log(dl,'after unshift');

console.log(dl.shift(),'shift Item');
console.log(dl,'list','after shift');

console.log(dl.delete(10),'deleted item');
console.log(dl,'after delete');
console.log(dl.size(),'count');
