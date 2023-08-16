
/**
 * 
 * @param {*} dat 
 * @param {Object} nex 
 * @returns 
 */
function list_node(dat, nex) {
    let component = {
        data : dat,
        next : nex,
        set_next : function(n) {
            this.next = n;
        },
        set_data : function(d) {
            this.data = d;
        }
    }

    if (dat != null) {
        component.data = dat
    }
    if (nex != null) {
        component.next = nex
    }
    
    return component;
} 

/**
 * 
 * @param {Object} st 
 */
export default function Linked_List(st) {
    let component = {
        length : 0,
        start : list_node(st, null),
        end : list_node(st, null),
        /**
         * 
         * @param {Object}} item item that represents a Node, this will have a current value and a next value
         */
        push : function(it) {
            let item = list_node(it);

            if (this.length == 0) {
                this.start = item;
                this.end = item;
                this.length++;
            }
            else {
                this.end.next = item;
                this.end = item;
                this.length++;
            }
            
        },
        /**
         * 
         * @param {Object} it 
         * @param {Number} index index from between [0 -> (length - 1)]
         */
        add_item_at : function(it, index) {
            let item = node(it)
            if (this.length == 0) {
                this.start = item;
                this.end = item;
                this.length++;
            }
            else {
                let i = 0;

                

                let current = this.start;
                
                while (i < index - 1) {
                    current = current.next
                    i++;
                }

                if (index == 0) {
                    item.next = this.start;
                    this.start = item;

                }
                else {
                    item.next = current.next;
                    current.next = item;

                }

                
                
                
            }
        },
        /**
         * 
         * @param {Object} item Node with other elements, adds these elements to this list
         * @param {Number} index Index to add the list to
         * 
         * TODO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
         */
        add_list_at: function(item, index) {

            if (item.next == null) {
                this.add_item_at(item, index)
            }

            let i = 0;

                

                let current = this.start;
                
                while (i < index) {
                    current = current.next
                }

                let inner_current = item;
                if (item.next!= null){
                    inner_current = item.next;
                    while (inner_current.next != null) {
                        inner_current = inner_current.next;
                    }
                }

                if (index == 0) {
                    inner_current.next = this.start;
                    this.start = item;

                }
                else {
                    inner_current = item.next;
                    
                }

        },
        /**
         * 
         * @returns {}
         */
        pop: function() {
            let ret_node = this.end;
            let current = this.start;
            while(this.end != current.next) {
                current = current.next
            }
            this.end = current;
            this.end.next = null;

            this.length--;

            
            return ret_node;
        },
        /**
         * 
         * @param {} nd Node that will be found 
         * @returns {Number}
         */
        find: function(nd) {
            let node = list_node(nd);
            let current = this.start;
            let index = 0;

            while(current != node) {
                current = current.next
                index++;
                if (current.data == node.data) {
                    return index;
                }
                if (current.next == null) {
                    break;
                }
            }
            return -1;
        },
        /**
         * 
         * @param {Number} index index of the data to grab
         * @returns {Object}
         */
        at : function(index) {
            let current = this.start;
            if (index == 0) {
                return current;
            }
            if (index == this.length - 1) {
                return this.end;
            }
            let i = 0;
            while (i < index) {
                current = current.next
                i++;
            }
            return current;
        },
        /**
         * incomplete method to detect a loop
         */
        detect_loop : function(){
            let fast = this.start;
            let slow = this.start;

            
        }
    }

    return component;

}