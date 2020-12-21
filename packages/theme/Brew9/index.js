import React from 'react';
import Logo from './components/logo/index';

class Brew9 extends {
    constructor() {
    }

    getLogo(){
        return (<Logo/>);
    }

    logoRequire(){
        return require('./assets/images/logo.png');
    }
}
const brew9 = new Brew9();
export default brew9;