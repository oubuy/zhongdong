import {
    Attributes
} from 'js/core/attributes';
import $ from 'jquery';

class FWClass extends Attributes {
    constructor() {
        super()
    }

}

if (!window.FW) {
    window.FW_CONFIG = {};
    window.FW = new FWClass();
    window.FW.config = window.FW_CONFIG;
   
}

let FW = window.FW;
export {
    FW
};