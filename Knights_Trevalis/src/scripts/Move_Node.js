export default class Move_Node {
    constructor(m, u_r, u_l, l_r, l_l, s) {
        this.move = m;
        this.upper_right = u_r;
        this.upper_left = u_l;
        this.lower_left = l_l;
        this.lower_right = l_r;
        this.score = s;
    }
}