import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

import {BuildCloset} from './construct.js'
import {params_closet} from "./closet.js";

const params = {
    amount_section: params_closet.amount_section,
    z: params_closet.z,
    x: params_closet.x,
    y: params_closet.y
};

const gui = new GUI();

gui.title("Construct")

gui.add( params, 'amount_section',2, 5, 1).name( 'amount_section' ).onChange( function ( value ) {
    params_closet.amount_section = value
    BuildCloset()
} );

gui.add( params, 'z',50, 300, 1).name( 'height' ).onChange( function ( value ) {
    params_closet.z = value
    BuildCloset()
} );

gui.add( params, 'x',100, 300, 1).name( 'width' ).onChange( function ( value ) {
    params_closet.x = value
    BuildCloset()
} );

gui.add( params, 'y',45, 60, 1).name( 'depth' ).onChange( function ( value ) {
    params_closet.y = value
    BuildCloset()
} );
